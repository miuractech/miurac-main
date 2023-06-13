import { Text, Title } from '@mantine/core';
import React from 'react';
import Xcipher from '../assets/img/xcipher.png';


export default function Slide3() {
  return (
    <div className='py-10 max-w-lg  w-full mx-auto' >
         <div className='py-16' >
      <img
        className="max-w-md w-5/6 block mx-auto"
        src={Xcipher}
        alt="xcipher"
      />
       <br />
      <div className="text-base md:text-xl text-center">
        Dream it. Define it. Let AI Develop it.
      </div>
      <div className="p-6 text-xl md:text-xl rounded-2xl my-16 bg-gray-500">
        An autonomous AI that codes business apps using natural language
      </div>
      <div className=" w-64 sm:w-96 lg:w-full max-w-2xl lg:px-24 mx-auto">
        {perks.map((perk) => (
          <Perk perk={perk} />
        ))}
      </div>
      </div>
      <div className="w-full sm:max-w-md md:max-w-2xl mx-auto">
        <Title order={3} className='py-4' >
            In simple words
        </Title>
        <iframe
          width="100%"
          className='h-80 md:h-96'
          src="https://www.youtube-nocookie.com/embed/DhXQe6F7aeg?controls=0"
          title="YouTube video player"
          // frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
     
    </div>
  );
}

export const Perk = ({ perk }: { perk: string }) => {
    return (
      <div className="flex items-center text-left w-full">
        <span className="w-6 h-6 bg-blue-500 rounded-3xl" />
        <p className='pl-4' >{perk}</p>
      </div>
    );
  };

const perks = [
    'Complete business app in minutes',
    'Budget as low as $500',
    'No Language barrier',
    'AI Gets better with time',
  ];