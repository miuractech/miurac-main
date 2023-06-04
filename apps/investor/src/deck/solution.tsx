import React from 'react';
import LeftTitle from './leftTitle';
import Xcipher from '../assets/img/xcipher.png';
import { Container } from '@mantine/core';
export default function Solution() {
  return (
    <Container className="py-20 text-center relative">
      <LeftTitle title="Our solution" />
      <img
        className="max-w-md w-full block mx-auto"
        src={Xcipher}
        alt="xcipher"
      />
      <br />
      <div className="text-base md:text-xl">
        Dream it. Define it. Let AI Develop it.
      </div>
      <div className="p-10 text-xl md:text-3xl rounded-3xl my-16 bg-gray-500">
        An autonomous AI that codes business apps using natural language
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 w-64 sm:w-96 lg:w-full max-w-2xl lg:px-24 mx-auto">
        {perks.map((perk) => (
          <Perk perk={perk} />
        ))}
      </div>
    </Container>
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
