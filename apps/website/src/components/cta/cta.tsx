import { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './styles.css';
import {
  Burger,
  Button,
  Chip,
  CloseButton,
  Modal,
  TextInput,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { IconChevronsRight } from '@tabler/icons';
import { useClickOutside, useMediaQuery } from '@mantine/hooks';
import { useForm, yupResolver } from '@mantine/form';
import { motion } from 'framer-motion';
import * as yup from 'yup';
import React from 'react';
const Square = ({ toggleFullScreen }: { toggleFullScreen: () => void }) => {
  return (
    <Flipped flipId="square">
      <div
        className="bg-transparent rounded-lg text-center m-auto md:m-0 w-[181px] h-16 flex items-center"
        onClick={toggleFullScreen}
      >
        <Button
          size="lg"
          radius={'xl'}
          className="font-light"
          rightIcon={<IconChevronsRight />}
        >
          Let's do this
        </Button>
      </div>
    </Flipped>
  );
};

const FullScreenSquare = ({
  toggleFullScreen,
}: {
  toggleFullScreen: () => void;
}) => {
  const ref = useClickOutside(() => toggleFullScreen());

  return (
    <Flipped flipId="square" stagger={true}>
      <div
        ref={ref}
        className="full-screen-square md:rounded-[40px] rounded-b-[40px] md:max-w-[1080px]"
      >
        <CloseButton
          size={'xl'}
          onClick={toggleFullScreen}
          className="right-4 top-4 absolute"
          variant="transparent"
          radius={'xl'}
        />
        <CTAForm />
      </div>
    </Flipped>
  );
};

export const CTA = ({
  fullScreen,
  setFullScreen,
}: {
  fullScreen: boolean;
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toggleFullScreen = () => setFullScreen((prevState) => !prevState);
  const matches = useMediaQuery('(min-width: 900px)');
  const id = React.useId()
  return (
    <div id={React.useId()} className={`h-12`}>
      {matches ? (
        <Flipper flipKey={fullScreen} spring="veryGentle">
          {fullScreen ? (
            <FullScreenSquare toggleFullScreen={toggleFullScreen} />
          ) : (
            <Square toggleFullScreen={toggleFullScreen} />
          )}
        </Flipper>
      ) : (
        <>
          <Button
          size="lg"
          radius={'xl'}
          className="font-light"
          rightIcon={<IconChevronsRight />}
          onClick={toggleFullScreen}
        >
          Let's do this
        </Button>
          <Modal
            opened={fullScreen}
            size="100%"
            transition={'slide-down'}
            transitionTimingFunction="linear"
            onClose={toggleFullScreen}
            // className="-mt-12 "
            withCloseButton={false}
            classNames={{
              modal: 'rounded-b-3xl rounded-t-none bg-[#1E1E20]',
              inner: 'p-0 w-full ',
              title: 'text-white text-xl',
              close: 'right-4 top-0',
            }}
            // styles={{inner:{padding:0, width:"100%",}, title:{color:"white"}}}
            overlayColor="#88888888"
            className="text-white roie"
            withFocusReturn
            title="MIURAC"
          >
            <div className="text-[#9CA5B1] roie font-normal rounded-t-none relative">
              <Burger
                className="absolute right-0 -top-12"
                size={'sm'}
                color="white"
                opened={fullScreen}
                onClick={toggleFullScreen}
              />
              <CTAForm />
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};

const CTAForm = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },

    validate: yupResolver(
      yup.object({
        name: yup.string().required(),
        email: yup.string().email(),
        phone: yup
          .string()
          .matches(/^[6-9]\d{9}$/, {
            message: 'Please enter valid number.',
            excludeEmptyString: false,
          }),
        service: yup.string().required(),
      })
    ),
  });
  return (
    <div className=" md:px-24 md:text-2xl md:pt-14 text-sm  text-center leading-[48px] md:leading-[72px] m-auto w-[312px] md:w-4/5">
      <Title
        align="center"
        className="md:text-3xl text-white text-2xl pb-4 md:pb-8"
      >
        Connect with us
      </Title>
      <div className="text-justify roie ">
        Hello, my name is{' '}
        <TextInput
          className="border-[#9DAABE] inline-block border-solid border-b-2 border-t-0 border-r-0 border-l-0 w-44 md:w-56"
          classNames={{
            input: 'text-white abeezee text-lg leading-tight input-box',
          }}
          placeholder="Your name"
          variant="unstyled"
          {...form.getInputProps('name')}
        />
        and I want to discuss a potential project. You can email me at{' '}
        <TextInput
          className="border-[#9DAABE] inline-block border-solid border-b-2 border-t-0 border-r-0 border-l-0 w-48 md:w-56"
          placeholder="Email"
          classNames={{
            input: 'text-white abeezee text-lg leading-tight input-box',
          }}
          variant="unstyled"
          {...form.getInputProps('email')}
        />
        or reach me on{' '}
        <TextInput
          className="border-[#9DAABE] inline-block border-solid border-b-2 border-t-0 border-r-0 border-l-0 w-[202px] md:w-56 md:mb-0 mb-4"
          placeholder="Phone"
          classNames={{
            input: 'text-white abeezee text-lg leading-tight input-box',
          }}
          variant="unstyled"
          {...form.getInputProps('phone')}
        />
        I am interested in{' '}
        <Chip
          value="Branding"
          classNames={{
            root: `${
              form.values.service === 'Branding' ? 'bg-[#FBFBFD]' : 'bg-green'
            }`,
          }}
          className="inline-block m-1"
        >
          Branding
        </Chip>
        <Chip
          value="2"
          classNames={{ input: 'bg-[#FBFBFD]' }}
          className="inline-block m-1"
        >
          Web apps
        </Chip>
        <Chip
          value="3"
          classNames={{ input: 'bg-[#FBFBFD]' }}
          className="inline-block m-1"
        >
          Internal tools
        </Chip>
        <Chip
          value="3"
          classNames={{ input: 'bg-[#FBFBFD]' }}
          className="inline-block m-1"
        >
          Others
        </Chip>
        {/* <Chip value="3" classNames={{input:"bg-[#FBFBFD]"}} className="inline-block m-1">
                    At a time
                  </Chip> */}
        {/* <Chip.Group position="center" className="inline-block py-3" onChange={(v)=>console.log(v)} >
                </Chip.Group> */}
        {/* <span className='inline-block' >
              </span> */}
        . A little brief about my project :
        <TextInput
          className="border-gray-400 inline-block border-solid border-b-2 border-t-0 border-r-0 border-l-0 w-full"
          placeholder="explain your project"
          classNames={{
            input: 'text-white abeezee text-lg leading-tight input-box',
          }}
          variant="unstyled"
          {...form.getInputProps('message')}
        />
      </div>
      <br />
      <Button
        size="lg"
        className="font-light bg-gray-200 text-black rounded-full hover:bg-white"
        rightIcon={<IconChevronsRight />}
      >
        Let's do this
      </Button>
    </div>
  );
};
