import { Button, Container, Grid, MantineProvider, Text, Title } from '@mantine/core';
import program from '../assets/img/3bs/program.png';
import bg from '../assets/img/3bs/landing.png';
import sanjeev from '../assets/img/3bs/sanjeev.jpg';
import plan from '../assets/img/3bs/plan.png';
import endImg from '../assets/img/3bs/end.png';
import { IconMail, IconPhone, IconWorld } from '@tabler/icons';
import { Link } from 'react-router-dom';

export default function ThreeBS() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Bebas Neue',
        defaultRadius: 8,
        headings: {
          fontFamily: 'Bebas Neue',
          fontWeight: 500,
        },
        components: {
          Button: {
            classNames: { root: 'font-light' },
          },
        },
      }}
    >
      <Container size={'xl'} className="pt-16">
        <div  >
            <div className="bg-yellow-300 w-full p-2">
                <Text align='center'>

                registrations are open now &ensp;&ensp;
            <Link to="form">
                    <Button style={{fontFamily:'Roboto'}} className='font-medium' color='dark' >
                        Register for Free
                    </Button>
                  </Link>
                </Text>
            </div>
            <img className='w-full' src={bg} alt="miurac 3bs" />
        </div>
        <div className="p-4">
          <Grid>
            <Grid.Col xs={12} md={6}>
              <div>
                <img className="w-full" src={program} alt="program" />
              </div>
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <div className="flex items-center h-full  justify-center p-2 md:p-10">
                <div>
                  <Title className="text-7xl">3B's Program</Title>
                  <Title
                    weight={300}
                    style={{ fontFamily: 'Roboto' }}
                    className="text-4xl"
                  >
                    Business Beyond Boundaries
                  </Title>
                  <Text className="text-2xl" style={{ fontFamily: 'Roboto' }}>
                    3B's program intention is to{' '}
                    <b>
                      {' '}
                      Democratizing Digital Creation. As a part of this program,
                      we are giving Digital Apps and Websites for Free until
                      they make a profit with them.
                    </b>{' '}
                    We're saying "no" to the high costs and technical barriers
                    of app and website creation. We're saying "no" to the
                    monopoly of big tech giants. We're saying "yes" to fairness,
                    "yes" to accessibility, and "yes" to the universal right to
                    create.
                  </Text>
                  <Link to="form">
                    <Button style={{fontFamily:'Roboto'}} className='font-medium' color='dark' >
                        Register for Free
                    </Button>
                  </Link>
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </div>
        <div className="p-4 md:p-10">
          <Title align="center" className="text-7xl">
            Our Offerings
          </Title>
          <div>
            <Grid
              className="max-w-5xl mx-auto"
              style={{ fontFamily: 'Roboto' }}
            >
              {offerings.map((item) => (
                <Grid.Col xs={12} sm={6} md={4} key={item}>
                    <Link to="form">
                    <div className="p-6 bg-sky-100 border-sky-500 border-2 text-center rounded-xl border-solid">
                        {item}
                    </div>
                    </Link>
                </Grid.Col>
              ))}
            </Grid>
          </div>
        </div>
        <div className="p-4">
          <Grid>
            <Grid.Col xs={12} md={6}>
              <div>
                <img className="w-full" src={sanjeev} alt="program" />
              </div>
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <div
                style={{ fontFamily: 'Roboto' }}
                className="flex items-center h-full  justify-center p-2 md:p-10"
              >
                <div>
                  <Title className="text-3xl">
                    Our mission is to empower every business with equal access
                    to technology
                  </Title>
                  <Title
                    weight={300}
                    style={{ fontFamily: 'Roboto' }}
                    className="text-xl"
                  >
                    - Sanjeev
                  </Title>
                  <Text className="text-base" style={{ fontFamily: 'Roboto' }}>
                    Founder of Miurac
                  </Text>
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </div>
        <div className="p-4">
          <Grid>
            <Grid.Col xs={12} md={7}>
              <div
                style={{ fontFamily: 'Roboto' }}
                className="flex text-center items-center h-full  justify-center p-2 md:p-10"
              >
                <div>
                <Link to="form">
                  <div className="bg-yellow-300 p-16 ">
                    <Title className="text-5xl py-8">
                      Build your app for FREE
                    </Title>
                    <Title
                      weight={500}
                      style={{ fontFamily: 'Roboto' }}
                      className="text-2xl"
                    >
                      Pay ₹5 per sales
                    </Title>
                  </div>
                </Link>
                  <br />
                  OR
                  <br />
                  <br />
                  <Link to="form">

                  <div className="bg-[#5CE1E6] p-16 text-center">
                    <Title className="text-5xl py-8">
                      Build your app for FREE
                    </Title>
                    <Title
                      weight={500}
                      style={{ fontFamily: 'Roboto' }}
                      className="text-2xl"
                    >
                      Pay full when you make sales
                    </Title>
                  </div>
                  </Link>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col xs={12} md={5}>
              <div>
                <img className="w-full" src={plan} alt="program" />
              </div>
            </Grid.Col>
          </Grid>
        </div>
        <div
          className="flex items-center min-h-screen p-5"
          style={{
            background: `url('${endImg}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            fontFamily: 'Roboto',
            backgroundPosition:'center'
          }}
        >
          <div className="bg-[#D4CAC0] p-4 max-w-sm rounded-3xl">
            <Title style={{ fontFamily: 'Roboto' }} className="p-4">
              Connect, Collaborate, & Let's Conquer together
            </Title>
            <div className='pl-8' >
              <div className="flex items-center  gap-3 w-full">
                <IconPhone size={48} strokeWidth={1} />{' '}
                <a href="tel:+918336801389">
                  {' '}
                  <p className='text-xl' >+91-8336801389</p>
                </a>
              </div>
              <br />
              <div className="flex items-center   gap-3 w-full">
                <IconPhone size={48} strokeWidth={1} />{' '}
                <a href="tel:+916363668966">
                  {' '}
                  <p>+91-6363668966</p>
                </a>
              </div>
              <br />
              <div className="flex items-center  gap-3 w-full">
                <IconWorld size={48} strokeWidth={1} />{' '}
                <a href="https://www.miurac.com">
                  {' '}
                  <p>www.miurac.com</p>
                </a>
              </div>
              <br />
              <div className="flex items-center   gap-3 w-full">
                <IconMail size={48} strokeWidth={1} />{' '}
                <a href="mailto:info@miurac.com">
                  {' '}
                  <p>info@miurac.com</p>
                </a>
              </div>
              <br />
              <br />
              <Link to="form">
                    <Button style={{fontFamily:'Roboto'}} className='font-medium' color='dark' >
                        Register for Free
                    </Button>
                  </Link>
            </div>
          </div>
        </div>
      </Container>
    </MantineProvider>
  );
}

const offerings = [
  'E-commerce Apps',
  'Delivery Apps',
  'Website',
  'Appointment Booking Apps',
  'PropTech Apps',
  'Service Booking Apps',
  'Packing and Moving Apps',
  'Hotel Booking Apps',
  'And many more to come',
];
