import React from 'react';
import logo from '../images/miurac-logo.svg';

export default function Navbar() {
  return (
    <div className='h-[70px] p-[10px] items-center flex'>
        <img src={logo} alt='miurac-logo' />
    </div>
  )
}
