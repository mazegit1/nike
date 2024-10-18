import React, { useState } from 'react';
import { motion } from 'framer-motion';
import herobg from '../images/herobg.png';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import card4 from '../images/card4.png';
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc"; 
import men from '../images/men.png'
import kids from '../images/kids.png'
import women from '../images/women.png'
import collect1 from '../images/collect1.png'
import collect2 from '../images/collect2.png'
import { AiTwotoneRightCircle } from "react-icons/ai";
import { AiTwotoneLeftCircle } from "react-icons/ai";
import sport1 from '../images/sport1.png'
import sport2 from '../images/sport2.png'
import sport3 from '../images/sport3.png'
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
      [id]: !prev[id] 
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
          <a href="/new-arrivals" className='text-black text-6xl lg:text-6xl tracking-[1px] rounded-xl shadow-xl hover:bg-[#4A6634] hover:text-white transition-all ease-in-out duration-200 bg-white px-6 lg:px-8 py-2 lg:py-4 mx-auto lg:mx-0 block w-fit'>SHOP NOW!</a>
        </div>
      </div>

      <div className="new-arrivals bg-[#f5f5f5] px-8 lg:px-20 py-16">
        <div className="top flex items-center justify-between text-3xl text-black">
          <h1 className="text-5xl font-medium">NEW ARRIVALS</h1>
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
      <div
  id="genders"
  className="genders border-t bg-[#ABBB70]/20 py-20 px-20 border-t-white"
>
  <h1 className='text-5xl font-medium'>SHOP BY COLLECTION</h1>
 <div className="div   py-20 px-6 md:px-16 lg:px-20 flex flex-col md:flex-row justify-around gap-10 bg-cover bg-center">
 <motion.div
  id='women'
    className="gender flex items-center justify-center h-[50vh] w-full md:w-[35vh] lg:w-[45vh] rounded-3xl bg-cover bg-center"
    style={{ backgroundImage: `url(${women})` }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <h1 className="text-black bg-white hover:bg-black hover:text-white transition-all ease-in-out duration-200 px-12 rounded-full py-4 text-3xl font-bold">WOMEN</h1>
  </motion.div>

  <motion.div
  id='men'
    className="gender  flex items-center justify-center h-[50vh] w-full md:w-[35vh] lg:w-[45vh] rounded-3xl bg-cover bg-center"
    style={{ backgroundImage: `url(${men})` }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <h1 className="text-black bg-white hover:bg-black hover:text-white transition-all ease-in-out duration-200 px-12 rounded-full py-4 text-3xl font-bold">MEN</h1>
  </motion.div>

  <motion.div
  id='kids'
    className="gender flex items-center justify-center h-[50vh] w-full md:w-[35vh] lg:w-[45vh] rounded-3xl bg-cover bg-center"
    style={{ backgroundImage: `url(${kids})` }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
    viewport={{ once: true }}
  >
    <h1 className="text-black bg-white hover:bg-black hover:text-white transition-all ease-in-out duration-200 px-12 rounded-full py-4 text-3xl font-bold">KIDS</h1>
  </motion.div>
 </div>
</div>
<div className="collection bg-gradient-to-r from-[#fff5d5] via-gray-500 to-[#fff5d5] text-white py-16 px-8 min-h-screen">
      {/* Title Section */}
      <motion.div 
        className="collection-title text-center mb-16"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider">
          OUR NEW COLLECTION
        </h1>
      </motion.div>

      {/* Collection 1 */}
      <motion.div 
        className="collect1 flex flex-col md:flex-row items-center justify-between mb-12"
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}>
        <img 
          src={collect1} 
          alt="Nike Space Jam" 
          className="w-full md:w-1/2 object-cover rounded-xl shadow-lg mb-8 md:mb-0" />
        <div className="md:ml-12 text-center md:text-left">
          <h1 className="text-3xl font-bold">NIKE X SPACE JAM: A NEW LEGACY</h1>
          <h3 className="mt-4 text-lg md:text-xl leading-relaxed">
            To celebrate the release of Space Jam: A New Legacy, Nike and Converse 
            have joined forces to create an apparel and footwear collection worthy 
            of Bugs Bunny and LeBron.
          </h3>
        </div>
      </motion.div>

      {/* Collection 2 */}
      <motion.div 
        className="collect2 flex flex-col md:flex-row-reverse items-center justify-between"
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}>
        <img 
          src={collect2} 
          alt="Nike Black History Month" 
          className="w-full md:w-1/2 object-cover rounded-xl shadow-lg mb-8 md:mb-0" />
        <div className="md:mr-12 text-center md:text-left">
          <h1 className="text-3xl font-bold">Nike Black History Month</h1>
          <h3 className="mt-4 text-lg md:text-xl leading-relaxed">
            Nike is celebrating Black History Month with a new collection highlighted 
            by customizable Air Force 1 sneakers.
          </h3>
        </div>
      </motion.div>
    </div>
    <div className="sport bg-gray-100 py-16 px-8">
      <div className="title flex justify-between items-center mb-8">
        <h1 className="text-5xl font-bold">SHOP BY SPORT</h1>
      </div>
      <div className="sport-bottom grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="sport-item text-center">
          <img src={sport1} alt="Football" className="w-full h-[700px] object-cover rounded-lg mb-4" />
          <h1 className="text-2xl font-semibold">FOOTBALL</h1>
          <h2 className="text-gray-500">1904 items</h2>
        </div>
        <div className="sport-item text-center">
          <img src={sport2} alt="Basketball" className="w-full h-[700px] object-cover rounded-lg mb-4" />
          <h1 className="text-2xl font-semibold">BASKETBALL</h1>
          <h2 className="text-gray-500">1106 items</h2>
        </div>
        <div className="sport-item text-center">
          <img src={sport3} alt="Tennis" className="w-full h-[700px] object-cover rounded-lg mb-4" />
          <h1 className="text-2xl font-semibold">TENNIS</h1>
          <h2 className="text-gray-500">856 items</h2>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Landing;
