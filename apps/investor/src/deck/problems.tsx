import React from 'react';
import bigTechImage from '../assets/problems/bigtech.svg';
import costImage from '../assets/problems/cost.svg';
import securityImage from '../assets/problems/security.svg';
import talentImage from '../assets/problems/talent.svg';
import landingImage from '../assets/problems/landing.png';
import Card from './card';
import { Accordion } from '@mantine/core';
import LeftTitle from './leftTitle';

export default function Problems() {
  return (
    <div>
      <br />
      <br />
      <div className="flex relative flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="text-2xl text-center lg:text-left pt-6 lg:pt-0 md:pb-2">
            Building a custom app as an SMB is quite challenging
          </div>

          {problems.map(({ logo, subtitle, title }) => (
            <Card heading={title} subtitle={subtitle} logo={logo} />
          ))}
        </div>
        <div className="w-full lg:w-1/2 md:pt-40 relative">
          <img className="w-full block" src={landingImage} alt="landing" />
        </div>
        <LeftTitle title="Why we started?" />
      </div>
    </div>
  );
}

const problems = [
  {
    title: 'High cost barrier',
    subtitle: (
      <>
        Min project cost ( $15,000- $171,450 )
        <sup>
          {' '}
          <a href="https://imaginovation.net/blog/how-much-does-it-cost-to-build-mobile-app/">
            [1]
          </a>
        </sup>{' '}
      </>
    ),
    logo: costImage,
  },
  {
    title: 'Finding the right Tech Talent',
    subtitle: (
      <>
        Entry Tech salary $ 45,000 - Avg Tech salary $104,566
        <sup>
          {' '}
          <a href="https://www.shrm.org/resourcesandtools/hr-topics/compensation/pages/us-tech-salaries-averaged-above-six-figures-in-2021.aspx">
            [2]
          </a>
        </sup>
      </>
    ),
    logo: talentImage,
  },
  {
    title: 'Cyber security & Scaling',
    subtitle: (
      <>
        60% SMBs close in &lt;6 months due to data breach / cyber attack
        <sup>
          {' '}
          <a href="https://cybersecurityventures.com/60-percent-of-small-companies-close-within-6-months-of-being-hacked/">
            [3]
          </a>
        </sup>
      </>
    ),
    logo: securityImage,
  },
  {
    title: 'Unfavourable big tech policies',
    subtitle: (
      <>
        Amazon vs diapers.com acquisition
        <sup>
          {' '}
          <a href="https://allthingsd.com/20131010/how-jeff-bezos-crushed-diapers-com-so-amazon-could-buy-diapers-com/">
            [4]
          </a>
        </sup>{' '}
        , Google vs Sonos
        <sup>
          {' '}
          <a href="https://www.reuters.com/legal/google-must-face-trial-over-sonos-patents-california-judge-says-2023-04-13/#:~:text=Sonos%20accused%20Google%20in%20the,and%20determined%20Google%20infringed%20another.">
            [5]
          </a>
        </sup>
      </>
    ),
    logo: bigTechImage,
  },
];
