import { Center, Container, Divider, Grid, List, Title } from '@mantine/core';
import { EdufeatMockup } from '.';
import AlternatingGrid from '../../components/alternatingGrid';
import img1 from '../../assets/img/edufeatcase1.png';
import img2 from '../../assets/img/edufeatcase2.png';
import img3 from '../../assets/img/edufeatcase3.png';
import img4 from '../../assets/img/edufeatcase4.png';
import img5 from '../../assets/img/edufeatcase5.png';
import img6 from '../../assets/img/edufeatcase6.png';
import img7 from '../../assets/img/edufeatcase7.png';
import tImg1 from '../../assets/img/tech1.png';
import tImg2 from '../../assets/img/tech2.png';
import tImg3 from '../../assets/img/tech3.png';
import tImg4 from '../../assets/img/tech4.png';
import tImg5 from '../../assets/img/tech5.png';
import tImg6 from '../../assets/img/tech6.png';
import tImg7 from '../../assets/img/tech7.png';
import tImg8 from '../../assets/img/tech8.png';
import tImg9 from '../../assets/img/tech9.png';
import inteImg1 from '../../assets/img/inte1.png';
import inteImg2 from '../../assets/img/inte2.png';
import inteImg3 from '../../assets/img/inte3.png';
import inteImg4 from '../../assets/img/inte4.png';
import inteImg5 from '../../assets/img/inte5.png';
import inteImg6 from '../../assets/img/inte6.png';
import React from 'react';

