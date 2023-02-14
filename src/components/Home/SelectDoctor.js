import { FiChevronDown } from "react-icons/fi";


const SelectDoctor = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-5">Select a doctor</h1>
      </div>
      <div className="">
        <form className="flex justify-between  items-center">
          <div className="flex bg-[#658cb8]  items-center gap-2  pl-4 rounded-full">
            <label className=" text-white font-bold " for="name">
              Showing doctors in:
            </label>
            <input
              className="shadow appearance-none border-2 border-blue-500 rounded-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder=" Name"
            />
          </div>

          <div className="flex bg-[#658cb8]  items-center gap-2  pl-4 rounded-full">
            <label className=" text-white font-bold " for="name">
              for
            </label>
            <div className="relative">
              <select
                className="shadow appearance-none border-2 border-blue-500 rounded-full  py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
              >
                <option>My Children</option>
                <option>My Parent</option>
                <option>My Uncle</option>
              </select>
              <div className="pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2  text-gray-700">
                <FiChevronDown></FiChevronDown>
              </div>
            </div>
          </div>

          <div className="flex bg-[#658cb8]  items-center gap-2  pl-4 rounded-full">
            <label className=" text-white font-bold " htmlFor="name">
              on
            </label>
            <input
              className="shadow appearance-none border-2 border-blue-500 rounded-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="date"
              placeholder="Your Name"
            />
          </div>
          <div>
            <button className="py-2 px-8 rounded-full text-white font-semibold">
              Apply
            </button>
          </div>
        </form>
      </div>
      <div className="mt-5">
        <p>Showing available doctors on January 21,2023</p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default SelectDoctor;
