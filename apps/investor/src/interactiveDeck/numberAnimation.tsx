import React, { useEffect, useState } from 'react';
import { formatAmount } from './slide2';

const NumberAnimation = ({ number, isAmount }:{number:number, isAmount?:boolean}) => {
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    let startTimestamp: number ;
    const endNumber = number;
    const duration = 1000; // Animation duration in milliseconds

    const step = (timestamp: number ) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1); // Calculate animation progress percentage

      // Calculate the animated number based on the progress percentage
      const currentNumber = Math.floor(percentage * endNumber);

      setAnimatedNumber(currentNumber);

      // Continue the animation until reaching the end number
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);

    // Cleanup function
    return () => {
      startTimestamp = 0;
    };
  }, [number]);

  return <>{isAmount?formatAmount(animatedNumber):animatedNumber}</>;
};

export default NumberAnimation;
