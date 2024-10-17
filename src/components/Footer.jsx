import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { ImTelegram } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div className="footer text-white bg-[#151414] py-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="footer-top grid grid-cols-2 md:grid-cols-5 gap-6 p-4 md:p-10">
        {/** Column for Store Info **/}
        <div className="part">
          <motion.h1 className="text-4xl font-medium mb-2">FIND A STORE</motion.h1>
          <motion.h1 className="text-4xl font-medium mb-2">NIKE JOURNAL</motion.h1>
          <motion.h1 className="text-4xl font-medium mb-2">BECOME A MEMBER</motion.h1>
          <motion.h1 className="text-4xl font-medium mb-2">FEEDBACK</motion.h1>
          <motion.h1 className="text-4xl font-medium mb-2">PROMO CODES</motion.h1>
        </div>
        
        {/** Column for Help **/}
        <div className="part">
          <motion.h1 className="text-4xl font-medium mb-2" >GET HELP</motion.h1>
          <motion.h3 className='text-2xl font-light'>Order Status</motion.h3>
          <motion.h3 className='text-2xl font-light'>Shipping and Delivery</motion.h3>
          <motion.h3 className='text-2xl font-light'>Returns</motion.h3>
          <motion.h3 className='text-2xl font-light'>Payment Options</motion.h3>
          <motion.h3 className='text-2xl font-light'>Contact Us</motion.h3>
        </div>

        {/** Column for About Nike **/}
        <div className="part">
          <motion.h1 className="text-4xl font-medium mb-2" >ABOUT NIKE</motion.h1>
          <motion.h3 className='text-2xl font-light'>News</motion.h3>
          <motion.h3 className='text-2xl font-light'>Investors</motion.h3>
          <motion.h3 className='text-2xl font-light'>Sustainability</motion.h3>
        </div>

        {/** Column for Join Us **/}
        <div className="part">
          <motion.h1 className="text-4xl font-medium mb-2" >JOIN US</motion.h1>
          <motion.h3 className='text-2xl font-light'>Nike App</motion.h3>
          <motion.h3 className='text-2xl font-light'>Nike Run Club</motion.h3>
          <motion.h3 className='text-2xl font-light'>Nike Training Club</motion.h3>
        </div>

        {/** Column for Social Links **/}
        <div className="part">
          <motion.h1 className="text-4xl font-medium mb-2" >SOCIAL</motion.h1>
          <div className="social-links flex gap-4 text-3xl">
            <a href="https://www.instagram.com/xelil_ovw/" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1 }}><BiLogoInstagramAlt /></motion.div>
            </a>
            <a href="https://www.linkedin.com/in/huseyn-xalil-7022262bb/" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1 }}><PiLinkedinLogoFill /></motion.div>
            </a>
            <a href="https://t.me/mazegit" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1 }}><ImTelegram /></motion.div>
            </a>
            <a href="https://wa.me/0556881500" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.1 }}><IoLogoWhatsapp /></motion.div>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-mid flex flex-col md:flex-row justify-between items-center p-4 md:p-10 border-t border-gray-700">
        <div className="location flex items-center">
          <FaLocationDot className="mr-2" />
          <motion.h1 whileHover={{ scale: 1.05 }}>Azerbaijan</motion.h1>
        </div>
        <div className="footer-links flex flex-col md:flex-row gap-2 md:gap-6 text-sm">
          <motion.h1 className='text-2xl font-light'>Guides</motion.h1>
          <motion.h1 className='text-2xl font-light'>Terms of Use</motion.h1>
          <motion.h1 className='text-2xl font-light'>Terms of Sale</motion.h1>
          <motion.h1 className='text-2xl font-light'>Modern Slavery Act</motion.h1>
          <motion.h1 className='text-2xl font-light'>Privacy & Cookie Policy</motion.h1>
          <motion.h1 className='text-2xl font-light'>Cookie Settings</motion.h1>
          <motion.h1 className='text-2xl font-light'>Company Details</motion.h1>
        </div>
      </div>

      <div className="footer-bottom text-center p-4">
        <motion.h1 className='text-2xl font-light'>© 2023 Olrich Redesign | All Rights Reserved</motion.h1>
      </div>
    </motion.div>
  );
};

export default Footer;
