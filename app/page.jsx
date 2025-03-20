import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaFileDownload } from "react-icons/fa"
import Link from "next/link"


import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section>
      <div className="container mx-auto h-full justify-center">
        <div className="flex flex-col xl:flex-row  justify-between items-center xl:pt-8 xl:pb-16">
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Consultant</span>
            <h1 className="h2 mb-6">Hi I'm <br /><span className="text-accent">Noufal</span></h1>
            <p className="max-w-[500px] mb-9">
            🚀 I specialize in providing expert consultation and strategic insights 📊 to drive business growth and operational excellence. 🌟 With a deep understanding of industry trends and market dynamics, I deliver tailored solutions to optimize performance and unlock new opportunities. ✨</p>


            <div className="flex flex-col xl:flex-row gap-8 items-center">
             <Link href='/'><Button  variant="outline" size="lg" className="hover:text-primary uppercase flex items-center gap-2 hover-transition-all duration-700 rounded-full">Download Brochure  <FaFileDownload className="text-xl "/></Button></Link> 

              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="flex w-9 h-9 text-accent hover:bg-accent border border-accent rounded-full justify-center items-center hover:text-primary hover-transition-all duration-1000" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none xl:py-0 py-10">
          <Photo/>
         
          </div>
        </div>
        

        
      </div>
        <Stats/>
    </section>
  );
}
