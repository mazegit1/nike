import React, { useState } from 'react';
import { motion } from 'framer-motion';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import card4 from '../images/card4.png';
import card5 from '../images/card5.png';
import card6 from '../images/card6.png';
import card7 from '../images/card7.png';
import card8 from '../images/card8.png';
import card9 from '../images/card9.png';
import card10 from '../images/card10.png';
import card11 from '../images/card11.png';
import card12 from '../images/card12.png';
import { FaRegHeart } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import { FcLike } from "react-icons/fc"; 
import Modal from "../components/Modal";


const cardData = [
  { id: 1, image: card1, title: "Air Jordan 1 Retro Low Voodoo", description: "Men’s shoes", price: "379,99€" },
  { id: 2, image: card2, title: "Dunk Low Active Fuchsia", description: "Women’s shoes", price: "169,99€" },
  { id: 3, image: card3, title: "Dunk Low Black White", description: "Unisex shoes", price: "144,99€" },
  { id: 4, image: card4, title: "Package Lightweight Jacket", description: "Unisex jacket", price: "104,99€" },
  { id: 4, image: card5, title: "Nike Swoosh High Support", description: "Unisex jacket", price: "104,99€" },
  { id: 4, image: card6, title: "Nike Sportswear Club+", description: "Unisex jacket", price: "104,99€" },
  { id: 4, image: card7, title: "Nocta", description: "Unisex jacket", price: "104,99€" },
  { id: 4, image: card8, title: "Nike Star Runner", description: "Unisex jacket", price: "104,99€" },
  { id: 4, image: card9, title: "Air Jordan Retro Low Quai 54", description: "Unisex jacket", price: "104,99€" },
  { id: 4, image: card10, title: "Dunk Low 85 Neptune Green", description: "Unisex jacket", price: "104,99€" },
  { id: 4, image: card11, title: "Nike Dri-FIT Club", description: "Unisex jacket", price: "104,99€" },
  { id: 4, image: card12, title: "Nike Pegasus 40 SE", description: "Unisex jacket", price: "104,99€" },
];

// Duplicate the cardData for more cards
const duplicatedCardData = [...cardData, ...cardData];

const Landing = () => {
  const [displayCount, setDisplayCount] = useState(4); // Initially show 4 cards
  const [likedCards, setLikedCards] = useState({});
  const [modalData, setModalData] = useState(null); // Data for the modal
  const [cart, setCart] = useState([]); // Cart state to track added items

  // Handle displaying all or fewer items
  const handleSeeAll = () => {
    setDisplayCount(prevCount => (prevCount === 4 ? 12 : 4));
  };

  // Toggle like status
  const toggleLike = (id) => {
    setLikedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Open modal with larger image and info
  const openModal = (card) => {
    setModalData(card);
  };

  // Add item to cart
  const addToCart = (card) => {
    setCart(prev => [...prev, card]);
  };

  return (
    <div>


      {/* New Arrivals Section */}
      <NewArrivals
        displayCount={displayCount}
        handleSeeAll={handleSeeAll}
        duplicatedCardData={duplicatedCardData}
        toggleLike={toggleLike}
        openModal={openModal}
        addToCart={addToCart}
        likedCards={likedCards}
        modalData={modalData}
        setModalData={setModalData}
      />
    </div>
  );
};

const NewArrivals = ({ displayCount, handleSeeAll, duplicatedCardData, toggleLike, openModal, likedCards, modalData, setModalData }) => {
  return (
    <div className="new-arrivals pt-48 bg-[#f5f5f5] px-8 lg:px-20 py-16">
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
            className="card h-fit border rounded-lg p-4 bg-white text-center shadow-md hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={card.image} alt={card.title} className="mb-4 h-[200px] w-full" />
            <h1 className="text-lg font-semibold">{card.title}</h1>
            <h1 className='text-gray-500'>{card.description}</h1>
            <div className="wrapper flex justify-between items-center mt-4">
              <h1>{card.price}</h1>
              <div className="flex space-x-2">
                <div onClick={() => toggleLike(card.id)} className="text-3xl cursor-pointer hover:text-red-500 transition-colors">
                  {likedCards[card.id] ? <FcLike /> : <FaRegHeart />}
                </div>
                <div onClick={() => openModal(card)} className="text-3xl cursor-pointer hover:text-white hover:bg-blue-500 rounded-full transition-colors">
                  <GoPlusCircle />
                </div>
              </div>
            </div>
          
          </motion.div>
        ))}
      </div>

      {/* Modal for displaying larger image and info */}
      {modalData && (
        <Modal onClose={() => setModalData(null)}>
          <img src={modalData.image} alt={modalData.title} className="w-full h-auto" />
          <h1 className="text-2xl font-semibold">{modalData.title}</h1>
          <p className="text-lg">{modalData.description}</p>
          <p className="text-xl pb-6">{modalData.price}</p>
        </Modal>
      )}
    </div>
  );
};

export default Landing;
