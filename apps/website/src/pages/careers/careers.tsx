import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
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
import { IconX } from '@tabler/icons';
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function Careers({}: Props) {
  const { upload } = useStorage({ app, updateFirestore: false });
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      resume: null,
      interest: '',
      message: '',
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
        resume: yup.mixed().required('File is required'),
        interest: yup.string().required('Select atleast one option'),
        message: yup.string(),
      })
    ),
  });
  const [loading, setLoading] = useState(false);
  return (
    <motion.div
      key={'contact'}
      id={'contact'}
      className="w-screen template-shadow roie h-screen"
      style={{
        background:
          'linear-gradient(90.54deg, #FBFBFD 0.06%, rgba(245, 245, 245, 0.97) 99.12%)',
        height: '100vh',
      }}
      initial={{ y: '100vh' }}
      animate={{ y: 0, zIndex: 10 }}
      exit={{ y: 0, zIndex: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className="h-16" />
      <Container>
        {/* <div className="w-full rounded-xl max-w-md m-auto bg-white p-5"> */}
        <Box
          sx={{ maxWidth: 400 }}
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
                const { name, email, interest, message, resume } = data;
                const url = (await upload({
                  //@ts-ignore
                  file: resume,
                  path: `uploads/${uuidv4()}/file`,
                  //@ts-ignore
                  fileName: resume.name,
                })) as string;
                await addDoc(collection(db, 'career'), {
                  name,
                  email,
                  interest,
                  message,
                  resume: url,
                });
                setLoading(false);
                showNotification({
                  id: `reg-err-${Math.random()}`,
                  autoClose: 5000,
                  title: 'Success',
                  message: 'Your Application has been successfully submitted.',
                  color: 'dark',
                  icon: <IconX />,
                  loading: false,
                });
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
            <TextInput
              className="my-2"
              required
              classNames={{
                input:"abeezee"
              }}
              label="Name"
              placeholder="enter your name"
              {...form.getInputProps('name')}
            />
            <TextInput
              className="my-2"
              label="Email"
              required
              classNames={{
                input:"abeezee"
              }}
              placeholder="email"
              {...form.getInputProps('email')}
            />
            <FileButton
              onChange={(file) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                if (file) form.setFieldValue('resume', file);
              }}
              accept="application/pdf"
            >
              {(props) => <Button {...props}>Upload Resume</Button>}
            </FileButton>
            {/* 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore */}
            {form.values.resume && form.values.resume.name}
            {/* 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore */}
            {form.errors.resume && <Text size={'xs'} color={'red'}>Upload Resume</Text>}

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
            <Button loading={loading} className="my-4" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Box>
        {/* </div> */}
      </Container>
    </motion.div>
  );
}
