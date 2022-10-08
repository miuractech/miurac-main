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
import { IconChevronsRight, IconX } from '@tabler/icons';
import { useClickOutside, useMediaQuery } from '@mantine/hooks';
import { useForm, yupResolver } from '@mantine/form';
import { motion } from 'framer-motion';
import * as yup from 'yup';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../app/store';
import { closeCTA, openCTA } from './ctaRedux';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { showNotification } from '@mantine/notifications';
const Square = ({
  toggleFullScreen,
  style,
}: {
  toggleFullScreen: () => void;
  style?: React.CSSProperties;
}) => {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <Flipped flipId="square">
      <div
        className={`bg-transparent scroll rounded-lg text-center m-auto md:m-0 ${
          matches ? 'w-[181px]' : 'w-min'
        } h-16 flex items-center`}
        onClick={toggleFullScreen}
      >
        <Button
          size="lg"
          radius={'xl'}
          className="font-light"
          rightIcon={matches && <IconChevronsRight />}
          style={style}
        >
          {matches ? "Let's do this" : <IconChevronsRight />}
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
        // style={{maxHeight:"calc(100vh - 60px)", overflowY:"auto"}}
        className="full-screen-square py-5 scroll pt-8 md:rounded-[30px] rounded-b-[40px] md:max-w-[1080px] overflow-y-auto"
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
  style,
  id,
}: {
  style?: React.CSSProperties;
  id: string;
}) => {
  const fullScreen = useSelector((state: RootState) => state.toogleCta);
  const dispatch = useAppDispatch();
  const matches = useMediaQuery('(min-width: 900px)');
  return (
    <div id={React.useId()}>
      {/* {matches ? ( */}
      {/* <Flipper flipKey={fullScreen === id} spring="veryGentle">
        {fullScreen === id ? (
          <FullScreenSquare toggleFullScreen={() => dispatch(closeCTA())} />
        ) : (
          <Square
            style={style}
            toggleFullScreen={() => dispatch(openCTA(id))}
          />
        )}
      </Flipper> */}
       {/* ) : ( */}
        <Button
          size="lg" 
          radius={'xl'}
          className="font-light"

          onClick={() => dispatch(openCTA(id))}
          style={style}
        >
         {matches&&"Let's Go"} <IconChevronsRight />
        </Button>
          <Modal
            opened={Boolean(fullScreen)}
            size="100%"
            transition={'slide-down'}
            transitionTimingFunction="ease-in-out"
            transitionDuration={600}
            onClose={() => dispatch(closeCTA())}
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
                opened={Boolean(fullScreen)}
                onClick={() => dispatch(closeCTA())}
              />
              <CTAForm />
            </div>
          </Modal>
      {/* )} */}
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
        name: yup.string().min(5).required(),
        email: yup.string().email(),
        phone: yup.string().matches(/^[6-9]\d{9}$/, {
          message: 'Please enter valid number.',
          excludeEmptyString: false,
        }),
        service: yup.string().required(),
      })
    ),
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch()
  return (
    <form
      className="scroll md:px-24 md:text-2xl text-sm text-center leading-[48px] md:leading-[72px] m-auto w-[312px] md:w-4/5"
      onSubmit={form.onSubmit(async(data) => {
        try {
          setLoading(true)
          await addDoc(collection(db,"enquiry"),data)
          dispatch(closeCTA())
          showNotification({
            id: `reg-err-${Math.random()}`,
            autoClose: 5000,
            title: 'Success',
            message: 'successfully submitted.',
            color: 'dark',
            icon: <IconX />,
            loading: false,
          });
        } catch (error) {
          setLoading(false)
          showNotification({
            id: `reg-err-${Math.random()}`,
            autoClose: 5000,
            title: 'Failed',
            message: 'Unexpected error! try again.',
            color: 'red',
            icon: <IconX />,
            loading: false,
          });
        }
      })}
    >
      <Title
        align="center"
        className="md:text-3xl text-white text-2xl pb-4 md:pb-8"
      >
        Connect with us
      </Title>
      <div className="text-justify roie">
        <span>Hello, my name is </span>
        <TextInput
          className="border-[#9DAABE] inline-block border-solid border-b-2 border-t-0 border-r-0 border-l-0 w-44 md:w-56"
          classNames={{
            input: 'text-white abeezee text-lg leading-tight input-box',
            error: '-mb-4',
          }}
          required
          placeholder="Your name"
          variant="unstyled"
          {...form.getInputProps('name')}
          error={form.errors['name']}
        />
        and I want to discuss a potential project. You can email me at{' '}
        <TextInput
          className="border-[#9DAABE] inline-block border-solid border-b-2 border-t-0 border-r-0 border-l-0 w-48 md:w-[410px]"
          placeholder="Email"
          classNames={{
            input: 'text-white abeezee text-lg leading-tight input-box',
            error: '-mb-4',
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
            error: '-mb-4',
          }}
          variant="unstyled"
          {...form.getInputProps('phone')}
        />
        I am a{' '}
        <Chip
          value="startup"
          checked={form.values.service === 'startup'}
          onChange={(c) => {
            if (c) form.setFieldValue('service', 'startup');
          }}
          classNames={{
            input: 'bg-[#FBFBFD]',
          }}
          className="inline-block m-1"
        >
          Start Up
        </Chip>
        <Chip
          value="business"
          checked={form.values.service === 'business'}
          onChange={(c) => {
            if (c) form.setFieldValue('service', 'business');
          }}
          classNames={{ input: 'bg-[#FBFBFD]' }}
          className="inline-block m-1"
        >
          Business
        </Chip>
        <Chip
          value="investor"
          checked={form.values.service === 'investor'}
          onChange={(c) => {
            if (c) form.setFieldValue('service', 'investor');
          }}
          classNames={{ input: 'bg-[#FBFBFD]' }}
          className="inline-block m-1"
        >
          Investor
        </Chip>
        <Chip
          value="other"
          checked={form.values.service === 'other'}
          onChange={(c) => {
            if (c) form.setFieldValue('service', 'other');
          }}
          classNames={{ input: 'bg-[#FBFBFD]' }}
          className="inline-block m-1"
        >
          Others
        </Chip>
        . A small message note about my requirement :
        <TextInput
          className="border-gray-400 inline-block border-solid border-b-2 border-t-0 border-r-0 border-l-0 w-full"
          placeholder="message"
          classNames={{
            input: 'text-white abeezee text-lg leading-tight input-box',
            error: '-mb-4',
          }}
          variant="unstyled"
          {...form.getInputProps('message')}
        />
      </div>
      <Button
        size="lg"
        loading={loading}
        className="font-light bg-gray-200 text-black rounded-full hover:bg-white my-3"
        rightIcon={<IconChevronsRight />}
        type="submit"
      >
        Let's do this
      </Button>
    </form>
  );
};
