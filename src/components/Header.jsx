import React, { useState } from 'react';
import { SiNike } from "react-icons/si";
import { LuSearch } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5'; // Close Icon for mobile menu
import { VscMenu } from "react-icons/vsc";

const Header = () => {
  const [liked, setLiked] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header fixed w-full bg-white shadow-2xl flex items-center justify-between  md:px-48 px-12 py-2 z-10">
        <div className="header-left">

         <a href="/">          <SiNike className='text-4xl md:text-7xl' />
         </a>
        </div>

        {/* Hamburger menu icon for smaller screens */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle}>
            {menuOpen ? <IoClose className="text-4xl" /> : <VscMenu className="text-4xl" />}
          </button>
        </div>

        {/* Middle navigation links - hidden on mobile */}
        <div className={`header-mid text-xl py-4 md:text-3xl flex-col md:flex-row md:flex items-center gap-6 md:gap-12 absolute md:static w-full md:w-auto top-16 md:top-auto ${menuOpen ? 'flex' : 'hidden'} md:flex bg-transparent backdrop-blur-xl md:bg-transparent text-gray-700 text-xl shadow-xl md:shadow-none `}>
          <a href="/new-arrivals">New arrivals</a>
          <a href="#men">Men</a>
<a href="#women">Women</a>
<a href="#kids">Kids</a>
          <a href="#collection">Collection</a>
        </div>

        {/* Right side with icons */}
        <div className="header-right text-2xl md:text-4xl flex items-center gap-4 md:gap-6 font-medium">
          <div onClick={handleSearchClick} className="cursor-pointer">
            <LuSearch />
          </div>
          
          {searchOpen && (
            <motion.input
              type="text"
              placeholder="Search..."
              className="placeholder-black/50 font-light text-base md:text-xl lg:text-2xl border-black border rounded-lg md:rounded-xl lg:rounded-2xl px-4 lg:px-8 py-1 md:py-2"
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: ['100px', '150px', '250px', '300px'],
                opacity: 1
              }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
          
          <div onClick={handleLikeClick} className="cursor-pointer">
            {liked ? <FcLike className='text-2xl md:text-4xl' /> : <FaRegHeart />}
          </div>
          <a href="/new-arrivals"><HiOutlineShoppingBag /></a>
        </div>
      </div>
    </>
  );
}

export default Header;
