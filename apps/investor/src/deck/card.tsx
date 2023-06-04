import { Accordion } from '@mantine/core';
import React from 'react';

type Props = {
  heading: any;
  subtitle: any;
  logo: string;
};

export default function Card({ heading, subtitle, logo }: Props) {
  return (
    <div className="card flex p-8 gap-x-4 bg-slate-700 my-8 rounded-lg mx-auto abeezee">
      <div className="p-1 w-14 flex items-center">
        <img src={logo} alt="Card" className="card-image" />
      </div>
      <div >
        <p className="text-xl sm:text-2xl pb-1 card-title">{heading}</p>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
    //   <Accordion.Item
    //     className=" gap-x-4 bg-slate-700 my-8 rounded-md mx-auto "
    //     value="customization"
    //   >
    //     <Accordion.Control className="text-xl sm:text-2xl">
    //       {heading}
    //     </Accordion.Control>
    //     <Accordion.Panel className="text-xs font-light">
    //       {subtitle}
    //     </Accordion.Panel>
    //   </Accordion.Item>

    // <div className="flex p-8 gap-x-4 bg-slate-700 my-8 rounded-lg mx-auto ">
    //   <div className="p-1 hidden sm:block">
    //     <img className="w-14" src={logo} alt="heading" />
    //   </div>
    //   <div>
    //     <div className="text-xl sm:text-2xl pb-1">{heading}</div>
    //     <div className="text-xs font-light h-0 hidden hover:block hover:h-fit">{subtitle}</div>
    //   </div>
    // </div>
  );
}
