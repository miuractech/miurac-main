import { Container, Text, Timeline, Title } from '@mantine/core';
import LeftTitle from './leftTitle';
import { IconArrowRight, IconAtom, IconCoin, IconStairsUp } from '@tabler/icons';
import { useEffect, useState } from 'react';

export default function BM() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((t) => {
        if (t < 2) return t + 1;
        else return 0;
      });
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container className="py-20 text-center relative">
      <LeftTitle title="why we make profit?" />
      <Title order={2} className='my-8' >
      we make money on 3 steps of company growth 
      </Title>
      <Timeline
        classNames={{ itemBullet: 'bg-blue-600', item: 'pl-10' }}
        className="mx-auto max-w-xl"
        bulletSize={50}
        active={value}
        // color="blue"
        lineWidth={2}
      >
        {[
          {
            title: 'Entry Phase',
            top: 'App Project revenue',
            sub: 'revenue from selling Low-cost apps for SMB',
            icon: <IconStairsUp />,
          },
          {
            title: 'Ecosystem Phase',
            top: 'Recurring revenue',
            sub: 'Additional subscription apps (Tax Calc Apps, Payroll apps, etc) when business grows',
            icon: <IconAtom />,
          },
          {
            title: 'Growth Phase',
            top: 'Additional Services',
            sub: 'Data Services and Financing in Future',
            icon: <IconCoin />,
          },
        ].map(({ title, sub, top, icon }, index) => (
          <Timeline.Item
            bullet={icon}
            className="text-xl h-36"
            title={
              <span className={!(index - value > 0) ? 'text-blue-500 flex items-center' : ' flex items-center'}>
                {title}&ensp;<IconArrowRight />&ensp;{top}
              </span>
            }
          >

            <Text size={'md'} mt={4}>
              {sub}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Container>
  );
}
