import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaBars, FaWindowClose, FaFileMedical } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="z-[999] w-full py-4 md:py-6  container mx-auto">
      <nav className="py-5 md:flex md:items-center md:justify-between md:place-items-center">
        <div className="flex justify-between place-items-center">
          <Link
            href="/"
            className="text-he-text-h1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600"
          >
            Healthy Elite
            {/* <img src={Logo} alt="" className='w-16 object-cover'/> */}
          </Link>
          <span
            onClick={() => setOpen(!open)}
            className="md:hidden block text-gray-800"
          >
            {open ? <FaWindowClose></FaWindowClose> : <FaBars></FaBars>}
          </span>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-transparent  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-20 bg-[#ffffff] z-[999] sm:drop-shadow-he-shadow sm:rounded-md md:drop-shadow-none"
              : "top-[-490px]"
          }`}
        >
          <li className="mx-4 my-6 md:my-0 ">
            <Link
              onClick={() => setOpen(!open)}
              href="/"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600"
            >
              Home
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              onClick={() => setOpen(!open)}
              href="/"
              className="text-he-text-paragraph hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-600"
            >
              About
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link
              onClick={() => setOpen(!open)}
              href="/"
              className="text-he-text-paragraph hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-600"
            >
              Contact
            </Link>
          </li>

          <li className="mx-4 my-6 md:my-0">
            <Link
              onClick={() => setOpen(!open)}
              href="/"
              className="inline-block text-white text-he-text-sm px-5 py-3 rounded-he-rounded bg-gradient-to-r from-blue-400 to-violet-600 shadow-he-shadow-btn"
            >
              <span className="flex items-center gap-3">
                <FaFileMedical></FaFileMedical> <span>Know More</span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
