import Image from "next/image";
import cardiology from "public/Icons/cardiology.png";
import fracture from "public/Icons/fracture.png";
import laboratory from "public/Icons/laboratory.png";
import neurology from "public/Icons/neurology.png";
import siren from "public/Icons/siren.png";
import tooth from "public/Icons/tooth.png";
import cardiologyPhoto from "public/Images/cardiology.png";
import React from "react";

const Departments = () => {
  const divClass =
    "border border-gray-200 flex flex-col items-center p-3 hover:text-[#f9fbfc] hover:bg-gradient-to-t from-[#4f99f2] to-[#7643f9]";

  return (
    <section className="py-10 px-5">
      <div className="lg:w-1/2 w-full mx-auto text-center mb-10">
        <h2 className="font-bold text-[#031432]">Outstanding Departmental</h2>
        <h6 className="text-[#658cb8]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout The point of
          using.
        </h6>
      </div>

      {/* -----------department name-------------- */}

      <div className="grid lg:grid-cols-6 text-[#658cb8] font-medium">
        <div className={divClass}>
          <Image src={cardiology} alt="" width={80} />
          <h5 className="mt-4">Cardiology</h5>
        </div>
        <div className={divClass}>
          <Image src={neurology} alt="" width={80} />
          <h5 className="mt-4">Neurology</h5>
        </div>
        <div className={divClass}>
          <Image src={tooth} alt="" width={80} />
          <h5 className="mt-4">Dental</h5>
        </div>
        <div className={divClass}>
          <Image src={fracture} alt="" width={80} />
          <h5 className="mt-4">Orthopedic</h5>
        </div>
        <div className={divClass}>
          <Image src={laboratory} alt="" width={80} />
          <h5 className="mt-4">Laboratory</h5>
        </div>
        <div className={divClass}>
          <Image src={siren} alt="" width={80} />
          <h5 className="mt-4">Emergency</h5>
        </div>
      </div>

      {/* ----------department details--------------- */}

      <div className="grid grid-cols-2 items-center mt-10">
        <div>
          <Image className="mx-auto" src={cardiologyPhoto} alt="" width={500} />
        </div>
        <div>
          <h3 className="font-medium text-[#031432]">Cardiology</h3>
          <h6 className="text-[#658cb8] lg:w-4/5 w-full mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout The point
            of using. If you are going to use a passage of Lorem Ipsum, you need
            to be sure there isnt anything embarrassing hidden in the middle of
            text. All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary.
          </h6>
          <button className="px-5 py-2 text-[#f9fbfc] text-lg font-medium mt-6">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Departments;
