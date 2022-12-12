import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import image1 from '../assets/pics/1.png';
import image2 from '../assets/pics/2.png';
import image3 from '../assets/pics/3.png';
import image4 from '../assets/pics/4.png';
import image5 from '../assets/pics/5.png';

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeIn',
      duration: 0.8,
    },
  },
};

export default function Mine() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%', transition: { duration: 0.5 } }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className="backButton">
        <Link to="/">
          <button>back</button>
        </Link>
      </div>
      <div className="bodyMine">
        <div></div>
        <motion.div className="images">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="image-track"
          >
            <Link className="image" to="/userresearch">
              <motion.img
                className="image"
                variants={item}
                src={image1}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 5 }}
                whileTap={{ rotate: 90, scale: 0.75 }}
              />
            </Link>
            <Link className="image" to="/design">
              <motion.img
                className="image"
                variants={item}
                src={image2}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 5 }}
                whileTap={{ rotate: 90, scale: 0.75 }}
              />
            </Link>
            <Link className="image" to="/realisation">
              <motion.img
                className="image"
                variants={item}
                src={image3}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 5 }}
                whileTap={{ rotate: 90, scale: 0.75 }}
              />
            </Link>
            <Link className="image" to="/managecontrol">
              <motion.img
                className="image"
                variants={item}
                src={image4}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 5 }}
                whileTap={{ rotate: 90, scale: 0.75 }}
              />
            </Link>
            <Link className="image" to="/reflection">
              <motion.img
                className="image"
                variants={item}
                src={image5}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 5 }}
                whileTap={{ rotate: 90, scale: 0.75 }}
              />
            </Link>
          </motion.div>
        </motion.div>
        <div></div>
      </div>
    </motion.div>
  );
}
