import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Price.scss';

import img from './contents/images/about01.png'


const Price = () => {

  return (
    <>
      <h2 className="head-text">Built by <span>Doctors</span> <br />for  <span>Doctors</span></h2>
      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"

        >
          <img src={img} alt='' />
          <h2 className="bold-text" style={{ marginTop: 20 }}>Helloo</h2>
          <p className="p-text" style={{ marginTop: 10 }}>WOrld</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"

        >
          <img src={img} alt='' />
          <h2 className="bold-text" style={{ marginTop: 20 }}>Helloo</h2>
          <p className="p-text" style={{ marginTop: 10 }}>WOrld</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"

        >
          <img src={img} alt='' />
          <h2 className="bold-text" style={{ marginTop: 20 }}>Helloo</h2>
          <p className="p-text" style={{ marginTop: 10 }}>WOrld</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"

        >
          <img src={img} alt='' />
          <h2 className="bold-text" style={{ marginTop: 20 }}>Helloo</h2>
          <p className="p-text" style={{ marginTop: 10 }}>WOrld</p>
        </motion.div>
      </div>


    </>
  );
};

export default AppWrap(
  MotionWrap(Price, 'app__price'),
  'price',
  'app__whitebg',
);