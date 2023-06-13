/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Accordion,
  Button,
  Chip,
  Collapse,
  Container,
  Divider,
  Grid,
  Select,
  Table,
  Text,
  Title,
} from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NumberAnimationDecimal from './numberDecimalAnimation';
import NumberAnimation from './numberAnimation';
import { useMediaQuery } from '@mantine/hooks';
import AnimatedElement from './utils';
import { useNavigate } from 'react-router-dom';
const avgAppCostMin = 60000;
const avgAppCostMax = 150000;
type Props = {
  // setCurrSlide: React.Dispatch<React.SetStateAction<number>>
};

export default function Slide2({}: Props) {
  const [owner, setOwner] = useState(owners[0]);
  const [opened, setOpened] = useState(false);
  const [openedTechie, setOpenedTechie] = useState(false);
    const navigate = useNavigate()
  return (
    <Container className="block md:flex md:min-h-screen md:items-center ">
      <div className="p-4 max-w-xs sm:max-w-xl md:max-w-3xl w-full mx-auto text-center">
        <Title className="py-4" order={4}>
          Pay
        </Title>

        <Grid justify="center">
          <Grid.Col xs={12} md={6}>
            <AnimatedElement delay={0} key="cost">
              <div
                className={`text-center md:py-4 py-2 w-full rounded-lg border border-gray-200 border-solid`}
              >
                <Text className="md:text-base text-sm">Estimated Cost</Text>
                <Text>
                  <span className="text-2xl md:text-4xl  font-bold">
                    $
                    <NumberAnimation number={avgAppCostMin} isAmount />-
                  </span>
                  <span className="text-2xl md:text-4xl  font-bold">
                    $
                    <NumberAnimation number={avgAppCostMax} isAmount />
                  </span>
                </Text>
                <Text className="text-sm">
                  <div>
                    <Button
                      variant="subtle"
                      onClick={() => setOpened(!opened)}
                      size="xs"
                      color="blue"
                      className="text-sm"
                    >
                      view {opened ? 'less' : 'more'}
                    </Button>
                  </div>
                </Text>
                <Collapse in={opened}>
                  <div className="px-5">
                    <Text className="py-3">
                      <b>Min Project cost &ensp;</b>
                      $15,000
                    </Text>
                    <Text className="py-3">
                      <b>Entry Tech salary&ensp;</b>$ 45,000
                    </Text>
                    <div>
                      <Text className="py-3">
                        <b> days to fill one position in tech &ensp;</b>68
                      </Text>
                      <Text className="py-3">
                        <b>Avg interviews needed per hire &ensp;</b>12
                      </Text>
                      <HiringTable />
                    </div>
                  </div>
                </Collapse>
              </div>
            </AnimatedElement>
          </Grid.Col>

          <Grid.Col xs={12} md={6}>
            <AnimatedElement delay={0.3} key="revenue">
              <div
                className={`text-center md:py-4 py-2 rounded-lg border border-gray-200 border-solid`}
              >
                <Text className="flex justify-center">
                  <span className="text-2xl md:text-4xl font-bold">
                    <NumberAnimationDecimal
                      number={avgAppCostMin / owner.avgRevenue}
                    />
                  </span>
                  <span className="text-2xl md:text-4xl font-bold">-</span>
                  <span className="text-2xl md:text-4xl font-bold">
                    <NumberAnimationDecimal
                      number={avgAppCostMax / owner.avgRevenue}
                    />
                  </span>
                </Text>
                <Text className="md:text-base text-sm">x Yearly revenue</Text>
                <Button
                  variant="subtle"
                  onClick={() => setOpenedTechie(!openedTechie)}
                  size="xs"
                  color="blue"
                  className="text-sm"
                >
                  view {openedTechie ? 'less' : 'more'}
                </Button>
                <Collapse in={openedTechie}>
                  <div className=" text-left py-4 md:py-1">
                    <Select
                      label="I am a"
                      value={owner.name}
                      onChange={(v) =>
                        // @ts-ignore
                        setOwner(owners.find((item) => item.name === v))
                      }
                      data={owners.map((ow) => ({
                        label: ow.name,
                        value: ow.name,
                      }))}
                    />
                    <Text>
                      Avg revenue of {owner.name} owner = $
                      {formatAmount(owner.avgRevenue)}
                    </Text>
                  </div>
                  <Text>Avg Tech salary $104,566</Text>
                  <Text>Entry level Tech salary $ 45,000</Text>
                </Collapse>
              </div>
            </AnimatedElement>
          </Grid.Col>

          {/* <Grid.Col xs={6} md={6}>
          <div className={`text-center ${currentState === 2?"bg-gray-600":'bg-transparent'} rounded-lg border border-gray-200 border-solid p-2`}>
            <Text className="text-base">Estimated Time</Text>
            <Text>
              <span className="text-5xl font-bold">
                <NumberAnimation number={68 * 5} />
              </span>
              <span>&ensp;x&ensp;hrs</span>
            </Text>
            <Text className="text-sm">time to fill a tech position = 68</Text>
            <Button
              variant="subtle"
              onClick={() => setOpenedTechie(!openedTechie)}
              size="xs"
              color="blue"
              className="text-sm"
            >
              view {openedTechie ? 'less' : 'more'}
            </Button>
            <Collapse in={openedTechie}>
              <Text>Avg Tech salary $104,566</Text>
              <Text>Entry level Tech salary $ 45,000</Text>
            </Collapse>
          </div>
        </Grid.Col> */}
        </Grid>

        <div className="pt-4 w-full">
          <AnimatedElement delay={0.5} key="hire">
            <Accordion variant="separated">
              <Accordion.Item value="hire">
                <Accordion.Control className="font-bold">
                  Hire CTO, Devs, Designer, backend team, etc
                </Accordion.Control>
                <Accordion.Panel>
                  <div className="px-5">
                    <Text className="py-3">
                      <b>Avg Techie salary &ensp;</b>
                      $104,566
                    </Text>
                    <Text className="py-3">
                      <b>Entry Tech salary&ensp;</b>$ 45,000
                    </Text>
                    <div>
                      <Text className="py-3">
                        <b> days to fill one position in tech &ensp;</b>68
                      </Text>
                      <Text className="py-3">
                        <b>Avg interviews needed per hire &ensp;</b>12
                      </Text>
                      <HiringTable />
                    </div>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="flexibility">
                <Accordion.Control>
                  Follow Compliances and ensure Cyber security
                </Accordion.Control>
                <Accordion.Panel>
                  Configure components appearance and behavior with vast amount
                  of settings or overwrite any part of component styles
                </Accordion.Panel>
              </Accordion.Item>

              {/* <Accordion.Item value="focus-ring">
              <Accordion.Control>No annoying focus ring</Accordion.Control>
              <Accordion.Panel>
                With new :focus-visible pseudo-class focus ring appears only
                when user navigates with keyboard
              </Accordion.Panel>
            </Accordion.Item> */}
            </Accordion>
          </AnimatedElement>
        </div>
        <div className="relative py-6 text-center">
          <Divider className="w-full" />

          <Title className="py-2 md:py-4" order={4}>
            OR
          </Title>
          <Divider className="w-full" />
        </div>
        <Title order={3} >Build with MIURAC</Title>
        <Text className="font-extralight">Budget as low as $500</Text>
        <Button className="md:mt-10" variant="gradient" onClick={()=>{
            navigate('/deck-interactive/3')
        }} >
          Know how miurac is cheap?
        </Button>
        <div className="pb-16" />
        {/* <div className="p-4">
        {problems.map(({ subtitle, title }) => (
          <CollapseCard subtitle={subtitle} title={title} />
        ))}
      </div> */}
        {/*  */}
      </div>
    </Container>
  );
}

