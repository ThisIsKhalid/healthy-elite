import Image from "next/image";
import cardiology from "public/Icons/cardiology.png";
import fracture from "public/Icons/fracture.png";
import laboratory from "public/Icons/laboratory.png";
import neurology from "public/Icons/neurology.png";
import siren from "public/Icons/siren.png";
import tooth from "public/Icons/tooth.png";
import React from "react";

const Departments = () => {
  const divClass =
    "border border-gray-200 flex flex-col items-center p-3 hover:text-[#f9fbfc] transition ease-in-out duration-700 hover:bg-gradient-to-t from-[#4f99f2] to-[#7643f9]";

  return (
    <section className="py-10 px-5">
      <div className="lg:w-1/2 w-full mx-auto text-center mb-10">
        <h3 className="font-bold">Outstanding Departmental</h3>
        <h5 className="text-[#658cb8]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout The point of
          using.
        </h5>
      </div>

      {/* -----------department name-------------- */}

      <div className="grid lg:grid-cols-6 text-[#658cb8] font-medium">
        <div className={divClass}>
          <Image src={cardiology} alt="" width={80} />
          <h4 className="mt-4">Cardiology</h4>
        </div>
        <div className={divClass}>
          <Image src={neurology} alt="" width={80} />
          <h4 className="mt-4">Neurology</h4>
        </div>
        <div className={divClass}>
          <Image src={tooth} alt="" width={80} />
          <h4 className="mt-4">Dental</h4>
        </div>
        <div className={divClass}>
          <Image src={fracture} alt="" width={80} />
          <h4 className="mt-4">Orthopedic</h4>
        </div>
        <div className={divClass}>
          <Image src={laboratory} alt="" width={80} />
          <h4 className="mt-4">Laboratory</h4>
        </div>
        <div className={divClass}>
          <Image src={siren} alt="" width={80} />
          <h4 className="mt-4">Emergency</h4>
        </div>
      </div>

      {/* ----------department details--------------- */}

      <div>

      </div>
    </section>
  );
};

export default Departments;
