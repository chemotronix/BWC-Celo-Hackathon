import React from "react";
import Logo from "../images/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCreditCard, faArrowRightFromBracket, faMessage, faLocation, faLaptopFile, faArrowsTurnToDots, faGrip} from '@fortawesome/free-solid-svg-icons'

function Sidebar({signedIn}) {
  const router = useRouter();
  const [mobileNav, setMobileNav] = React.useState(false);
  return (
    <div className="flex flex-col py-5 px-5">
      <div className="navbar py-2 ">
        <motion.img
          src={Logo.src}
          style={{ zIndex: 40 }}
          layoutId="main-image"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="navbar">
        <ul className=" menu lg:menu-horizontal hidden ">
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
            <FontAwesomeIcon icon={faGrip} />
            <Link href="dashboard">Dashboard</Link>
            </a>
          </li>
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg">
            <FontAwesomeIcon icon={faLaptopFile} />
            <Link href="dashboard">Devices</Link>
            </a>
          </li>
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
            <FontAwesomeIcon icon={faCreditCard} />
            <Link href="dashboard">Carbon Credits</Link>
            </a>
          </li>
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
            <FontAwesomeIcon icon={faArrowsTurnToDots} />
            <Link href="dashboard">Transactions</Link>
            </a>
          </li>
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
            <FontAwesomeIcon icon={faLocation} />
            <Link href="dashboard">IoT Location</Link>
            </a>
          </li>
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
            <FontAwesomeIcon icon={faMessage} />
            <Link href="dashboard">Contact Support</Link>
            </a>
          </li>

          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary mt-60">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <Link href="dashboard">Logout</Link>
            </a>
          </li>
        </ul>
        
        <label
          tabIndex="0"
          className="btn btn-ghost lg:hidden z-40"
          onClick={() => setMobileNav(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <div
        className={` absolute  px-5 bg-white py-10 z-50 transition-all duration-500 ${signedIn ? "w-[88vw]": "w-[100vw]"} lg:hidden ${
          mobileNav ? "top-0" : "-top-[10000px]"
        } `}
      >
        <div
          className="flex items-center justify-end h-20 "
          onClick={() => setMobileNav(false)}
        >
          <svg
            width="24px"
            height="24px"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <ul
          tabIndex="0"
          className="menu flex flex-row lg:hidden w-[100%] z-40 bg-white "
        >
            <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
            <FontAwesomeIcon icon={faGrip} />
            <Link href="dashboard">Dashboard</Link>
            </a>
          </li>
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
            <FontAwesomeIcon icon={faLaptopFile} />
            <Link href="dashboard">Devices</Link>
            </a>
          </li>
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
            <FontAwesomeIcon icon={faCreditCard} />
            <Link href="dashboard">Carbon Credits</Link>
            </a>
          </li>
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
            <FontAwesomeIcon icon={faArrowsTurnToDots} />
            <Link href="dashboard">Transactions</Link>
            </a>
          </li>
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
            <FontAwesomeIcon icon={faLocation} />
            <Link href="dashboard">IoT Location</Link>
            </a>
          </li>
          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary">
            <FontAwesomeIcon icon={faMessage} />
            <Link href="dashboard">Contact Support</Link>
            </a>
          </li>

          <li tabIndex="0">
            <a className="justify-between font-[400] text-[#01431D] text-lg active:bg-primary mt-60">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <Link href="dashboard">Logout</Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

