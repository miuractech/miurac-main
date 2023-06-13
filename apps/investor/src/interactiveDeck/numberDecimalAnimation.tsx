import React, { useEffect, useState } from 'react';

const NumberAnimation = ({ number }:{ number:number }) => {
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    const animationDuration = 1000; // Animation duration in milliseconds
    const framesPerSecond = 60; // Number of animation frames per second
    const totalFrames = (animationDuration / 1000) * framesPerSecond;
    const increment = number / totalFrames;

    let currentNumber = 0;
    let frameCount = 0;

    const animationInterval = setInterval(() => {
      currentNumber += increment;
      frameCount++;

      if (frameCount >= totalFrames) {
        currentNumber = number; // Ensure the final number is exact
        clearInterval(animationInterval);
      }

      setDisplayNumber(parseFloat(currentNumber.toFixed(2)));
    }, 1000 / framesPerSecond);

    return () => {
      clearInterval(animationInterval);
    };
  }, [number]);

  return <div>{displayNumber}</div>;
};

export default NumberAnimation;
