import React from 'react';

type Props = {
    bgColor:string
};

export default function TemplatePage({bgColor}: Props) {
  return <div
  className='w-full h-screen'
  style={{backgroundColor:bgColor}}
  ><div className='h-16' />
    TemplatePage</div>;
}
