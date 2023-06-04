import { Text } from '@mantine/core';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
type Props = {
  title: string;
};

export default function LeftTitle({ title }: Props) {
    const matches = useMediaQuery('(min-width: 1024px)');
    if(matches){
        return (
          <Text className="transform -rotate-90 absolute h-full text-center -m-20 text-gray-600 " 
          style={{writingMode:"vertical-rl", transform:'rotate(180deg)' }}
          size={32}
          weight={700}
          >
            {title}
          </Text>
        );
    }else{return(
        <Text 
          size={32}
          weight={700}
          align='center'
          >
            {title}
          </Text>
    )
    }
}
