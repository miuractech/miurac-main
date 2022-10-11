import { useEffect, useRef } from 'react';
import { List, Text, ThemeIcon, Title } from '@mantine/core';
import ChangeImage from '../../assets/img/bring change.png';
import BelieveImage from '../../assets/img/believe passionate.png';
import TechGapImage from '../../assets/img/tech gap.png';
import EqualCompImage from '../../assets/img/equal competition.png';
import FounderCommunityImage from '../../assets/img/founder community.png';
import TemplatePage from '../../components/miurac-page/templatePage';
import ScrollToTop from '../../components/utils/ScrollToTop';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useWindowScroll } from '@mantine/hooks';
gsap.registerPlugin(ScrollTrigger);
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function About({}: Props) {
  const ref = useRef<HTMLDivElement>();
  const [scroll, scrollTo] = useWindowScroll();
  useEffect(() => {
    const element = ref.current;
    if (element) {
      for (const p of [
        'about-us-home',
        'about-our-story',
        ...pageInfo.map((d) => d.id),
      ]) {
        gsap.to(element.querySelector(`#${p}`), {
          scrollTrigger: {
            trigger: element.querySelector(`#${p}`),
            start: 'top top',
            pin: true,
            pinSpacing: false,
            snap: {
              snapTo: 1,
              duration: 0.8,
              inertia:false
            },
          },
        });
      }
    }
  }, []);
  return (
    <>
      {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore */}
      <div ref={ref}>
        <TemplatePage
          key={'about-us-home'}
          bgColor={'linear-gradient(90deg, #FCFCFE 100%, F5F5F5 100%)'}
          id={'about-us-home'}
          text={'What brings change in this world?'}
          captionText={
            'We strongly believe that passionate people with incredible amounts of commitment bring changes in this world! The guy who sacrifices his own comfort and needs to follow his dreams.'
          }
          heroImage={ChangeImage}
          centerAlignText={false}
          showScrollAnimation={true}
          showScrollToTop={true}
          // cta={cta}
        />

        <div
          key={'about-our-story'}
          id={'about-our-story'}
          className="w-full template-shadow scroll bg-white"
          style={{
            // background: 'linear-gradient(90deg, #FCFCFE 100%, F5F5F5 100%)',
            height: '100vh',
          }}
        >
          <div className="h-16" />
          <div className="w-full max-w-xl md:px-20 m-auto bg-white text-center">
            <Title order={4} className="py-4">
              Our Story
            </Title>
            <Text
              weight={400}
              className="abeezee px-4 pb-3 text-xs md:text-sm"
              align="justify"
            >
              Miurac&#39;s story begins when a passionate guy was developing a
              new video production methodology in IITKGP. When he developed his
              first prototype, he was desperately searching for a tech team to
              build a platform out of it. After many attempts, he had to drop
              this idea because he couldn&#39;t find the right motivated tech
              talents to believe in his vision and build a new future.
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
                className="abeezee text-left p-3 text-xs md:text-sm"
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
                He decided to dedicate his life in making the tech
                affordable to everyone, to achieve their vision and make their
                dream a true reality.
              </Text>
              <br />
              <Text className="abeezee text-justify px-4 text-xs md:text-sm">
                India has a lot of passionate people who are dedicated to make
                this country a better one but Tech is unreachable to common man.
                To tackle this problem in our society, to make tech affordable
                and even playground for everyone
              </Text>
              <Text align="left" className="p-4">
                “ Miurac was born ”
              </Text>
            </div>
          </div>
        </div>
        {pageInfo.map(
          ({ id, bgColor, text, img, centerAlignText, captionText }, index) => (
            <TemplatePage
              key={id}
              bgColor={bgColor}
              id={id}
              text={text}
              captionText={captionText}
              heroImage={img}
              centerAlignText={centerAlignText}
            />
          )
        )}
      </div>
      <ScrollToTop visible={scroll.y > 20} onClick={() => scrollTo({ y: 0 })} />
    </>
  );
}

const pageInfo = [
  {
    id: 'about-us-pasionate',
    bgColor: 'white',
    text: 'We believe in passionate people',
    img: BelieveImage,
    centerAlignText: false,
    captionText:
      'Innovation is brought by unreasonably passionate people and brutally honest minds. If you work on something you believe is very important, we’re there to help you.',
  },
  {
    id: 'about-us-tech-gap',
    bgColor: 'white',
    text: 'Closing the tech gap',
    img: TechGapImage,
    centerAlignText: false,
    captionText:
      'Tech for many is still a costly affair and a hard access. Miurac hopes to bridge the tech gap by providing affordable tech to all MSME in India by 2030.',
  },
  {
    id: 'about-us-equal-competition',
    bgColor: 'white',
    text: 'Promote Equal competition',
    img: EqualCompImage,
    centerAlignText: false,
    captionText:
      'A cricket team should not win because they have better kit. A business should not succeed because they have better tech. Miurac promotes an equal opportunity to technology for all businesses.',
  },
  {
    id: 'about-us-Community',
    bgColor: 'white',
    text: 'Community of passionate founders',
    img: FounderCommunityImage,
    centerAlignText: false,
    captionText:
      'Join the community of founders who made their dream come true.',
  },
];
