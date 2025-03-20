"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaMapMarkerAlt, FaPlane, FaHotel, FaCamera } from "react-icons/fa";
import { BsArrowUpRight, BsGlobe } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const travel = [
  {
    num: "01",
    name: "Dubai",
    description:
      "I was absolutely mesmerized by Dubai's futuristic skyline and luxurious vibe. Standing at the top of the Burj Khalifa was surreal—the view of the city and the desert beyond was breathtaking. I also enjoyed the thrill of a desert safari, where I rode camels and watched the sunset over the dunes. The Dubai Mall was a shopper's paradise, and I couldn't resist visiting the Palm Jumeirah, which felt like a dream come true.",
    highlights: [
      { name: "Burj Khalifa" },
      { name: "Palm Jumeirah" },
      { name: "Desert Safari" },
      { name: "Dubai Mall" },
      { name: "Cultural Heritage" },
    ],
    images: ["/assets/travel/dubai-1.jpg"],
    guide: "https://www.visitdubai.com/",
    photos: "https://unsplash.com/s/photos/dubai",
  },
  {
    num: "02",
    name: "Ghana",
    description:
      "Ghana was an unforgettable experience filled with rich culture and history. I explored the Cape Coast Castle, which was both moving and educational, and walked through the treetops at Kakum National Park—an adventure I'll never forget. The bustling markets in Accra were vibrant and full of life, and the beaches in Cape Coast were serene and beautiful. I also had the chance to witness a traditional festival, which was a colorful celebration of Ghanaian heritage.",
    highlights: [
      { name: "Cape Coast Castle" },
      { name: "Kakum National Park" },
      { name: "Accra Markets" },
      { name: "Beaches" },
      { name: "Festivals" },
    ],
    images: ["/assets/travel/ghana-1.jpg"],
    guide: "https://www.ghana.travel/",
    photos: "https://unsplash.com/s/photos/ghana",
  },
  {
    num: "03",
    name: "Bahrain",
    description:
      "Bahrain was a perfect blend of modernity and tradition. I visited the Bahrain National Museum, where I learned about the country's rich history, and the Al Fateh Grand Mosque, which was stunningly beautiful. The ancient Bahrain Fort was a highlight, offering a glimpse into the past. I also explored the vibrant souks and even tried pearl diving, which was a unique and memorable experience. Watching the Formula 1 Grand Prix was the cherry on top!",
    highlights: [
      { name: "Bahrain National Museum" },
      { name: "Al Fateh Grand Mosque" },
      { name: "Bahrain Fort" },
      { name: "Pearl Diving" },
      { name: "Formula 1" },
    ],
    images: ["/assets/travel/bahrain-1.jpg"],
    guide: "https://www.bahraintourism.com/",
    photos: "https://unsplash.com/s/photos/bahrain",
  },
  {
    num: "04",
    name: "Nigeria",
    description:
      "Nigeria was a vibrant and diverse adventure. In Lagos, I was captivated by the city's energy and visited its bustling markets, where I tried local delicacies. Yankari National Park was a nature lover's dream—I saw elephants, monkeys, and even took a dip in the warm springs. The cultural festivals were a riot of colors and music, and the historical sites gave me a deeper appreciation for Nigeria's rich heritage.",
    highlights: [
      { name: "Lagos City" },
      { name: "Yankari National Park" },
      { name: "Cultural Festivals" },
      { name: "Historical Sites" },
      { name: "Vibrant Markets" },
    ],
    images: ["/assets/travel/nigeria-1.jpg"],
    guide: "https://www.tourism.gov.ng/",
    photos: "https://unsplash.com/s/photos/nigeria",
  },
];

const iconMap = {
  "Burj Khalifa": <FaMapMarkerAlt className="text-white text-sm" />,
  "Palm Jumeirah": <FaMapMarkerAlt className="text-white text-sm" />,
  "Desert Safari": <FaPlane className="text-white text-sm" />,
  "Dubai Mall": <FaHotel className="text-white text-sm" />,
  "Cultural Heritage": <FaCamera className="text-white text-sm" />,
  "Cape Coast Castle": <FaMapMarkerAlt className="text-white text-sm" />,
  "Kakum National Park": <FaMapMarkerAlt className="text-white text-sm" />,
  "Accra Markets": <FaHotel className="text-white text-sm" />,
  Beaches: <FaCamera className="text-white text-sm" />,
  Festivals: <FaCamera className="text-white text-sm" />,
  "Bahrain National Museum": <FaMapMarkerAlt className="text-white text-sm" />,
  "Al Fateh Grand Mosque": <FaMapMarkerAlt className="text-white text-sm" />,
  "Bahrain Fort": <FaMapMarkerAlt className="text-white text-sm" />,
  "Pearl Diving": <FaCamera className="text-white text-sm" />,
  "Formula 1": <FaPlane className="text-white text-sm" />,
  "Lagos City": <FaMapMarkerAlt className="text-white text-sm" />,
  "Yankari National Park": <FaMapMarkerAlt className="text-white text-sm" />,
  "Cultural Festivals": <FaCamera className="text-white text-sm" />,
  "Historical Sites": <FaMapMarkerAlt className="text-white text-sm" />,
  "Vibrant Markets": <FaHotel className="text-white text-sm" />,
};

const TravelPage = () => {
  const [destination, setDestination] = useState(travel[0]);

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.activeIndex;
    setDestination(travel[currentSlide]);
  };

  return (
    <motion.div
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, ease: "easeIn", duration: 0.4 } }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-16">
          {travel.map((destination, index) => (
            <div key={index} className="flex flex-col xl:flex-row gap-8">
              <div className="w-full xl:w-[50%] flex flex-col justify-between">
                <div className="flex flex-col gap-[30px]">
                  <div className="text-8xl font-extrabold text-transparent text-outline">
                    {destination.num}
                  </div>
                  <h3 className="text-[42px] font-bold text-white">{destination.name}</h3>
                  <p className="text-white/60">{destination.description}</p>
                  <ul className="flex flex-wrap gap-4 text-accent">
                    {destination.highlights.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {iconMap[item.name]} {item.name}
                      </li>
                    ))}
                  </ul>
                  <div className="border border-white/20"></div>
                  <div className="flex items-center gap-4">
                    {destination.guide && (
                      <Link href={destination.guide}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="rounded-full bg-white/5 p-4">
                              <BsArrowUpRight className="text-white text-3xl" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Travel Guide</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                    <Link href={destination.photos}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="rounded-full bg-white/5 p-4">
                            <BsGlobe className="text-white text-3xl" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Photos</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[50%]">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  onSlideChange={handleSlideChange}
                >
                  {destination.images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="relative w-full h-full">
                        <Image
                          loading="lazy"
                          height={340}
                          width={960}
                          src={image}
                          alt={`travel-image-${idx}`}
                          className="object-fill"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TravelPage;