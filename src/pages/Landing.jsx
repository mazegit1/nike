import React, { useState } from 'react';
import { motion } from 'framer-motion';
import herobg from '../images/herobg.png';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import card4 from '../images/card4.png';
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc"; // Import the like icon

const cardData = [
  {
    id: 1,
    image: card1,
    title: "Air Jordan 1 Retro Low Voodoo",
    description: "Men’s shoes",
    price: "379,99€",
  },
  {
    id: 2,
    image: card2,
    title: "Dunk Low Active Fuchsia",
    description: "Women’s shoes",
    price: "169,99€",
  },
  {
    id: 3,
    image: card3,
    title: "Dunk Low Black White",
    description: "Unisex shoes",
    price: "144,99€",
  },
  {
    id: 4,
    image: card4,
    title: "Package Lightweight Jacket",
    description: "Unisex jacket",
    price: "104,99€",
  },
];

// Duplicate the cardData for a total of 8 cards
const duplicatedCardData = [...cardData, ...cardData];

const Landing = () => {
  const [displayCount, setDisplayCount] = useState(4); // Initially show 4 cards
  const [likedCards, setLikedCards] = useState({}); // State to track liked cards

  const handleSeeAll = () => {
    // Toggle between displaying 4 and 8 cards
    setDisplayCount(prevCount => (prevCount === 4 ? 8 : 4));
  };

  const toggleLike = (id) => {
    setLikedCards(prev => ({
      ...prev,
      [id]: !prev[id] // Toggle the liked state for the specific card
    }));
  };

  return (
    <div className='transition-all ease-in-out duration-200'>
      <div
        className="hero h-screen py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-96 px-8 lg:px-20 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="hero-title tracking-[4px] text-center lg:text-left">
          <h1 className='text-[100px] lg:text-[150px] font-[900] text-white leading-none'>RETRO LOW</h1>
          <h1 className='text-7xl lg:text-9xl shadow-xl font-[900] text-black bg-[#E5BE67] rounded-lg w-fit px-6 lg:px-8 py-2 lg:py-4 mx-auto lg:mx-0'>VOODOO</h1>
          <h3 className='text-3xl lg:text-3xl pb-8 lg:pb-12 pt-8 lg:pt-20 text-white tracking-[2px] leading-relaxed'>The Nike Dunk Low SE Jackpot GS is a low-cut <br className="hidden lg:block" /> sneaker with hints of grey, white, blue, and red.</h3>
          <a href="/new-arrivals" className='text-black text-6xl lg:text-6xl tracking-[1px] rounded-xl shadow-xl hover:bg-black hover:text-white transition-all ease-in-out duration-200 bg-white px-6 lg:px-8 py-2 lg:py-4 mx-auto lg:mx-0 block w-fit'>SHOP NOW!</a>
        </div>
      </div>

      <div className="new-arrivals px-8 lg:px-20 py-16">
        <div className="top flex items-center justify-between text-3xl text-black">
          <h1 className="wrapper">NEW ARRIVALS</h1>
          <button className='border-b border-b-black cursor-pointer' onClick={handleSeeAll}>
            {displayCount === 4 ? 'See all items' : 'See less items'}
          </button>
        </div>
        
        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {duplicatedCardData.slice(0, displayCount).map(card => (
            <motion.div 
              key={card.id}
              className="card h-fit border rounded-lg p-4 bg-white text-center  shadow-md hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={card.image} alt={card.title} className="mb-4 h-[200px] w-full" />
              <h1 className="text-lg font-semibold">{card.title}</h1>
              <h1 className='text-gray-500'>{card.description}</h1>
              <div className="wrapper flex justify-between items-center mt-4">
                <h1>{card.price}</h1>
                <div onClick={() => toggleLike(card.id)} className="text-xl cursor-pointer hover:text-red-500 transition-colors">
                  {likedCards[card.id] ? <FcLike /> : <FaRegHeart />} {/* Conditional rendering for the like icon */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
