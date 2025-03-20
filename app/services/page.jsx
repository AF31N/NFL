"use client"
import Link from 'next/link'

import { BsArrowDownRight } from "react-icons/bs";
import { animate, motion } from 'framer-motion'


const Service = () => {
  const data = [
    {
      num: "01",
      title: 'Business Strategy Consulting',
      description: 'I provide strategic guidance to help businesses identify opportunities, optimize operations, and drive growth.'
    },
    {
      num: "02",
      title: 'Market Analysis & Insights',
      description: 'I analyze market trends and customer behavior to deliver actionable insights and competitive advantages.'
    },
    {
      num: "03",
      title: 'Process Optimization',
      description: 'I streamline business processes to improve efficiency, reduce costs, and enhance overall performance.'
    },
    {
      num: "04",
      title: 'Client-Centric Solutions',
      description: 'I craft tailored strategies based on deep industry knowledge and client needs to achieve business goals.'
    },
  ];
  


  return (
    <section className='min-h-[70vh] flex flex-col justify-center  py-12 xl:py-0 '>
      <div className='container mx-auto' >
        <motion.div initial={{opacity:0}} animate={{
          opacity:1,
          transition:{delay:2.4, duration:0.4, ease:"easeIn"},
        }} className='grid grid-cols-1 md:grid-cols-2 gap-[60px]  '>
          {data.map((item, index) => (
            <div key={index} className=' justify-center gap-6 group'>
              <div className='w-full flex justify-between items-center group-hover:text-accent-hover transition-all duration-500 ' >
                <div className='text-4xl text-outline font-extrabold text-transparent ' >
                  {item.num}
                </div>
                <Link className='w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center group-hover:bg-accent-hover  transition-all hover:-rotate-45 duration-700'  href="https://github.com/AbisAbz/">
                  <BsArrowDownRight className='text-3xl text-primary '/>
                </Link>
              </div>
              <h2 className='text-[32px]   font-bold group-hover:text-accent-hover transition-all duration-500 text-white/80' >{item.title}</h2>
              <p className='text-white/60'>{item.description}</p>
              <div className='border-b mt-6 border-white/20  w-full'></div>
            </div>
          ))}
        </motion.div>
        </div>
    </section>
  )
}

export default Service
