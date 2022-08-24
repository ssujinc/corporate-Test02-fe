import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HelmetComponent from './Helmet';
import Home from './Home/Home';

function Router() {
  return (
    <BrowserRouter>
      <HelmetComponent />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
