'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectLabel, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91) 88008800'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'noufal@gmail.com'
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Palakkad, India, Kerala 678002'
  }
];

const Contact = () => {
  const [notification, setNotification] = useState(null);
  const secretKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", secretKey); // Use the API key from environment

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        setNotification({ type: 'success', message: 'Your message has been sent successfully!' });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setNotification({ type: 'error', message: 'There was an error sending your message. Please try again.' });
      }
    } catch (error) {
      setNotification({ type: 'error', message: 'Network error, please try again.' });
    }
  }

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, ease: 'easeIn', duration: 0.4 } }} className="py-6 xl:py-0">
      <div className="container mx-auto">
        {notification && (
          <div className={`fixed top-0 left-0 w-full p-4 text-white ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} z-50`}>
            {notification.message}
          </div>
        )}
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Reach out through the form below for any inquiries. Please provide your details and message, and I'll respond as soon as possible.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="hidden" name="from_name" value="Abis Portfolio Enquiry check it out" />
                <Input type="text" name="firstname" required placeholder="Firstname" />
                <Input type="text" name="lastname" required placeholder="Lastname" />
                <Input type="email" name="email" required placeholder="Email address" />
                <Input type="tel" name="phone" required placeholder="Phone number" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue required placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select A service</SelectLabel>
                    <SelectItem key="web-dev" value="Web Development">Web Development</SelectItem>
                    <SelectItem key="ui-dev" value="UI Development">UI Development</SelectItem>
                    <SelectItem key="logo-dev" value="Logo Development">Logo Development</SelectItem>
                    <SelectItem value="Consulting" key="consulting">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea required name="description" className="h-[100px]" placeholder="Type your message here" />
              <Button size="md" type="submit" className="max-w-40">Send Message <FaTools /></Button>
            </form>
          </div>

          <div className="flex-1 justify-center flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li className="flex items-center gap-6" key={index}>
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
