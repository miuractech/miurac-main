import { Container } from '@mantine/core';
import LeftTitle from './leftTitle';
import othersImage from '../assets/unique/others.png';
import miuracImage from '../assets/unique/miurac.png';
import { Perk } from './solution';
export default function Competition() {
  return (
    <Container className="py-20 text-center relative">
      <LeftTitle title="why we make profit?" />
      <div className="flex flex-col lg:flex-row mx justify-between p-10">
        <div>
          <div className="text-xl font-bold">Others</div>
          <div className="h-72">
            <img
              className="lg:w-80 max-w-xs w-full mx-auto"
              src={othersImage}
              alt="buy now"
            />
          </div>
          <div className="w-64 sm:w-48 lg:w-1/2 max-w-2xl lg:px-24 my-10 mx-auto">
            {humanDisadvantage.map((item) => (
              <Perk perk={item} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Miurac</div>
          <div className="h-72">
            <img
              className="lg:w-48 max-w-md w-full mx-auto"
              src={miuracImage}
              alt="buy now"
            />
          </div>
          <div className="w-64 sm:w-96 lg:w-1/2 max-w-2xl lg:px-24 my-10 mx-auto">
            {miuracAdvantage.map((item) => (
              <Perk perk={item} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

const humanDisadvantage = [
  'Humans are costly to upskill',
  'Require more humans to scale',
];

const miuracAdvantage = [
  'Humans are costly to upskill',
  'Require more humans to scale',
];
