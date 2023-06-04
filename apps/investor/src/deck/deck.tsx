import React from 'react';
// import LOGO from '../assets/img/logo.png';
// import Card from './card';
import Problems from './problems';
import Solution from './solution';
import Vp from './vp';
import BM from './BM';
import Competition from './competition';
import Market from './market';
import Standout from './standout';
import Finance from './finance';
import People from './people';
export default function Deck() {
  return (
    <div className="bg-gray-800 abeezee">
      <div className="mx-auto p-4 lg:px-24">
        {/* <div className="flex h-screen w-full items-center text-center text-black justify-center">
            <div>
            <img src={LOGO} className='w-72' alt="miurac" />
            <div className="text-6xl text-gray-800 abeezee font-bold">
            MIURAC
            </div>
            </div>
        </div> */}
        {/* <div className="fixed bg-transparent right-6 top-4 text-2xl z-50">
          Miurac
        </div> */}
        <Problems />
        <Solution />
        <Vp />
        <BM />
        <Competition />
        <Market />
        <Standout />
        <Finance />
        <People />
      </div>
    </div>
  );
}
