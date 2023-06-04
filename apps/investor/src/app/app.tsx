import React from 'react';
import { NavBar } from '../components/navbar/Topbar';
import { Route, Routes } from 'react-router-dom';
import Landing from '../deck';
import Deck from '../deck/deck';

export default function App() {
  return (
    // <NavBar>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/deck" element={<Deck />} />
      </Routes>
    // </NavBar>
  );
}
