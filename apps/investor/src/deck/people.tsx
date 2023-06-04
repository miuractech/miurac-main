import { Container, Text, Title } from '@mantine/core';
import sanjeev from '../assets/people/sanjeev.jpg';
import giri from '../assets/people/giri.jpg';
import kiran from '../assets/people/kiran.jpg';
import raj from '../assets/people/raj.jpg';
import venu from '../assets/people/venu.jpg';
import LeftTitle from './leftTitle';

export default function People() {
  return (
    <Container className="py-20 text-center relative">
      <LeftTitle title="who are we?" />
      <div className="flex justify-center flex-wrap">
        {people.map(({ image, designation, name }) => (
          <div className="w-96 p-4">
            <img
              className="w-48 h-48 rounded-full object-cover"
              src={image}
              alt=""
            />
            <Title order={4}>{name}</Title>
            <Text className="font-light">{designation}</Text>
          </div>
        ))}
      </div>
    </Container>
  );
}

const people = [
  {
    name: 'Sanjeev V',
    designation: (
      <>
        Founder of Miurac | CEO&CTO -IIT(KGP), Inventor of MIDL(Patent under
        progress) 6+years of experience with startups and tec
      </>
    ),
    image: sanjeev,
  },
  {
    name: 'Giri Prathap',
    designation: (
      <>CDO & COO 4+ years of multidisciplinary experience with startups</>
    ),
    image: giri,
  },
  {
    name: 'Kiran DN',
    designation: <>4+years of experience as a Fullstack developer</>,
    image: kiran,
  },
  {
    name: 'Rajamohan',
    designation: (
      <>Former VP, IL&FS, 20+years experience in Project management</>
    ),
    image: raj,
  },
  {
    name: 'Venu prasad',
    designation: <>Devops, 20+ years experience in tech</>,
    image: venu,
  },
];
