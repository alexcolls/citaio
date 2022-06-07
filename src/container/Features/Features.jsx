import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Features.scss';

import img1 from '../../assets/features/1.jpg';

import { useTranslation } from 'react-i18next';

const Features = () => {

  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });



  const [t] = useTranslation("global");

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork();
      } else {
        setFilterWork(t.filter((tag) => tag.tags.includes(item)));
      }
    }, 500);
  };


  const filterMenu = ['Communication', 'Organization', 'Payments',]

  return (
    <>
      <h2 className="head-text">{t("features.title")}<span> CITAio </span>{t("features.title2")}</h2>

      <div className="app__work-filter">
        {filterMenu.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__work-portfolio">

        <div className="app__work-item app__flex" key="Agenda">

          <div className="app__work-img app__flex">
            <img src={img1} alt="" />
          </div>

          <div className="app__work-content app__flex">
            <h4 className="bold-text">{t("features.one.title")}</h4>
            <p className="p-text" style={{ marginTop: 10 }}>{t("features.one.description")}</p>
            <div className="app__work-tag app__flex">
              <p className="p-text">{t("features.one.tag")}</p>
            </div>
          </div>

        </div>

      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Features, 'app__works'),
  'features',
  'app__primarybg',
);