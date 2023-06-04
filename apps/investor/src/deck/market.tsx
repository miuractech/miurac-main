import { Container, Grid, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import LeftTitle from './leftTitle';

const data = [
  { name: '2017', uv: 469 },
  { name: '2023', uv: 1816 },
  { name: '2027 (projected)', uv: 2393 },
];

const renderCustomBarLabel = ({ payload, x, y, width, height, value }: any) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill="#666"
      textAnchor="middle"
      dy={-6}
    >{`${value} million`}</text>
  );
};

export default function Market() {
  const mediaQuery = useMediaQuery('(min-width: 640px)');
  return (
    <Container className="py-20 text-center relative">
      <LeftTitle title="Why we scale?" />
      <div>
        <div>
          <div className="flex text-center gap-4 w-full justify-center items-end">
            <div>
              <div className="flex items-center justify-center text-center w-24 h-24 md:w-36 md:h-36 rounded-full bg-[#FFC8DD] text-black">
                <div>
                  <div className="text-xl md:text-5xl font-bold">6M</div>
                  <div>Apps/yr</div>
                </div>
              </div>
              <p>2022</p>
            </div>
            <div>
              <div className="flex items-center justify-center text-center  w-48 h-48 md:w-72 md:h-72 rounded-full bg-[#FFC8DD] text-black">
                <div>
                  <div className="text-3xl md:text-7xl font-bold">8M</div>
                  <div>Apps/yr</div>
                </div>
              </div>
              <p>2027 (Projection)</p>
            </div>
          </div>
          <Text align="center">Number of APPS Releases Globally</Text>
        </div>

        <div className="py-10">
          <BarChart
            width={mediaQuery ? 300 : 300}
            height={300}
            className="mx-auto"
            data={data}
          >
            <XAxis dataKey="name" />
            {/* <YAxis  label={'tessdvsdvsdvsdvt'}/> */}
            <Bar
              radius={8}
              dataKey="uv"
              barSize={mediaQuery ? 120 : 60}
              fill="#6CE5E8"
              label={renderCustomBarLabel}
            />
          </BarChart>
          <Text align="center" className="text-2xl">
            Revenue of Indian App dev companies
          </Text>
          <Text align="center">Revenue of Indian App dev companies</Text>
        </div>
      </div>
    </Container>
  );
}
