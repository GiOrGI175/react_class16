import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './views/about/Avout';
import Home from './views/home/Home';
import ItemsDetails from './views/itemsDetails/ItemsDetails';

const Approutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/items/:id' element={<ItemsDetails />} />
      </Routes>
    </div>
  );
};

export default Approutes;
