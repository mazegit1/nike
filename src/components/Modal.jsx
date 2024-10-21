import React from 'react';
import { IoClose } from "react-icons/io5";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed z-10 shadow-2xl inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-200 p-12 rounded-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-5xl"><IoClose />
        </button>
        {children}
        <a href='/new-arrivals' className='bg-green-800 hover:bg-black hover:text-white shadow-2xl text-white text-2xl px-6 py-2 rounded-xl'>Click to Open More</a>
      </div>
     
    </div>
  );
};

export default Modal;
