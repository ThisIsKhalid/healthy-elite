import React from "react";

const EmergencyBooking = () => {
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 py-4 container mx-auto">
      <div>
        <h3 className="text-he-text-h3 text-he-text-head my-2">Booking Form</h3>
        <form class="bg-white shadow-he-shadow px-4 py-6 rounded-md">
          <div class="mb-4">
            <label
              class="block text-he-text-head text-sm font-bold mb-2"
              for="username"
            >
              Pickup Location
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-paragraph leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Pickup Location"
            />{" "}
          </div>
          <div className="flex gap-3 items-center justify-between">
            <div class="mb-4 w-1/2">
              <label
                class="block text-he-text-head text-sm font-bold mb-2"
                for="username"
              >
                Pickup Date
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-paragraph leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="date"
                placeholder="Username"
              />{" "}
            </div>
            <div class="mb-4 w-1/2">
              <label
                class="block text-he-text-head text-sm font-bold mb-2"
                for="username"
              >
                Pickup Time
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-paragraph leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="time"
                placeholder="Username"
              />{" "}
            </div>
          </div>
          <div className="flex gap-3 items-center justify-between">
            <div class="mb-4 w-1/2">
              <label
                class="block text-he-text-head text-sm font-bold mb-2"
                for="username"
              >
                Destination
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-paragraph leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Destination"
              />{" "}
            </div>
            <div class="mb-4 w-1/2">
              <label
                class="block text-he-text-head text-sm font-bold mb-2"
                for="username"
              >
                Select Car
              </label>
              <select class="shadow appearance-none border rounded w-full py-2 px-3 text-he-text-paragraph leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Toyota- Hiace - Full AC</option>
                <option value="">Noah Blue Large</option>
                <option value="">National Ambulance</option>
                <option value="">Tata big compartment</option>
              </select>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <button
              class="inline-block text-white text-he-text-sm px-5 py-3 rounded-he-rounded bg-gradient-to-r from-blue-400 to-violet-600 shadow-he-shadow-btn mb-2"
              type="button"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
      <div>
        <div>
          <h3 className="text-he-text-h3 text-he-text-head my-2">
            Booking Details
          </h3>
          <div className="bg-white shadow-he-shadow px-4 py-6 rounded-md">
            <div className="flex flex-col md:flex-row justify-between">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBooking;
