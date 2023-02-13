import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFileMedical } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-2 py-3 md:py-6 bg-he-bg  container mx-auto">
      <div>
        <h1 className="text-he-text-h1 text-he-text-head font-bold">
          Clinic 24 is ready to serve public complaints 24/7.
        </h1>
        <p className="text-he-text-p text-he-text-paragraph mb-2">
          The hospital is an integral part of a social organization and health
          with the function of providing plenary services (comprehensive).
        </p>
        <Link
          href="/"
          className="inline-block text-white text-he-text-sm px-5 py-3 rounded-he-rounded bg-gradient-to-r from-blue-400 to-violet-600 shadow-he-shadow-btn mb-2"
        >
          <span className="flex items-center gap-3">
            <FaFileMedical></FaFileMedical> <span>Know More</span>
          </span>
        </Link>
      </div>
      <div>
        <div className="h-96 w-96 mx-auto relative">
          <Image
            src="https://i.ibb.co/t8Nxxym/doc-img.png"
            alt=""
            fill="true"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
