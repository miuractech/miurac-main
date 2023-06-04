import { Container, Text, Timeline } from '@mantine/core';
import LeftTitle from './leftTitle';
import buynowImge from '../assets/vp/buynow.svg';
import paylaterImge from '../assets/vp/paylater.svg';
export default function Vp() {
  return (
    <Container className="py-20 text-center relative">
      <LeftTitle title="Why market loves us?" />
      <div className="flex flex-col lg:flex-row mx justify-between p-10">
        <div>
          <div className="text-xl font-bold">Build Now</div>
          <img className="lg:w-80 max-w-xs w-full mx-auto" src={buynowImge} alt="buy now" />
        </div>
        <div>
          <div className="text-xl font-bold">Pay Later</div>
          <img className="lg:w-80 max-w-xs w-full mx-auto" src={paylaterImge} alt="buy now" />
        </div>
      </div>
      <Timeline
        classNames={{ itemBullet: 'bg-blue-500' }}
        className="mx-auto max-w-xl"
        bulletSize={24}
        lineWidth={2}
      >
        {[
          'Provide Business Apps to SMBs without upfront payment',
          'SMBs witness the benefits of having a custom app immediately',
          'Businesses pay when they make money',
        ].map((value) => (
          <Timeline.Item className="text-xl h-20" title={value} />
        ))}
      </Timeline>
    </Container>
  );
}
