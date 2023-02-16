import Image from 'next/image'
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa'
import {MdClose} from 'react-icons/md'


const ProductsModal = ({ isOpen,setIsOpen,productDetail }) => {
    
    console.log(productDetail) 


    const closeModal = () => {
        setIsOpen(false);
      };

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    
  return (
      <div>
          {isOpen && (
        <div className="fixed z-50 inset-40 overflow-y-hidden">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

            {/* Background overlay */}
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
            </div>

            {/* Modal content */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-md transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="grid grid-cols-2 gap-5 p-5 h-full">
                    <Image src={productDetail.image} alt={productDetail.name} width={400} height={400} />      
                    <div className='flex flex-col gap-10 justify-center'>
                        <div>
                            <span className="font-bold capitalize">{productDetail.category}</span>
                            <h4 className='font-bold'>{productDetail.name}</h4>
                            <p className='text-2xl font-semibold'>&#2547;{productDetail.price}</p>
                        </div>
                          <div className='flex justify-between items-center'>
                              <button onClick={decrement} className={`p-3 text-xl text-white ${count === 0 && 'opacity-50'} `} disabled={ count == 0 }><FaMinus /></button> 
                                <span className="text-xl p-5 ">{count}</span>
                              <button onClick={increment} className={`p-3 text-xl text-white ${count === 10 && 'opacity-50'}`} disabled={ count >= 10 }><FaPlus /></button>
                          </div>                                    
                    </div>            

                </div>
            </div>
            <div className="absolute top-5 right-5">
                <MdClose onClick={closeModal} className="transition-all duration-300 text-2xl text-red-500 border-2 border-red-500 p-1 w-8 h-8 rounded-full cursor-pointer hover:bg-red-500 hover:text-white shadow-lg"/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductsModal;