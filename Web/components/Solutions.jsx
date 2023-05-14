import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import co from "../images/co.jpg";
import hydrogen from "../images/hydrogen.jpg";
import netzero from "../images/netzero.jpg";

function Solutions() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center mb-10">
        <h2 className="text-2xl text-[#000000] lg:text-4xl max-w-xs uppercase mt-10 mb-10">
          Our Innovative Solutions
        </h2>
      </div>
      <div className="flex flex-wrap mb-10">
        <div className="flex flex-wrap justify-evenly w-full">
          <div className="w-full lg:w-1/3 border-2 border-solid border-green-500 rounded-xl px-8 py-10 max-w-xs mb-10">
          <Image src={hydrogen} className="w-48 rounded"/>  
            <p className="max-w-md text-[15px] text-[#000000] lg:text-[20px] mt-5">
              Developing Biogas and Hydrogen technologies for the African Populace
            </p>
          </div>
          <div className="w-full lg:w-1/3 border-2 border-solid border-green-500 px-8 py-10 rounded-xl max-w-xs mb-10">
          <Image src={netzero} className="w-48 rounded"/>
            <p className="max-w-md lg:text-[20px] text-[#000000] text-[15px] mt-5">
              A decentralized platform for measuring, reporting and verification of emissions via AI, IoT and Blockchain
            </p>
          </div>
            <div className="w-full lg:w-1/3 border-2 border-solid border-green-500 px-8 py-10 rounded-xl max-w-xs">
            <Image src={co} className="w-48 rounded"/>
              <p className="max-w-md text-[#000000] lg:text-[20px] text-[15px] mt-5">
                Carbon Credit Plaform to offset emissions
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
