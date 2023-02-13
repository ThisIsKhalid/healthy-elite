import { FiChevronDown } from "react-icons/fi";


const SelectDoctor = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-5 ml-2">Select a doctor</h1>
      </div>
      <div className="card py-5 px-1 ">
        <form className="flex lg:flex-row gap-3 flex-col justify-between  items-center   ">
          <div className="w-full flex bg-[#658cb8]  items-center justify-between gap-2  pl-4 rounded-full">
            <label className=" text-white font-bold " htmlFor="name">
               doctors
            </label>
            <input
              className=" shadow appearance-none border-2 border-blue-500 rounded-full  py-2 lg:px-3 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder=" Name"
            />
          </div>

          <div className="w-[100%] flex bg-[#658cb8]  items-center justify-between gap-2  pl-6 rounded-full">
            <label className=" text-white font-bold " for="name">
              for
            </label>
            <div className="relative  ">
              <select
                className=" shadow appearance-none border-2 border-blue-500 rounded-full  py-2  lg:px-32 pl-20 pr-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
              >
                <option>My Children</option>
                <option>My Parent</option>
                <option>My Uncle</option>
              </select>
              <div class="pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2  text-gray-700">
                <FiChevronDown></FiChevronDown>
              </div>
            </div>
          </div>

          <div className="flex bg-[#658cb8] w-full  items-center justify-between gap-2 lg:pl-6  pl-4 rounded-full">
            <label className=" text-white font-bold " for="name">
              on
            </label>
            <input
              className=" shadow appearance-none border-2 border-blue-500 rounded-full  py-2 lg:pl-20 px-[6.6rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="date"
              placeholder="Your Name"
            />
          </div>
          <div className="">
            <button className="py-2 lg:px-8  px-40  rounded-full text-white font-semibold">
              Apply
            </button>
          </div>
        </form>
      </div>
      <div className="mt-5">
        <p className="ml-2">Showing available doctors on January 21,2023</p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default SelectDoctor;
