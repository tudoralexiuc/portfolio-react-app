import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import image1 from '../assets/pics/1.jpg';
import image2 from '../assets/pics/2.jpg';
import image3 from '../assets/pics/3.jpg';
import image4 from '../assets/pics/4.jpg';
import image5 from '../assets/pics/5.jpg';

export default function Mine() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <motion.div animate={{ x: 50 }} className="backButton">
        <Link to="/">
          <button>back</button>
        </Link>
      </motion.div>
      <motion.div ref={carousel} className="images">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="image-track"
        >
          <motion.img className="image" src={image1} />
          <motion.img className="image" src={image2} />
          <motion.img className="image" src={image3} />
          <motion.img className="image" src={image4} />
          <motion.img className="image" src={image5} />
        </motion.div>
      </motion.div>
    </>
  );
}
