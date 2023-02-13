const { default: Image } = require("next/image");
const { default: Link } = require("next/link");
const { FaSearch } = require("react-icons/fa");



function FindDoctor(){
    return (
        <div className= "w-full bg-white">
            <div className="  sm:w-[400px] sm:h-[300px] md:w-[400px] md:h-[250px] lg:w-[800px] lg:h-[133px]  bg-white border-gray-300 shadow-he-shadow container mx-auto p-5">
                <h1 className="font-bold text-he-text-h4 text-blue-800">Find a doctor</h1>
                <div className='lg:flex gap-5 items-center'>
                <input type="text" className='block md:mt-3 sm:mt-4   border border-gray-500 rounded-sm w-72 h-10 px-5 outline-none' placeholder='Doctors name'/>
                <input type="text" className='block md:mt-3 sm:mt-4  border border-gray-500 rounded-sm w-72 h-10 px-5 outline-none' placeholder='specialist'/>
                <Link href='#' className='inline-flex md:mt-3 sm:mt-4  bg-gradient-to-r from-blue-400 to-violet-600 px-8 py-2 text-white rounded-sm font-bold items-center'>
                <span>Search</span> 
                <span><FaSearch className='ml-3'/></span>
                </Link>
            </div>
        </div>
    </div>
    )
}
export default FindDoctor;