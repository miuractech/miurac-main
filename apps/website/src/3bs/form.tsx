import { useEffect, useState } from 'react';
import * as yup from 'yup';
import {
  TextInput,
  Button,
  Textarea,
  MantineProvider,
  Text,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { db } from '../config/firebaseConfig';
import endImg from '../assets/img/3bs/end.png';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { showNotification } from '@mantine/notifications';
import { IconX } from '@tabler/icons';
import { defaultErrorMessage } from '../constants';
const formSchema = yup.object().shape({
  name: yup.string().required(),
  businessName: yup.string().required(),
  contact: yup
    .string()
    .required()
    .matches(/^[6-9]\d{9}$/, 'Please enter a valid Indian mobile number'),
  email: yup.string().email('Please enter a valid email address').required(),
  address1: yup.string().required(),
  address2: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  pincode: yup
    .string()
    .required()
    .matches(/^\d{6}$/, 'Please enter a valid Indian PIN code'),
  message: yup.string().required(),
});

export default function ThreeBForm() {
  const [loading, setloading] = useState(false);
  const form = useForm<formType>({
    initialValues: {
      name: '',
      businessName: '',
      contact: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      pincode: '',
      message: '',
    },
    validate: yupResolver(formSchema),
  });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <MantineProvider
      theme={{
        fontFamily: 'Poppins',
        defaultRadius: 4,
        headings: {
          fontFamily: 'Poppins',
          fontWeight: 500,
        },
        components: {
          Button: {
            classNames: { root: 'font-light' },
          },
        },
      }}
    >
      <div
        className=" min-h-screen py-6 pt-24"
        style={{
          background: `url('${endImg}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          fontFamily: 'Roboto',
          backgroundPosition: 'center',
        }}
      >
        <div className="p-10 bg-white max-w-md mx-auto rounded-md">
          <Text align={'center'} weight={600} size={28}>
            {' '}
            Business Registration Form{' '}
          </Text>
          <Text size={14} align="center">
            As a part of 3Bs program you get the business app for Free!
          </Text>
          <form
            onSubmit={form.onSubmit(async (val) => {
              try {
                setloading(true);
                await addDoc(collection(db, 'threebs'), {...val,timeStamp:serverTimestamp()});
                form.reset()
                setloading(false);
                showNotification({
                  id: `reg-err-${Math.random()}`,
                  autoClose: 5000,
                  title: 'Success',
                  message: 'Registered successfully',
                  color: 'green',
                  icon: <IconX />,
                  loading: false,
                });
              } catch (err) {
                showNotification({
                  id: `reg-err-${Math.random()}`,
                  autoClose: 5000,
                  title: 'Error',
                  message: defaultErrorMessage,
                  color: 'red',
                  icon: <IconX />,
                  loading: false,
                });
                setloading(false);
              }
            })}
          >
            <TextInput
              className="my-4"
              label="Name"
              name="name"
              {...form.getInputProps('name')}
            />
            <TextInput
              className="my-4"
              label="Business Name"
              name="businessName"
              {...form.getInputProps('businessName')}
            />
            <TextInput
              className="my-4"
              label="Phone"
              name="phone"
              {...form.getInputProps('contact')}
            />
            <TextInput
              className="my-4"
              label="Email"
              name="email"
              {...form.getInputProps('email')}
            />
            <TextInput
              className="my-4"
              label="Address line 1"
              name="address1"
              {...form.getInputProps('address1')}
            />
            <TextInput
              className="my-4"
              label="Address line 2"
              name="address2"
              {...form.getInputProps('address2')}
            />
            <TextInput
              className="my-4"
              label="City"
              name="city"
              {...form.getInputProps('city')}
            />
            <TextInput
              className="my-4"
              label="State"
              name="state"
              {...form.getInputProps('state')}
            />
            <TextInput
              className="my-4"
              label="Pincode"
              name="pincode"
              {...form.getInputProps('pincode')}
            />
            <Textarea
              className="my-4"
              label="What do you want to sell?"
              name="message"
              {...form.getInputProps('message')}
            />

            <Button
              size="lg"
              loading={loading}
              style={{ fontFamily: 'Roie', background: '#1a1a1a' }}
              type="submit"
            >
              <span className="styled-submit">Register</span>
            </Button>
          </form>
        </div>
      </div>
    </MantineProvider>
  );
}

interface formType {
  name: string;
  businessName: string;
  contact: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  pincode: string;
  message: string;
}
