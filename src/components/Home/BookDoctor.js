import Image from "next/image";
import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
import Modal from "./Modal";

const BookDoctor = ({ doctors }) => {
  const [showModal, setShowModal] = useState(false)
//   console.log(doctors);
  const [doctorList, setDoctorList] = useState([doctors]);
  // console.log(doctorList)
  return (
    <div>
      <div className="container mx-auto mt-5 grid grid-cols-1 gap-3">
        {doctors.slice(0, 3)?.map((doctor, i) => (
          <div key={i} doctor={doctor} className="p-6 bg-white rounded-lg ">
            <div className="flex items-center justify-between gap-2">
              <div>
                <img
                  className=" rounded-full w-20 h-20 lg:w-32 lg:h-32"
                  src={doctor?.image}
                  alt=""
                />
              </div>

              <div className="-mr-8  lg:mr-[30rem] lg:-ml-[18rem]">
                <h5 className="font-bold">{doctor?.name}</h5>
                <p>{doctor?.rating}/5</p>
                <p>{doctor?.experience}</p>
                <p className="flex items-center justify-center gap-2">
                  Availability <FaClock></FaClock> {doctor?.availability}
                </p>
              </div>
              <div>
                <button className="text-white font-bold py-2 px-4" onClick={() => setShowModal(true)}>Book</button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center mt-5">
              <button className=" py-2 px-3 rounded-xl text-white font-semibold">See More</button>
            </div>
      </div>
      <Modal  isvisible={showModal} onClose={()=> setShowModal(false)}>
       <div className="p-6 ">
          <div className="">
            <h5 className="text-cenetr mb-5">Book Appointment</h5>
            <form className="flex flex-col gap-3">
              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-paragraph leading-tight focus:outline-none focus:shadow-outline">
                <option>Cardiology</option>
                <option>Dental</option>
                <option>Neurology</option>
              </select>
              <select default="select doctor" className="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-paragraph leading-tight focus:outline-none focus:shadow-outline">
                <option>Dr. Tahir</option>
                <option>Dr. Tuhin</option>
                <option>Dr. Utsho</option>
              </select>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-paragraph leading-tight focus:outline-none focus:shadow-outline" type="text" name="" id="" placeholder="Your Name" />
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-paragraph leading-tight focus:outline-none focus:shadow-outline" type="tel" name="" id="" placeholder="Your Phone"/>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-paragraph leading-tight focus:outline-none focus:shadow-outline" type="date" name="" id="" />
              <div>
              <button
              class="inline-block text-white text-he-text-sm px-5 py-3 rounded bg-gradient-to-r from-blue-400 to-violet-600 shadow-he-shadow-btn mb-2"
              type="submit"
            >
              Book Appointment
            </button>
              </div>
            </form>
          </div>
       </div>
      </Modal>
    </div>
  );
};

export default BookDoctor;
