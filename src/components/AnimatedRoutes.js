import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './home';
import Company from './Company';
import Mine from './Mine';
import UserResearch from './myassignment/UserResearch';
import Design from './myassignment/Design';
import Realisation from './myassignment/Realisation';
import ManageControl from './myassignment/ManageControl';
import Reflection from './myassignment/Reflection';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/tuinexpress" element={<Company />} />
        <Route path="/myassignment" element={<Mine />} />
        <Route path="/userresearch" element={<UserResearch />} />
        <Route path="/design" element={<Design />} />
        <Route path="/realisation" element={<Realisation />} />
        <Route path="/managecontrol" element={<ManageControl />} />
        <Route path="/reflection" element={<Reflection />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
