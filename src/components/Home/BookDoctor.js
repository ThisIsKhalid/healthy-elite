import Image from "next/image";
import React, { useState } from "react";
import { FaClock } from "react-icons/fa";

const BookDoctor = ({ doctors }) => {
//   console.log(doctors);
  const [doctorList, setDoctorList] = useState([doctors]);
  // console.log(doctorList)
  return (
    <div>
      <div className="container mx-auto mt-5 grid grid-cols-1 gap-3">
        {doctors.slice(0, 3)?.map((doctor, i) => (
          <div key={i} className="p-6 bg-white rounded-lg ">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className=" rounded-full w-32 h-32"
                  src={doctor?.image}
                  alt=""
                />
              </div>

              <div className="mr-[47rem]">
                <h5 className="font-bold">{doctor?.name}</h5>
                <p>{doctor?.rating}/5</p>
                <p>{doctor?.experience}</p>
                <p className="flex items-center justify-center gap-2">
                  Availability <FaClock></FaClock> {doctor?.availability}
                </p>
              </div>
              <div>
                <button className="text-white font-bold py-2 px-4">Book</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDoctor;
