"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJsSquare,
  FaBootstrap,
  FaDatabase,
  FaGithub
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiFirebase,
  SiEslint,
  SiAmazonaws,
  SiCloudinary,
  SiHostinger,
  SiDatabricks,
  SiMaterialdesign
} from "react-icons/si";
import { delay, motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const about = {
  title: "about me",
  description:
    "Here’s a snapshot of who I am, where I’m based, and how you can connect with me. ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Noufal T",
    },
    {
      fieldName: "Phone",
      fieldValue:"(+91) 88908890",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "noufal@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English,Malayalam,Tamil,Hindi",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description:
   " Explore my experience to see how I’ve contributed to various teams and projects with skill and innovation.",
  items: [
    {
      company: "Hilite ",
      position: "Consultant",
      duration: "2014 -Present",
    },
    {
      company: "Freelance",
      position: "Business",
      duration: "2004 -2014",
    },
  ],
};
const education = {
  icon: "",
  title: "My education",
  description:"A journey through various educational experiences provided me deep understanding and practical skills in this field. Each step in my education has contributed to my growth and expertise.",
  items: [
    {
      institution: "College",
      degree: "ABC University",
      subject: "Degree",
    },
    {
      institution: "School",
      degree: "Higher Secondary",
      subject: "Computer Science",
    },
    {
      institution: "Chalakkara School",
      degree: "Secondary Education",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">

            {/* Experience */}

            <TabsContent value='experience' className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-2xl font-bold">{experience.title}</h3>
                <p className="max-w-[500px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[300px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] ">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[160px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}

            <TabsContent value='education' className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-2xl font-bold">{education.title}</h3>
                <p className="max-w-[500px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[300px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] ">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#232329] h-[160px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.subject}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About me */}

            <TabsContent value='about' className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-2xl font-bold">{about.title}</h3>
                  <p className="max-w-[500px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 mx-auto xl:mx-0 gap-y-4 max-w-[620px] ">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex justify-center items-center text-wrap xl:justify-start gap-2">
                      <span className="text-white/60">{item.fieldName}:</span>
                      <span className="text-lg">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;