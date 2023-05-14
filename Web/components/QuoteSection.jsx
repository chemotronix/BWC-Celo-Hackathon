import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import React from "react";
import City from "../images/city.png";
import Q1 from "../images/1.png";
import Q2 from "../images/2.png";
import Q3 from "../images/3.png";
import Q4 from "../images/4.png";
import Q5 from "../images/5.png";

function QuoteSection() {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex items-center flex-wrap mx-auto">
          <Marquee speed={100} gradient={false}>
          <div className="flex flex-row mr-auto h-60 w-[50%] lg:w-screen">
            <Image src={Q4} className="w-48 rounded"/>
            <Image src={Q2} className="w-48 rounded"/>
            <Image src={Q3} className="w-48 rounded"/>
            <Image src={Q1} className="w-48 rounded"/>
            <Image src={Q5} className="w-48 rounded"/>
            <Image src={City} className="w-48 rounded"/>
          </div>
          </Marquee>
      </div>
    </div>
    
  );
}

export default QuoteSection;
