import React from 'react';
import { NavBar } from '../components/navbar/Topbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import Landing from '../deck';
import Deck from '../deck/deck';
import InteractiveDeck from '../interactiveDeck';
import { AnimatePresence } from 'framer-motion';
import Slide1 from '../interactiveDeck/slide1';
import Slide2 from '../interactiveDeck/slide2';
import Slide3 from '../interactiveDeck/slide3';

export default function App() {
  return (
    // <NavBar>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/deck" element={<Deck />} />
      <Route path="/deck-interactive" element={<InteractiveDeck />}>
        <Route index element={<Slide1 key={'slide1'} />} />
        <Route path="2" element={<Slide2 key={'slide2'} />} />
        <Route path="3" element={<Slide3 key={'slide3'} />} />
      </Route>
    </Routes>
    // </NavBar>
  );
}
