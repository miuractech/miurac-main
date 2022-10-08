import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Chip,
  Container,
  FileButton,
  Select,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import * as yup from 'yup';
import { app, db } from '../../config/firebaseConfig';
import useStorage from 'libs/miurac-files/src/lib/hooks/useStorage';
import { uuidv4 } from '@firebase/util';
import { addDoc, collection } from 'firebase/firestore';
import { showNotification } from '@mantine/notifications';
import { IconCalendar, IconX } from '@tabler/icons';
import { DatePicker } from '@mantine/dates';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
type Tagged<A, T> = A & { __tag?: T };
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function Careers({}: Props) {
  const { upload } = useStorage({ app, updateFirestore: false });
  const form = useForm<{
    phone: Tagged<string, "E164Number"> | undefined;
    name: string;
    email: string;
    profession: 'employee' | 'student' | 'others' | '';
    fatherName: string;
    // resume: File | null;
    interest: string;
    message: string;
    maritalStatus: string | null;
  }>({
    initialValues: {
      phone:"",
      fatherName: '',
      name: '',
      email: '',
      profession: '',
      // resume: null,
      interest: '',
      message: '',
      maritalStatus: '',
    },
    validate: yupResolver(
      yup.object({
        name: yup
          .string()
          .min(3, 'Enter a valid name')
          .required('Enter a valid name'),
        email: yup
          .string()
          .email('Enter a valid Email')
          .required('Enter a valid Email'),
        // resume: yup.mixed().required('File is required'),
        interest: yup.string().required('Select atleast one option'),
        fatherName: yup
          .string()
          .min(3, 'Enter a valid name')
          .required('Select atleast one option'),
        profession: yup.string().min(2).required('Select atleast one option'),
        maritalStatus: yup.string().required('Select atleast one option'),
        message: yup.string(),
      })
    ),
  });
  const [loading, setLoading] = useState(false);

  return (
    <div
      key={'contact'}
      id={'contact'}
      className="w-full template-shadow roie h-screen"
      style={{
        background:
          'linear-gradient(90.54deg, #FBFBFD 0.06%, rgba(245, 245, 245, 0.97) 99.12%)',
      }}
    >
      <div className="h-16" />
      <Container>
        {/* <div className="w-full rounded-xl max-w-md m-auto bg-white p-5"> */}
        <Box
          // sx={{ maxWidth: 400 }}
          mx="auto"
          className="rounded-xl bg-white p-4"
        >
          <Title align="center" className="text-gray-700">
            Join the Miurac Family
          </Title>
          <form
            onSubmit={form.onSubmit(async (data) => {
              setLoading(true);
              try {
                console.log(data);

                // const { name, email, interest, message } = data;
                // const url = (await upload({
                //   //@ts-ignore
                //   file: resume,
                //   path: `uploads/${uuidv4()}/file`,
                //   //@ts-ignore
                //   fileName: resume.name,
                // })) as string;
                //   await addDoc(collection(db, 'career'), {
                //     name,
                //     email,
                //     interest,
                //     message,
                //     resume: url,
                //   });
                setLoading(false);
                //   showNotification({
                //     id: `reg-err-${Math.random()}`,
                //     autoClose: 5000,
                //     title: 'Success',
                //     message: 'Your Application has been successfully submitted.',
                //     color: 'dark',
                //     icon: <IconX />,
                //     loading: false,
                //   });
              } catch (error) {
                setLoading(false);
                showNotification({
                  id: `reg-err-${Math.random()}`,
                  autoClose: 5000,
                  title: 'Failed',
                  message: 'Unkonwn error happened! try again!!',
                  color: 'red',
                  icon: <IconX />,
                  loading: false,
                });
              }
            })}
          >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-3">
              <TextInput
                className="my-2"
                required
                name="name"
                classNames={{
                  input: 'abeezee',
                }}
                label="Full Name"
                placeholder="enter your name"
                {...form.getInputProps('name')}
              />
              <TextInput
                className="my-2"
                required
                name="father name"
                classNames={{
                  input: 'abeezee',
                }}
                label="Father's Name"
                placeholder="enter your father name"
                {...form.getInputProps('fatherName')}
              />

              <TextInput
                className="my-2"
                label="Email"
                name="email"
                required
                classNames={{
                  input: 'abeezee',
                }}
                placeholder="email"
                {...form.getInputProps('email')}
              />

              <DatePicker
                placeholder="DOB"
                className="my-2"
                name="date of birth"
                label="Date of Birth"
                icon={<IconCalendar size={16} />}
                withAsterisk
                {...form.getInputProps('DOB')}
              />
              <div className="flex">
                <PhoneInput
                  placeholder="Enter phone number"
                  value={form.values.phone}
                  onChange={e=>form.setFieldValue("phone",e)}
                />
              </div>
              <TextInput
                className="my-2"
                label="Address 1"
                name="address1"
                required
                classNames={{
                  input: 'abeezee',
                }}
                placeholder="House Number, Apartment, etc"
                {...form.getInputProps('address1')}
              />
              <div>
                <div className="flex items-center justify-start h-16 my-2 pt-3">
                  <Text className="w-14 pl-2">I am a</Text>
                  <Chip.Group
                    className="my-2"
                    multiple={false}
                    position="left"
                    value={form.values.profession}
                    onChange={(v: any) => form.setFieldValue('profession', v)}
                  >
                    <Chip
                      value={'student'}
                      classNames={{
                        input: 'abeezee',
                      }}
                    >
                      Student
                    </Chip>
                    <Chip
                      value={'employee'}
                      classNames={{
                        input: 'abeezee',
                      }}
                    >
                      Employee
                    </Chip>
                    <Chip
                      value={'other'}
                      classNames={{
                        input: 'abeezee',
                      }}
                    >
                      Others
                    </Chip>
                  </Chip.Group>
                </div>
                <Text
                  className="-mt-7 ml-2 w-full abeezee"
                  size={12}
                  weight={700}
                  color={'red'}
                >
                  {form.errors['profession']}
                </Text>
              </div>
              <Select
                label="Marital Status"
                my={8}
                data={[
                  { value: 'married', label: 'Married' },
                  { value: 'unmarried', label: 'Unmarried' },
                ]}
                value={form.values.maritalStatus}
                onChange={(e) => form.setFieldValue('maritalStatus', e)}
                //@ts-ignore
                error={form.errors.maritalStatus}
              />
              {/* <TextInput
              className="my-2"
              label=""
              required
              classNames={{
                input: 'abeezee',
              }}
              placeholder="email"
              {...form.getInputProps('email')}
            /> */}
              <Select
                label="Your interest"
                className="my-2"
                placeholder="Your Interest"
                data={[
                  { value: 'dev', label: 'Developement' },
                  { value: 'design', label: 'Design' },
                  { value: 'management', label: 'Management' },
                  { value: 'other', label: 'Other' },
                ]}
                value={form.values.interest}
                onChange={(v) => {
                  if (v) form.setFieldValue('interest', v);
                }}
                error={form.errors['interest']}
              />
              <Textarea
                className="my-2"
                label="Message"
                placeholder="Message"
                {...form.getInputProps('message')}
              />
            </div>
            <Button loading={loading} className="my-4" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Box>
        {/* </div> */}
      </Container>
    </div>
  );
}
