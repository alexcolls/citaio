import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

import { useTranslation } from 'react-i18next';

const About = () => {

  const [t] = useTranslation("global");

  return (
    <>
      <h2 className="head-text">{t("about.title")}</h2>

      <div className="app__about-container">
        <motion.div className="app__about-list">



        </motion.div>


        <div className="app__about-exp">

          <motion.div
            className="app__about-exp-item"

          >

          </motion.div>

        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);