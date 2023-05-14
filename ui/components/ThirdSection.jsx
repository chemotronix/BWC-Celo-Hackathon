import React from "react";
import Rectangle from "../images/Rectangle.png";
import Image from "next/image";
import eco from "../images/eco.png";
import block from "../images/block.png";
import blockchain from "../images/blockchain.png";
import ai from "../images/ai.png";
import cleanEnergy from "../images/clean-energy.png";
import iot from "../images/iot.png";
function ThirdSection({ aboutRef }) {
  return (
    <div className="third-section min-h-screen mx-auto bg-[#c9f5e0]" ref={aboutRef} >
      <div className="md:opacity-100 opacity-0">
        <Image src={Rectangle} style={{ zIndex: -10 }} />
      </div>
      <div className="md:hidden">
        {/* <Image src={Rectangle} style={{ zIndex: -10 }} /> */}
      </div>
      <div className="flex flex-wrap items-center justify-evenly w-[80%] mx-auto">
        <div className="bg-[#156620] rounded-xl px-8 py-10 shadow max-w-md lg:mb-10 mb-16">
          <h2 className="font-bold text-2xl text-[#ffffff] lg:text-4xl max-w-xs uppercase">
            Who are <span className="text-[#ffffff]">we?</span>
          </h2>
          <p className="max-w-md text-[15px] text-[#ffffff] lg:text-[20px] mt-4">
            Developing clean energy technologies and digital solutions to ensure
            net zero emissions (decarbonization).
          </p>
        </div>
        <div className="bg-[#1C872A] rounded-xl px-8 py-10 shadow max-w-md lg:mb-10 mb-16">
          <h2 className="font-bold text-2xl text-[#ffffff] lg:text-4xl  max-w-xs uppercase">
            Our <span className="text-accent">Mission</span>
          </h2>
          <p className="max-w-md lg:text-[20px] text-[#ffffff] text-[15px] mt-4">
            Ensuring data access to provide an easier framework for achieving
            our planet goals (Net Zero).
          </p>
        </div>
          <div className="bg-[#0E4416] rounded-xl px-8 py-10 shadow max-w-md lg:mb-10 mb-16">
            <h2 className="font-bold text-2xl text-[#ffffff] lg:text-4xl max-w-xs uppercase ">
              Our <span className="text-[#0FE76A]">Vision</span>
            </h2>
            <p className="max-w-md text-[#ffffff] lg:text-[20px] text-[15px] mt-4 ">
              At Chemotronix, we look forward to collaborating with
              organizations to drive innovation towards ensuring a safer planet
            </p>
          </div>
        <div className="bg-[#07220B] rounded-xl px-8 py-10 shadow max-w-md lg:mb-10 mb-16">
          <h2 className="font-bold text-2xl text-[#ffffff] lg:text-4xl max-w-xs uppercase">
            Our <span className="text-primary">solution</span>
          </h2>
          <p className="max-w-md text-[#ffffff] lg:text-[20px] text-[15px] mt-4">
            Our solution is an interaction between IoT, AI, Blockchain and Clean
            energy through real time monitoring and visualizations.
          </p>
        </div>
        <Image src={eco} />
      <Image src={block} />
      </div>
      
      <div className="flex items-center justify-evenly w-[80%] mx-auto mt-5 mb-3">
            <Image src={ai} />
            <Image src={iot} />
            <Image src={blockchain} />
            <Image src={cleanEnergy} />
          </div>
    </div>
  );
}

export default ThirdSection;
