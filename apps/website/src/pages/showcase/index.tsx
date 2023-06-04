import { Button, Text, Title } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons';
import { Link, NavLink } from 'react-router-dom';
import boxtechImg from '../../assets/img/showcase/boxtech.png';
import cmiImg from '../../assets/img/showcase/CMI.png';
import examImg from '../../assets/img/showcase/edufeatexam.png';
import mockeasyImg from '../../assets/img/showcase/mockeasy.png';
import paymentImg from '../../assets/img/showcase/payment.png';
import stoicImg from '../../assets/img/showcase/stoic.png';
import onmenuImg from '../../assets/img/showcase/onmenu.png';

export default function Showcase() {
  return (
    <div className="py-20 md:py-28">
      <Title align="center">Discover our works</Title>
      <br />
      <Text align="justify" className="max-w-3xl mx-8 manrope md:mx-auto">
        We have helped successfully launch clients' projects of different
        stages: from product idea validation, MVP implementation to scaling,
        further development and support.
      </Text>
      {showcaseItems.map((product) => (
        <div
          style={{ background: product.bg }}
          className="rounded-[30px] text-white p-12 m-4 md:m-12 md:max-w-5xl xl:mx-auto"
        >
          <div className="flex gap-5 md:flex-row flex-col-reverse">
            <div>
              <Title
                order={2}
                className="text-center md:text-left manrope"
                weight={800}
              >
                {product.title}
              </Title>
              <br />
              <Text className="manrope">{product.description}</Text>
              <br />

              <a
                href={product.link ?? '/showcase'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                  rightIcon={<IconArrowUpRight />}
                  disabled={!product.link}
                >
                  View
                </Button>
              </a>
            </div>
            <div className=" sm:basis-[700px] md:basis-[900px]">
              <img src={product.img} className="w-full" alt={product.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const showcaseItems = [
  
  {
    title: 'Trouble-free payment system enabling users to pay from anywhere in the world.',
    description:
      'People across the globe can pay using the payment system. We have integrated three alternative payment gateway providers for all international fund transfers such that users  can select whichever one they prefer.',
    img: paymentImg,
    link: 'https://edufeat--website.web.app/payment',
    bg: 'linear-gradient(95.67deg, #0F5FFC -3.28%, #4791FF 95%)',
  },
  {
    title: 'Moving just made easy. Get instant quote via the new Boxtech.',
    description:
      'Moving to a different city is emotionally overwhelming, boxtech makes it less stressful by providing you an instant quote',
    img: boxtechImg,
    link: 'https://boxtech.miurac.com/9jQkN2lpgyMgpVglTGY2ySPxhSv2',
    bg: '#292929',
  },
  {
    title: 'Hundreds of mockups demo instantly. Generate quality mockups with your designs.',
    description:
      'Generating mockups does not  require any graphic software. This project aims in generating hundreds of mockups on a click.',
    img: mockeasyImg,
    link: 'https://mockeasy.in/',
    bg: 'linear-gradient(95.67deg, #D70067 -3.28%, #FC0F9D 107.72%)',
  },
//   {
//     title: 'Understanding different time zones made easy. Interconversion of  time zones through time tool.',
//     description:
//       'Interconversion of one time zone into other is a hard and tedious task. This project aims to provide interconversions and understanding time delay between them.',
//     img: boxtechImg,
//     // link: 'https://boxtech.miurac.com/9jQkN2lpgyMgpVglTGY2ySPxhSv2',
//     bg: 'linear-gradient(95.67deg, #FF5A5A -3.28%, #FCB90F 107.72%)',
//   },
  {
    title: 'Evaluating based on the test scores verifying qualified members',
    description:
      'Our Specialists designed a test evaluation system, that picks up the questions from the available set of pre-uploaded questions and groups them for test evaluation. The system automatically reads and records the responses, providing scores and promoting qualified members.',
    img: examImg,
    // link: 'https://boxtech.miurac.com/9jQkN2lpgyMgpVglTGY2ySPxhSv2',
    bg: 'linear-gradient(95.31deg, #008A37 -3.27%, #18D558 100%)',
  },
  {
    title: 'Digitalizing menu’s for quick searching and hassle-free ordering.',
    description:
      'Manual searching for the desired products is no longer a tedious task. With the help of on menu, we aim to convert traditional offline menu’s into digital menus by providing a quick search and sorting options. ',
    img: onmenuImg ,
    // link: 'https://boxtech.miurac.com/9jQkN2lpgyMgpVglTGY2ySPxhSv2',
    bg: 'linear-gradient(135deg, #3B9DF8 0%, #34FF9E 100%)',
  },
  {
    title: 'Managing sports hedge fund requires vast knowledge. Stoic strategy helps in profitable strategies',
    description:
      'Finding profitable strategies which have an edge in the sports markets with the help of machine learning and quantitative techniques .The strategies are used to trade in the sports markets. The objective of the fund is to generate returns in excess of global hedge fund indices.',
    img: stoicImg,
    // link: 'https://boxtech.miurac.com/9jQkN2lpgyMgpVglTGY2ySPxhSv2',
    bg: 'linear-gradient(137.2deg, #3045FF 0%, #E334FF 113.04%)',
  },
  {
    title: 'Let the brand be unique for yourself. Create your own brand merch.',
    description:
      'Many people are interested in creating their own personal brand, when it comes to accessories, clothes and apparel. This project aims to provide users to create personalized branding to make their styling unique.',
    img: cmiImg,
    link: 'https://dos-website.web.app/CMI',
    bg: 'linear-gradient(95.67deg, #FF5A5A -3.28%, #FCB90F 107.72%)',
  },
];
