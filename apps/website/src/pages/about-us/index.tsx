import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container, Grid, List, Text, ThemeIcon, Title } from '@mantine/core';
import ChangeImage from '../../assets/img/bring change.png';
import BelieveImage from '../../assets/img/believe passionate.png';
import TechGapImage from '../../assets/img/tech gap.png';
import EqualCompImage from '../../assets/img/equal competition.png';
import FounderCommunityImage from '../../assets/img/founder community.png';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import TemplatePage from '../../components/miurac-page/templatePage';
import ScrollToTop from '../../components/utils/ScrollToTop';
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function About({}: Props) {
  const [count, handlers] = useState({ current: 0, direction: 'up' });
  return (
    <ReactScrollWheelHandler
      // style={{height:window.innerHeight}}

      downHandler={() => {
        if (count.current < 1 + pageInfo.length)
          handlers((v) => ({ current: v.current + 1, direction: 'up' }));
      }}
      upHandler={() => {
        console.log('F');

        if (count.current > 0)
          handlers((v) => ({ current: v.current - 1, direction: 'down' }));
      }}
    >
      <AnimatePresence mode="sync">
        {count.direction === 'up' && count.current === 0 && (
          <TemplatePage
            key={'about-us-home'}
            bgColor={
              'linear-gradient(90.54deg, #FBFBFD 0.06%, rgba(245, 245, 245, 0.97) 99.12%)'
            }
            id={'about-us-home'}
            text={'What brings change in this world?'}
            direction={'up'}
            captionText={
              'We strongly believe that passionate people with unimaginable amounts of commitment bring changes in this world! The guy who sacrifices his own comfort and needs to follow his dreams.'
            }
            heroImage={ChangeImage}
            centerAlignText={false}
            showScrollAnimation={true}
            showScrollToTop={true}
            // cta={cta}
          />
        )}
        {count.direction === 'down' && count.current === 0 && (
          <TemplatePage
            key={'about-us-home-down'}
            bgColor={
              'linear-gradient(90.54deg, #FBFBFD 0.06%, rgba(245, 245, 245, 0.97) 99.12%)'
            }
            id={'about-us-home'}
            text={'What brings change in this world?'}
            direction={'down'}
            captionText={
              'We strongly believe that passionate people with unimaginable amounts of commitment bring changes in this world! The guy who sacrifices his own comfort and needs to follow his dreams.'
            }
            heroImage={ChangeImage}
            centerAlignText={false}
            showScrollToTop={true}
          />
        )}

        {count.current === 1 && (
          <motion.div
            key={'about-our-story'}
            id={'about-our-story'}
            className="w-screen template-shadow fixed"
            style={{
              background:
                'linear-gradient(90.54deg, #FBFBFD 0.06%, rgba(245, 245, 245, 0.97) 99.12%)',
              height: '100vh',
            }}
            initial={{
              y: count.direction === 'up' ? '100vh' : '-100vh',
              zIndex: count.direction === 'up' ? 20 : 0,
            }}
            animate={{ y: 0, zIndex: 10 }}
            exit={{ y: 0, zIndex: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="h-16" />
            <div className="w-full max-w-xl md:px-20 m-auto bg-white text-center">
              <Title order={4} className="py-4 md:py-8">
                Our Story
              </Title>
              <Text
                weight={400}
                className="abeezee px-4 pb-3 text-xs md:text-sm"
                align="justify"
              >
                Miurac&#39;s story begins when a passionate guy was developing a
                new video production methodology in IITKGP. When he developed
                his first prototype, he was desperately searching for a tech
                team to build a platform out of it. After many attempts, he had
                to drop this idea because he couldn&#39;t find the right
                motivated tech talents to believe in his vision and build a new
                future.
              </Text>
              <div className="max-w-[500px] w-full m-auto ">
                <Text className="px-4">
                  He observed Three important observations from his failure
                </Text>
                <List
                  spacing="xs"
                  size="sm"
                  center
                  icon={
                    <ThemeIcon color="teal" size={12} radius="xl">
                      &nbsp;
                    </ThemeIcon>
                  }
                  className="abeezee text-left p-4 text-xs md:text-sm"
                >
                  <List.Item>
                    Most Indian techies prefers job safety than taking risk
                  </List.Item>
                  <List.Item>
                    A significant number of startups fail because of tech gap
                  </List.Item>
                  <List.Item>
                    Many MSME&#39;s are out competed by new startups just by
                    having tech on their side
                  </List.Item>
                </List>
                <br />
                <Text className="abeezee text-justify px-4 text-xs md:text-sm">
                  He was decided to dedicate his life in making the tech
                  affordable to everyone. To achieve their vision and make their
                  dream a true reality.
                </Text>
                <br />
                <Text className="abeezee text-justify px-4 text-xs md:text-sm">
                  India has a lot of passionate people who are dedicated to make
                  this country a better one but Tech is unreachable to common
                  man. To tackle this problem in our society and make tech
                  affordable and even playground for everyone,
                </Text>
                <Text align="left" className="p-4">
                  “ Miurac was born ”
                </Text>
              </div>
            </div>
          </motion.div>
        )}
        {pageInfo.map(
          ({ id, bgColor, text, img, centerAlignText, captionText }, index) =>
            count.direction === 'up' &&
            count.current === index + 2 && (
              <TemplatePage
                key={id}
                bgColor={bgColor}
                id={id}
                text={text}
                direction={'up'}
                captionText={captionText}
                heroImage={img}
                centerAlignText={centerAlignText}
              />
            )
        )}

        {pageInfo.map(
          ({ id, bgColor, text, img, centerAlignText, captionText }, index) =>
            count.direction === 'down' &&
            count.current === index + 2 && (
              <TemplatePage
                key={id + 'down'}
                bgColor={bgColor}
                id={id}
                text={text}
                direction={'down'}
                captionText={captionText}
                heroImage={img}
                centerAlignText={centerAlignText}
              />
            )
        )}
      </AnimatePresence>
      <ScrollToTop
        visible={count.current > 0}
        onClick={() => handlers({ current: 0, direction: 'up' })}
      />
    </ReactScrollWheelHandler>
  );
}

const pageInfo = [
  {
    id: 'about-us-pasionate',
    bgColor:
      'linear-gradient(90.54deg, #FBFBFD 0.06%, rgba(245, 245, 245, 0.97) 99.12%)',
    text: 'We believe in passionate people',
    img: BelieveImage,
    centerAlignText: false,
    captionText:
      'Innovation is brought by unreasonably passionate people and brutally honest minds. If you work on something you believe is very important, we’re there to help you.',
  },
  {
    id: 'about-us-tech-gap',
    bgColor:
      'linear-gradient(90.54deg, #FBFBFD 0.06%, rgba(245, 245, 245, 0.97) 99.12%)',
    text: 'Closing the tech gap',
    img: TechGapImage,
    centerAlignText: false,
    captionText:
      'Tech for many is still a costly affair and a hard access. Miurac hopes to bridge the tech gap by providing affordable tech to all MSME in India by 2030.',
  },
  {
    id: 'about-us-equal-competition',
    bgColor:
      'linear-gradient(90.54deg, #FBFBFD 0.06%, rgba(245, 245, 245, 0.97) 99.12%)',
    text: 'Promote Equal competition',
    img: EqualCompImage,
    centerAlignText: false,
    captionText:
      'A cricket team should not win because they have better kit. A business should not succeed because they have better tech. Miurac promotes an equal opportunity to technology for all businesses.',
  },
  {
    id: 'about-us-Community',
    bgColor:
      'linear-gradient(90.54deg, #FBFBFD 0.06%, rgba(245, 245, 245, 0.97) 99.12%)',
    text: 'Community of passionate founders',
    img: FounderCommunityImage,
    centerAlignText: false,
    captionText:
      'Join the community of founders who made their dream come true.',
  },
];
