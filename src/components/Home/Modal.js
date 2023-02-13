//import React, { Children } from 'react';

const Modal = ({isvisible, onClose, children}) => {
    if(!isvisible) return null;

    const handleClose = (e) =>{
        if(e.target.id === 'wrapper') onClose();
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm 
        flex justify-center items-center' id='wrapper' onClick={handleClose}>
            <div className='lg:w-[600px] w-[380px] flex flex-col'>
                <button type='button' className='text-white text-xl place-self-end' onClick={()=>onClose()}>X</button>
                <div className='bg-white p-2 rounded'> 
                    {children}
                </div>

            </div>
            
        </div>
    );
};

export default Modal;