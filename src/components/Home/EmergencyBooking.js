import React from "react";

const EmergencyBooking = () => {
  return (
    <div className="flex gap-10 flex-col md:flex-row py-6 container mx-auto">
      <div className="w-full md:w-3/5">
        <form className="bg-white shadow-he-shadow px-10 py-6 rounded-md">
          <h3 className="text-he-text-h3 text-he-text-head my-2">
            Emergency Ambulance Booking
          </h3>
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            <div className="mb-4 w-full  md:w-1/3">
              <input
                className="w-full shadow appearance-none border rounded py-2 px-3 text-he-text-head leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Pickup Location"
              />{" "}
            </div>
            <div className="mb-4 w-full md:w-1/3">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-head leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="Username"
              />{" "}
            </div>
            <div className="mb-4 w-full  md:w-1/3">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-head leading-tight focus:outline-none focus:shadow-outline"
                type="time"
                placeholder="Username"
              />{" "}
            </div>
          </div>
          <div className="flex gap-3 items-center justify-between">
            <div className="mb-4 w-full  md:w-1/3">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-head leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone Number"
              />{" "}
            </div>
            <div className="mb-4 w-full  md:w-1/3">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-head leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Destination"
              />{" "}
            </div>
            <div className="mb-4 w-full  md:w-1/3">
              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-head leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Select a Car</option>
                <option value="">Toyota- Hiace - Full AC</option>
                <option value="">Noah Blue Large</option>
                <option value="">National Ambulance</option>
                <option value="">Tata big compartment</option>
              </select>
            </div>
          </div>

          <button
            className="block w-full text-white text-he-text-sm px-5 py-3 rounded-he-rounded bg-gradient-to-r from-blue-400 to-violet-600 shadow-he-shadow-btn mb-2"
            type="button"
          >
            Confirm Booking
          </button>
        </form>
      </div>
      <div className="w-full md:w-2/5">
        <div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-6 rounded-md">
            {/* <div className="flex flex-col md:flex-row justify-between">
              <div>
                <div>
                  <h4 className="text-he-text-p text-he-text-paragraph">
                    Booking Reference :
                  </h4>
                  <p className="text-he-text-p text-he-text-paragraph">
                    {" "}
                    <span className="text-black">#879522</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-he-text-p text-he-text-paragraph">
                    Ambulance Number :
                  </h4>
                  <p className="text-he-text-p text-he-text-paragraph">
                    {" "}
                    <span className="text-black">DHA-GA-0325</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-he-text-p text-he-text-paragraph">
                    Pickup Date :
                  </h4>
                  <p className="text-he-text-p text-he-text-paragraph">
                    {" "}
                    <span className="text-black">12 February, 2023</span>
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h4 className="text-he-text-p text-he-text-paragraph">
                    Pickup Location:
                  </h4>
                  <p className="text-he-text-p text-he-text-paragraph">
                    {" "}
                    <span className="text-black">
                      House No: 5, Road No: 27, Dhanmondi, Dhaka
                    </span>
                  </p>
                </div>
                <div>
                  <h4 className="text-he-text-p text-he-text-paragraph">
                    Destination:
                  </h4>
                  <p className="text-he-text-p text-he-text-paragraph">
                    {" "}
                    <span className="text-black">
                      Dhaka Medical College & Hospital, Dhaka
                    </span>
                  </p>
                </div>
                <div>
                  <h4 className="text-he-text-p text-he-text-paragraph">
                    Pickup Time:
                  </h4>
                  <p className="text-he-text-p text-he-text-paragraph">
                    {" "}
                    <span className="text-black">09.00 AM</span>
                  </p>
                </div>
              </div>
            </div> */}
            <div className="">
              <h4 className="text-white text-base my-2 font-bold">
                Emergency Cases
              </h4>
              <h2 className="text-he-text-h1 font-bold my-2">1254 000 6000</h2>
              <p className="text-white  ">
                If you need a doctor urgently outside of medicenter opening
                hours, call emergency appointment number for emergency service.
              </p>
              <button className="inline-block my-2 py-3 px-5 text-white bg-white">
                {" "}
                24/7 Service available
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBooking;