export default function EdufeatCaseStudy() {
  return (
    <Container
      fluid
      className="px-0 pt-20 md:pt-32 manrope"
      style={{
        background: 'linear-gradient(104.19deg, #FFFFFF 0%, #D9EFFF 71.94%)',
      }}
    >
      <div className="p-10">
        <Title
          weight={800}
          className="md:w-3/4 text-2xl md:text-4xl text-center md:text-left manrope"
        >
          Helping thousands of International Students achieve their Academic
          goal through personalized tutoring
        </Title>
        <Grid className="pt-4">
          <Grid.Col md={6} xs={12} className="md:text-xl">
            <div className="text-justify font-medium pt-4 md:pt-8 pb-2 md:pb-4 w-full  md:w-3/4">
              Millions of students worldwide don’t have enough guidance apart
              from their classroom learning while pursuing higher education.
              This project aims to provide affordable and personalized guidance
              to help those students through tech.
            </div>
            <br />
            <div className="py-4">
              <b>Client:</b> Edufeat Pvt.Ltd <br />
              <b>Domain:</b> Edtech Location: India <br />
              <b>Timeline </b>: August 2022 - March 2023 <br />
              <b>Services:</b> Project discovery, Business analysis, Technical
              analysis, Branding, Ux/Ui design, Development, Deployment,
              Maintenance <br />
              <b>Resources:</b> 4 Software Developers, 2 UX/UI Designer, 1 QA
              Engineer, 1 Project Manager <br />
              <b>Core Technologies and Tech stack:</b> ReactJS, Node Js, Google
              Cloud platform, Firebase, Tesseract, MIDL, Letex and Katex, Image
              editor, Razorpay, Stripe, Paypal, Cashfree, Google calendar, Node
              emailer and other relevant technologies
            </div>
          </Grid.Col>
          <Grid.Col md={6} xs={12}>
            <EdufeatMockup className="w-full" />
          </Grid.Col>
        </Grid>
      </div>
      <div
        style={{
          background: 'linear-gradient(135deg, #2694B0 0%, #6663FF 100%)',
        }}
        className="text-white p-10 md:p-16 text-justify text-base md:text-lg"
      >
        <Grid>
          <Grid.Col md={6} xs={12}>
            <Title order={2} weight={800} className="manrope ">
              Background
            </Title>
            <br />
            Edufeat strongly believes that there is no such thing as a "Poor
            student" but only a "Lost student" and that any student can achieve
            academic success with the right guidance. They also believes they
            can provide students anywhere in the world with the best guidance at
            an affordable cost with a team of thousands of excellent experts
            working 24/7.
          </Grid.Col>
          <Grid.Col md={6} xs={12}>
            <Title order={2} weight={800} className="manrope hidden md:block">
              <br />
            </Title>
            <br />
            <div>
              Edufeat approached us to join the mission of connecting students
              from around the globe and empowering them with quality education.
            </div>
          </Grid.Col>
        </Grid>
        <br />
        <Divider />
        <Grid className="mt-8">
          <Grid.Col md={6} xs={12}>
            <Title order={2} weight={800} className="manrope ">
              Business Challenges
            </Title>
            <br />
            <List>
              <List.Item className="text-white manrope my-2 text-base md:text-lg">
                Build the secure, reliable, and scalable platform to connect
              </List.Item>
              <List.Item className="text-white manrope my-2 text-base md:text-lg">
                millions of students with experts Design and develop a platform
              </List.Item>
              <List.Item className="text-white manrope my-2 text-base md:text-lg">
                that enables instant communication between tutors and students
                in
              </List.Item>
              <List.Item className="text-white manrope my-2 text-base md:text-lg">
                a simplified manner Create a messaging system to simplify
              </List.Item>
              <List.Item className="text-white manrope my-2 text-base md:text-lg">
                communication between tutors and students. Integrate student
              </List.Item>
              <List.Item className="text-white manrope my-2 text-base md:text-lg">
                friendly payment system to enable international payments. Design
              </List.Item>
              <List.Item className="text-white manrope my-2 text-base md:text-lg">
                and develop an easy Identity verification and automated payouts
              </List.Item>
              <List.Item className="text-white manrope my-2 text-base md:text-lg">
                for tutors to receive earnings regularly. Design and develop a
              </List.Item>
              <List.Item className="text-white manrope my-2 text-base md:text-lg">
                system where students can post their queries and get solutions.
              </List.Item>
            </List>
          </Grid.Col>
          <Grid.Col md={6} xs={12}>
            <Title order={2} weight={800} className="manrope ">
              Values Delivered
            </Title>
            <br />
            <List>
              <List.Item className="text-white manrope my-2 text-base md:text-lg">
                Developed clear UI and smooth UX design of the online platform
                to direct users according to the service they are in need.
              </List.Item>
              <List.Item className="text-white manrope my-2 text-base md:text-lg">
                Implemented a modern and secure payment systems, Stripe, Paypal
                and Razorpay. Thus, the users can be sure their payments on this
                edufeat website are protected.
              </List.Item>
              <List.Item className="text-white manrope my-2 text-base md:text-lg">
                Developed Automated Examination software that calculates scores
                and gives result.
              </List.Item>
              <List.Item className="text-white manrope my-2 text-base md:text-lg">
                Developed employee onboarding, tutor onboarding and student
                onboarding
              </List.Item>
            </List>
          </Grid.Col>
        </Grid>
      </div>
      <FeatureComponent
        fContent={featureContent}
        style={{ background: 'transparent' }}
        title={'Solution delivered'}
        className="py-10 text-[#373737]"
      />
      <FeatureComponent
        fContent={featureContent2}
        style={{
          background: 'linear-gradient(135deg, #2694B0 0%, #6663FF 100%)',
          color: 'white',
        }}
        title={''}
        className="py-10 text-white"
      />
      <div
        style={{
          background:
            'linear-gradient(95.56deg, #30373B -3.21%, #3D10BD 115.73%)',
        }}
        className="py-20 text-center px-4 md:px-10"
      >
        <Grid>
          <Grid.Col md={6} xs={12}>
            <Title
              weight={800}
              order={3}
              size={50}
              className="manrope text-white  pb-12"
            >
              Technologies
            </Title>
            <Grid className="text-center text-white manrope md:px-10">
              {resources1.map((resour) => (
                <Grid.Col span={4} className="pb-8">
                  <img
                    src={resour.img}
                    className="block mx-auto"
                    alt={resour.title}
                  />
                  <div>{resour.title}</div>
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
          <Grid.Col md={6} xs={12}>
            <Title
              weight={800}
              order={3}
              size={50}
              className="manrope text-white  pb-12"
            >
              Integrations
            </Title>
            <Grid className="text-center text-white manrope md:px-10">
              {resources2.map((resour) => (
                <Grid.Col span={4} className="pb-8">
                  <img
                    src={resour.img}
                    className="block mx-auto"
                    alt={resour.title}
                  />
                  <div>{resour.title}</div>
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  );
}
const FeatureComponent = ({
  fContent,
  style,
  title,
  className,
}: {
  fContent: {
    title: string;
    description: string;
    img: string;
  }[];
  style?: React.CSSProperties;
  title: string;
  className: string;
}) => {
  return (
    <div className={className} style={style}>
      <Title
        weight={800}
        className="md:w-3/4 text-2xl md:text-4xl text-center md:text-left manrope py-4"
      >
        {title}
      </Title>
      <AlternatingGrid>
        {fContent.map(
          (
            content: {
              title: string;
              description: string;
              img: string;
            },
            index: number
          ) => [
            <div className="mt-4">
              <img
                src={content.img}
                className={`block h-full max-w-md ${
                  index % 2 && 'float-right'
                }`}
                alt={content.title}
              />
            </div>,
            <div className="p-6 text-justify  md:w-3/4 md:mx-auto ">
              <div>
                <Title weight={800} order={3} className="manrope">
                  {content.title}
                </Title>
                <br />
                <div>{content.description}</div>
              </div>
            </div>,
          ]
        )}
      </AlternatingGrid>
    </div>
  );
};

const featureContent = [
  {
    title:
      'Evaluating tutors based on the test scores providing qualified members to students',
    description: `Our Specialists designed a test evaluation system, that picks up the questions from the available set of pre-uploaded questions and groups them for test evaluation. The system automatically reads and records the responses, providing scores and promoting tutors for onboarding.`,
    img: img1,
  },
  {
    title:
      'Short and hassle - free onboarding for students, tutors and employees',
    description: `The main goal is to shorten the journey to be a part of the edufeat's ecosystem and reach their career objectives. We created various onboarding flows for students, Tutors, and employees.`,
    img: img2,
  },
  {
    title: 'Instant  identity verification guaranteeing reliable tutor ',
    description: `The first thing that is to be checked in the process of background verification of candidates, is the identity of the person. We integrated cashfree for pan and bank account verification.`,
    img: img3,
  },
  {
    title:
      'Trouble-free payment system enabling students to pay from anywhere in the world',
    description: `Students across the globe can pay tutors using the payment system. We have integrated three alternative payment gateway providers for all international fund transfers such that users  can select whichever one they prefer.`,
    img: img4,
  },
  {
    title:
      "Neat and appealing ux/ui design, making it user-friendly, which impacts users' involvement.",
    description: `The user interface allows users to get smooth usage due to the well-defined UI/UX guidelines, developed by our team. We built a robust brand guide with intuitive UX and simple UI design.`,
    img: img5,
  },
];

const featureContent2 = [
  {
    title: 'Leading the whole platform with the help of the master admin board',
    description: `Managing the entire platform with the help of the master admin dashboard. We have built a robust dashboard to carry day to day operations. Integrated every module to the main admin dashboard to provide support and ensure even flow.`,
    img: img7,
  },
  {
    title:
      'Connecting students with a dashboard to discover their full potential',
    description: `Providing a helping hand in their studies by building a tutor dashboard to connect with the students. The tutor gets notification whenever a student requests or raises a query.`,
    img: img6,
  },
];

const resources1 = [
  { img: tImg1, title: 'React' },
  { img: tImg2, title: 'Node js' },
  { img: tImg3, title: 'GCP' },
  { img: tImg4, title: 'Firebase' },
  { img: tImg5, title: 'Mantine' },
  { img: tImg6, title: 'MIDL' },
  { img: tImg7, title: 'Konva' },
  { img: tImg8, title: 'Tesseract' },
  { img: tImg9, title: 'Redux' },
];

const resources2 = [
    { img: inteImg1, title: 'Stripe' },
    { img: inteImg2, title: 'Paypal' },
    { img: inteImg3, title: 'Razorpay' },
    { img: inteImg4, title: 'Cashfree' },
    { img: inteImg5, title: 'Google Calender' },
    { img: inteImg6, title: 'Nodemailer' },
  ];
  