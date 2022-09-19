import { Footer } from '@mantine/core';
import { IconMail, IconMapPin, IconPhone } from '@tabler/icons';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function FooterComponent({}: Props) {
  return (
    <div className="mt-6 p-6 pt-10 bg-[#1E1E20] text-zinc-50">
      <footer className="flex justify-between w-4/5 m-auto">
        <div className="font-black text-6xl">MIURAC</div>
        <div className="text-center">
          <div className="text-gray-400 text-2xl">Quick Links</div>
          <a href="https://miurac.com/" target="_blank" rel="noopener noreferrer" >
            <div className="text-white text-lg my-4">Home</div>
          </a>
        </div>
        <div className="text-center">
          <div className="text-gray-400 text-2xl">Contact info</div>
          <div className="text-white text-xl my-4 flex items-center gap-2"> <IconMapPin /> Bangalore, Karnataka</div>
          <a href="mailto:info@miurac.com" >
          <div className="text-white text-xl my-4 flex items-center gap-2"> <IconMail /> info@miurac.com</div>
          </a>
          <a href="tel:info@miurac.com" >
          <div className="text-white text-xl my-4 flex items-center gap-2"> <IconPhone /> 8336801389</div>
          </a>
        </div>
      </footer>
    </div>
  );
}
