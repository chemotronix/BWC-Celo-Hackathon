import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='flex flex-col'>
        <div className="flex mx-auto px-16 py-5 w-full justify-between flex-wrap">
            <div className='flex flex-col w-auto px-5 py-5'>
                <h1 className=" text-2xl lg:text-4xl text-black font-bold">Chemotronix</h1>
                <div className='flex flex-row justify-evenly py-5'>
                <a href="https://www.linkedin.com/company/chemotronix/"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: 30, color: "#0b41ad"}}></FontAwesomeIcon></a>
                <a href="https://github.com/chemotronix/Chemotronix"><FontAwesomeIcon icon={faGithub} style={{fontSize: 30, color: "#000000",}} /></a>
                <a href="https://twitter.com/chemotronix"><FontAwesomeIcon icon={faTwitter} style={{fontSize: 30, color: "#3875f0"}}></FontAwesomeIcon></a>
                </div>
            </div>
            <div className='flex flex-col w-auto px-5 py-5'>
                {/* <h1 className=" text-2xl lg:text-4xl text-black font-bold">INDUSTRIES</h1> */}
                <a href='#' className="link link-hover">Grid Operators</a>
                <a href='#' className="link link-hover">Aggregators & OEMs</a>
            </div>
            
            <div className='flex flex-col w-auto px-5 py-5'>
                {/* <h1 className=" text-2xl lg:text-4xl text-black font-bold">ABOUT</h1> */}
                <a href='#' className="link link-hover">Terms of use</a>
                <a href='#' className="link link-hover">Privacy policy</a>
            </div>
        </div>
        <div className="flex items-center justify-center text-center py-5 w-full">
          <p>Copyright ©2022. All right reserved | Chemotronix</p>
        </div>
    </div>
  )
}

export default Footer