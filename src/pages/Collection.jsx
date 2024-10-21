import React from 'react'
import collect1 from '../images/collect1.png'
import collect2 from '../images/collect2.png'
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Product = () => {
  return (
    <>
<div className="collection bg-gradient-to-r from-[#fff5d5] via-gray-500 to-[#fff5d5] text-white py-48 px-8 min-h-screen">
      {/* Title Section */}
      <motion.div 
        className="collection-title text-center mb-16"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-wider">
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
        className="collect2 flex flex-col text-black md:flex-row-reverse items-center justify-between"
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
    </div>    </>
  )
}

export default Product
