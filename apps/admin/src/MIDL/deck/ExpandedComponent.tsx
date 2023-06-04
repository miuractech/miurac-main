/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react'
import { Deck } from './form';
import { Text } from '@mantine/core';


export default function ExpandedComponent({data}:{data:Deck}) {
    
  return (
    <div className='p-4' >{data.timeStamp.map(t=>(
        <Text color='green' className='p-4' >
            {/* 
            @ts-ignore */}
            {t.toDate().toString()}
        </Text>
    ))}</div>
  )
}