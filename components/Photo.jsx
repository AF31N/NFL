"use client";

import Image from "next/image";
import img from "../public/WhatsApp_Image_2023-02-15_at_11.49.58-edited.png";
import { motion } from "framer-motion";
import { useState } from "react";

const Photo = () => {
  // State to track position for 3D motion
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Mouse Move Effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20, // Normalize X
      y: (e.clientY - rect.top - rect.height / 2) / 20, // Normalize Y
    });
  };

  // Touch Move Effect (For Mobile)
  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    setPosition({
      x: (touch.clientX - rect.left - rect.width / 2) / 20, // Normalize X
      y: (touch.clientY - rect.top - rect.height / 2) / 20, // Normalize Y
    });
  };

  return (
    <div
      className="w-full h-full relative flex justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      onMouseMove={handleMouseMove} // Trigger 3D effect on mouse
      onTouchMove={handleTouchMove} // Trigger 3D effect on touch
    >
      <motion.div
        className="relative w-[250px] h-[250px] md:w-[298px] md:h-[298px] xl:w-[400px] xl:h-[350px] mix-blend-lighten"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) rotateX(${position.y}deg) rotateY(${-position.x}deg)`,
        }}
        animate={{ scale: 1.05 }} // Subtle scaling for all devices
        whileHover={{ scale: 1.15, y: -10 }} // Hover effects for desktop
        whileTap={{ scale: 1.1 }} // Tap effect for mobile
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        {/* Glowing background effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500 to-blue-500 opacity-50 blur-lg"
          animate={{
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        ></motion.div>

        {/* Dynamic shadow based on position */}
        <motion.div
          className="absolute inset-0 rounded-3xl shadow-xl"
          style={{
            boxShadow: `${position.x}px ${position.y}px 30px rgba(0, 0, 0, 0.5)`,
          }}
        />

        {/* Image with rounded corners */}
        <Image
          src={img}
          priority
          quality={100}
          fill
          alt="profile"
          className="object-contain rounded-3xl shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Photo;
