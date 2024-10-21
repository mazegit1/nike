import React from 'react';
import { IoClose } from "react-icons/io5";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-200 p-12 rounded-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-5xl"><IoClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