export function formatAmount(number: number) {
  if (number < 1000) {
    return number.toString();
  } else if (number < 1000000) {
    return (number / 1000).toFixed(0) + 'K';
  } else if (number < 1000000000) {
    return (number / 1000000).toFixed(0) + 'M';
  } else {
    return (number / 1000000000).toFixed(0) + 'B';
  }
}

// export function formatAmount(number: number) {
//   const formattedNumber = number
//     .toFixed(2)
//     .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

//   return <span>{formatToLetter(formattedNumber)}</span>;
// }

const owners = [
  { name: 'American Man', avgRevenue: 91000 },
  { name: 'American Woman', avgRevenue: 59000 },
  { name: 'Self employed - no other employees', avgRevenue: 44000 },
  { name: 'Black', avgRevenue: 50539 },
  { name: 'Hispanic', avgRevenue: 53705 },
];

const CollapseCard = ({
  subtitle,
  title,
}: {
  subtitle: JSX.Element | string;
  title: string;
}) => {
  const [opened, setOpened] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpened(true)}
      onClick={() => setOpened(!opened)}
      onMouseLeave={() => setOpened(false)}
      className="flex px-4 gap-x-4 bg-slate-700 my-8 rounded-lg mx-auto"
    >
      <div>
        <p className="pb-1 ">{title}</p>
        <Collapse in={opened}>
          <p className="">{subtitle}</p>
        </Collapse>
      </div>
    </div>
  );
};

const HiringTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <Table className="w-[450px] mx-auto">
        <thead>
          <tr className=" text-center">
            <th className="w-24">Metric</th>
            <th className="w-10">Global</th>
            <th className="w-14">US &amp; Canada</th>
            <th className="w-14">Asia</th>
            <th className="w-14">Europe</th>
          </tr>
        </thead>
        <tbody className="text-left">
          <tr>
            <td>Time to Fill (days)</td>
            <td>68</td>
            <td>56</td>
            <td>92</td>
            <td>85</td>
          </tr>
          <tr>
            <td>Qualified Candidates per Hire</td>
            <td>39</td>
            <td>34</td>
            <td>45</td>
            <td>31</td>
          </tr>
          <tr>
            <td>Interviews per Hire</td>
            <td>12</td>
            <td>13</td>
            <td>11</td>
            <td>13</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
// const problems = [
//   {
//     title: `Avg cost - ${(avgAppCost / owner.avgRevenue).toFixed(
//       2
//     )} times yearly revenue `,
//     subtitle: (
//       <>
//         <div>
//           Avg {owner.name} revenue {owner.avgRevenue}
//         </div>
//         <div>Min project cost $15,000</div>
//         <div>Avg Project cost $171,450</div>
//         <sup>
//           {' '}
//           <a href="https://imaginovation.net/blog/how-much-does-it-cost-to-build-mobile-app/">
//             [1]
//           </a>
//         </sup>{' '}
//       </>
//     ),
//     //   logo: costImage,
//   },
//   {
//     title: 'Hire CTO, Techies, Devs, Designer',
//     subtitle: (
//       <>
//         Entry Tech salary $ 45,000 - Avg Tech salary $104,566
//         <sup>
//           {' '}
//           <a href="https://www.shrm.org/resourcesandtools/hr-topics/compensation/pages/us-tech-salaries-averaged-above-six-figures-in-2021.aspx">
//             [2]
//           </a>
//         </sup>
//       </>
//     ),
//     //   logo: talentImage,
//   },
//   {
//     title: 'Cyber security Audit / Compliances',
//     subtitle: (
//       <>
//         60% SMBs close in &lt;6 months due to data breach / cyber attack
//         <sup>
//           {' '}
//           <a href="https://cybersecurityventures.com/60-percent-of-small-companies-close-within-6-months-of-being-hacked/">
//             [3]
//           </a>
//         </sup>
//       </>
//     ),
//     //   logo: securityImage,
//   },
// ];
