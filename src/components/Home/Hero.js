import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFileMedical } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-10 bg-he-bg  container mx-auto">
      <div>
        <h1 className="text-he-text-h1 text-he-text-head font-bold">
          Klinik 24 siap melayani keluhan masyarakat selama 24/7.
        </h1>
        <p className="text-he-text-p text-he-text-paragraph mb-2">
          Rumah sakit adalah bagian integral dari suatu organisasi sosial dan
          kesehatan dengan fungsi menyediakan pelayanan paripurna
          (komprehensif).
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
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
