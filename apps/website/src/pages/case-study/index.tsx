import { Button, Container, Grid, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import mockup from '../../assets/img/edufeat-case-mockup.jpg';

export default function CaseStudy() {
  return (
    <Container size={'xl'} className="manrope pt-16">
      <Title className="my-8" align="center" order={2}>
        Case Study
      </Title>
      <div
        style={{
          background: 'linear-gradient(135deg, #2694B0 0%, #6663FF 100%)',
        }}
        className="rounded-xl md:rounded-[30px] p-8 md:p-16 text-white"
      >
        <Grid>
          <Grid.Col md={7} xs={12}>
            <div className="text-3xl font-extrabold pb-10 text-center md:text-left">
              Helping thousands of International Students achieve their academic
              goals through personalized tutoring
            </div>
            <div className="text-justify w-full md:w-3/4">
              Millions of students worldwide don’t have enough guidance apart
              from their classroom learning while pursuing higher education.
              This project aims to provide affordable and personalized guidance
              to help those students through tech.
            </div>
            <br />
            <Link to={'/case-study/edufeat'} >
                <Button style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                See case study
                </Button>
            </Link>
          </Grid.Col>
          <Grid.Col md={5} xs={12}>
            <EdufeatMockup className="w-full" />
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  );
}

export function EdufeatMockup({
  style,
  className,
}: {
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <img
      className={className}
      style={style}
      src={mockup}
      alt="edufeat-mockup"
    />
  );
}
