import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaBaby,FaStethoscope } from 'react-icons/fa'
import { FaTablets } from 'react-icons/fa'
import { TbBottle } from 'react-icons/tb'
import { IoIosFitness } from 'react-icons/io'
import { SlUserFemale } from 'react-icons/sl'
import { FaArrowRight } from 'react-icons/fa'

const OurProduct = ({products}) => {
 
  const [items, setItems] = useState([products])
  const [category, setCategory] = useState('baby')

  useEffect(() => {
    const filteredProducts = products?.filter((product) => product.category === category)
    setItems(filteredProducts)
  }, [category])
  

 
  const Image1 = 'https://i.ibb.co/2nDj570/hal-gatewood-jb-Clos-Ds-D4-unsplash-1-1.webp'
  const Image2 = 'https://i.ibb.co/C5LLpSd/photo-1628771065518-0d82f1938462.jpg'
    

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='h-full py-10'>         
      <>
      {/* Button to open modal */}
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed z-10 inset-40 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

            {/* Background overlay */}
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Modal content */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Icon or image */}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Modal Title</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Modal content goes here.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
        <div className='container-2xl mx-auto space-y-20 py-10 '>

          <div className="px-5 grid lg:grid-cols-2 justify-items-center gap-10">            
              <div className=" shadow-xl h-80 w-full rounded-2xl relative overflow-hidden">
                  <div className="bg-cover bg-center w-full h-full transition-all duration-300 hover:scale-105 hover:translate-x-4" style={{backgroundImage: `url(${Image1})`}}></div>
                  <div className='text-white space-y-3 absolute top-20 left-8'>
                    <p className="text-xl font-semibold text-white">GET ALL YOUR</p>
                    <h2 className='text-4xl font-semibold '>Medication at <br />One place</h2>
                    <div  className='flex items-center gap-3 cursor-pointer group'>
                        <span className={`transition-all duration-300 rounded-full bg-white p-3 text-[#658cb8] group-hover:-translate-x-1 group-hover:text-[#031432]`}><FaArrowRight /></span>
                        <p className='font-bold text-white'>Shop Now</p>
                    </div>
                  </div> 
              </div>  
            <div className="shadow-xl  h-80 w-full rounded-2xl relative overflow-hidden">
                <div className="bg-cover bg-center bg-center w-full h-full transition-all duration-300 hover:scale-105 hover:translate-x-4" style={{backgroundImage: `url(${Image2})`}}></div>
                <div className='text-white space-y-3 absolute top-20 left-8'>
                  <p className="text-xl font-semibold  text-white">QUICK ACCESS TO A</p>
                  <h2 className='text-4xl font-semibold'>PLETHORA OF <br />MEDICINES</h2>
                  <div className='flex items-center gap-3 cursor-pointer group'>
                      <span className={`transition-all duration-300 rounded-full bg-white p-3 text-[#658cb8] group-hover:-translate-x-1  group-hover:text-[#031432]`}><FaArrowRight /></span>
                      <p className='font-bold text-white'>Shop Now</p>
                  </div>
               </div>
              </div> 
          </div>


          <div className="">
            <h2 className="font-bold text-center mb-10">Popular Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 lg:gap-10">
              <div className='flex flex-col items-center card rounded-xl md:w-80 lg:w-full justify-center cursor-pointer p-5 group transition-all duration-300 hover:scale-105'>
                <Image className="p-3 transition-all duration-300 group-hover:scale-125" width={200} height={200} src="https://i.ibb.co/YR66KR4/1605436989312.png" alt="" />
                <div className='text-center z-50'>
                  <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">Baby care</p>
                </div>
              </div>
              <div className='flex flex-col items-center card rounded-xl md:w-80 lg:w-full justify-center cursor-pointer group transition-all duration-300 hover:scale-105'>
                <Image className="p-3 transition-all duration-300 group-hover:scale-125" width={200} height={200} src="https://i.ibb.co/yVVTyjF/ritch-50-ml1-1631424889466.webp" alt="" />
                <div className='text-center z-50'>
                  <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">Prescription Medicine</p>
                </div>
              </div>
              <div className='flex flex-col items-center card rounded-xl md:w-80 lg:w-full justify-center cursor-pointer group transition-all duration-300 hover:scale-105'>
                <Image className="p-3 transition-all duration-300 group-hover:scale-125" width={200} height={200} src="https://i.ibb.co/zbNzDGS/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-Jt-ZWRp-Y2lu-ZVwv-Mjdc-Lz-I3-Mz-Yz-LVNlbm9y-YS1-TYW5pd.jpg" alt="" />
                <div className='text-center z-50'>
                  <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">Women Care</p>
                </div>
              </div>
            
              <div className='flex flex-col items-center card rounded-xl md:w-80 lg:w-full justify-center cursor-pointer group transition-all duration-300 hover:scale-105'>
                <Image className="p-3 transition-all duration-300 group-hover:scale-125" width={200} height={200} src="https://i.ibb.co/ZzJ3KXJ/home9-png-39-1.png" alt="" />
                <div className='text-center z-50'>
                  <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">Healthcare devices</p>
                </div>
              </div>
            </div>
          </div>


          <div className='w-full flex flex-col justify-start px-5 py-10 rounded-xl'>
            <h2 className="font-bold text-center mb-10">Browse medicine & Health products</h2> 
            <div className='bg-gradient-to-r from-[#3a8ef6] to-[#3a8ef6]  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 p-4 rounded-xl'>
                <p onClick={()=>setCategory("baby")} className={`cursor-pointer transition-all duration-300 rounded-xl shadow h-10 flex items-center justify-center gap-3  hover:bg-[#031432] hover:text-white hover:font-bold group ${category === 'baby' ? 'font-bold bg-[#031432] text-white' : 'bg-white'  }`}><FaBaby className={`${category === 'baby' ? 'text-white' : 'text-blue-400' } text-xl  group-hover:text-white`}/> Baby Care</p>
                <p onClick={()=>setCategory("medicine")} className={`cursor-pointer transition-all duration-300 rounded-xl shadow h-10 flex items-center justify-center gap-3  hover:bg-[#031432] hover:text-white hover:font-bold group ${category === 'medicine' ? 'font-bold bg-[#031432] text-white' : 'bg-white'  }`}><FaTablets className={`${category === 'medicine' ? 'text-white' : 'text-blue-400' } text-xl  group-hover:text-white`}/>Medicine</p>
                <p onClick={()=>setCategory("herbal")} className={`cursor-pointer transition-all duration-300 rounded-xl shadow h-10 flex items-center justify-center gap-3  hover:bg-[#031432] hover:text-white hover:font-bold group ${category === 'herbal' ? 'font-bold bg-[#031432] text-white' : 'bg-white'  }`}><TbBottle className={`${category === 'herbal' ? 'text-white' : 'text-blue-400' } text-xl  group-hover:text-white`}/> Herbal</p>
                <p onClick={()=>setCategory("supplements")} className={`cursor-pointer transition-all duration-300 rounded-xl shadow h-10 flex items-center justify-center gap-3  hover:bg-[#031432] hover:text-white hover:font-bold group ${category === "supplements" ? 'font-bold bg-[#031432] text-white' : 'bg-white'  }`}><IoIosFitness className={`${category === "supplements" ? 'text-white' : 'text-blue-400' } text-xl  group-hover:text-white`}/> Supplements</p>
                <p onClick={()=>setCategory("women")} className={`cursor-pointer transition-all duration-300 rounded-xl shadow h-10 flex items-center justify-center gap-3  hover:bg-[#031432] hover:text-white hover:font-bold group ${category === 'women' ? 'font-bold bg-[#031432] text-white' : 'bg-white'  }`}><SlUserFemale className={`${category === 'women' ? 'text-white' : 'text-blue-400' } text-xl  group-hover:text-white`}/>Womens Care</p>
                <p onClick={()=>setCategory("devices")} className={`cursor-pointer transition-all duration-300 rounded-xl shadow h-10 flex items-center justify-center gap-3  hover:bg-[#031432] hover:text-white hover:font-bold group ${category === 'devices' ? 'font-bold bg-[#031432] text-white' : 'bg-white'  }`}><FaStethoscope className={`${category === 'devices' ? 'text-white' : 'text-blue-400' } text-xl  group-hover:text-white`}/> Devices</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 my-5 lg:my-10 ">
              { 
              items.slice(0,8)?.map((item, index) =>
                    (
                        <div key={index} className='card flex flex-col items-center gap-2 bg-white p-5 group cursor-pointer'>
                          <Image width={128} height={128} className="w-32 h-32 object-contain" src={item.image} alt="" />
                            <p className="transition-all duration-300 font-bold group-hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600">{item?.name}</p>
                          <p className="font-bold text-xl">৳{item?.price}</p>             
                        </div>    
                    )
              )
                 
                }
            </div>
            
            <div className="flex items-center justify-center mt-5">
              <button className=" py-2 px-3 rounded-xl text-white font-semibold">See More</button>
            </div>
               
          </div>


      </div>
      
      </div>
  )
}

export default OurProduct;