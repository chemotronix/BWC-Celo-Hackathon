import React from 'react'
import Image from "next/image"
import Marquee from "react-fast-marquee";
import microsoft from "../images/mfsfh.png"
import polygon from "../images/polygon.png"
import filecoin from "../images/filecoin.png"
import chainlink from "../images/chainlink.jpg"
function PartnerSection() {
  return (
    <div>
      <h1 className="flex justify-center text-2xl lg:text-4xl text-black mt-10">Our Partners</h1>
    <Marquee speed={50} gradient={false}>
      <div className='flex items-center w-screen h-14 lg:h-fit'>
          <div className='w-1/4'><a href='https://polygon.technology/' className="link link-hover" target={'_blank'} rel="noreferrer"><Image src={polygon}/></a></div>
          <div className='w-1/4'><a href='https://filecoin.io/' className="link link-hover" target={'_blank'} rel="noreferrer"><Image src={filecoin}/></a></div>
          <div className='w-1/4'><a href='https://chain.link/' className="link link-hover" target={'_blank'} rel="noreferrer"><Image src={chainlink}/></a></div>
          <div className='w-1/4'><a href='https://www.microsoft.com/en-us/startups' className="link link-hover" target={'_blank'} rel="noreferrer"><Image src={microsoft}/></a></div>
      </div>
    </Marquee>
    </div>
  )
}

export default PartnerSection