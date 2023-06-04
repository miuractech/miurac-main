import { Container, Text } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import LeftTitle from './leftTitle';

export default function Finance() {
  const { width } = useViewportSize();
  const mediaQuery = useMediaQuery('(min-width: 640px)');
  return (
    <Container className="py-20 text-center relative">
      <LeftTitle title="Why we are a good investment?" />
      <div className="w-full max-w-[750px] mx-auto">
        <Text>Profit over years</Text>
        <LineChart
          width={Math.min(width * 0.9, 750)}
          height={mediaQuery ? 500 : 250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {/* <CartesianGrid  /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="others" stroke="#8884d8" />
          <Line type="monotone" dataKey="miurac" stroke="#82ca9d" />
          {/* <Line type="natural" dataKey="axis" stroke="#fff" /> */}
        </LineChart>
      </div>
    </Container>
  );
}

const data = [
  {
    name: '9 months',
    others: 20,
    miurac: 0,
    // axis:0,
  },
  {
    name: '2 years',
    others: 25,
    miurac: -15,
    // axis:0,
  },
  {
    name: '3 years',
    others: 30,
    miurac: -20,
    // axis:0,
  },
  {
    name: '4 years',
    others: 40,
    miurac: -25,
    // axis:0,
  },
  {
    name: '5 years',
    others: 45,
    miurac: 20,
    // axis:0,
  },
  {
    name: '6 years',
    others: 55,
    miurac: 150,
    // axis:0,
  },
  {
    name: '',
    others: 65,
    miurac: 320,
    // axis:0,
  },
];
