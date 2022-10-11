import React, { useState } from 'react';
import dayjs from 'dayjs';
import {
  ActionIcon,
  Box,
  Button,
  Chip,
  Container,
  Select,
  Table,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import * as yup from 'yup';
import { db } from '../../config/firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { showNotification } from '@mantine/notifications';
import { IconCalendar, IconPlus, IconX } from '@tabler/icons';
import { DatePicker } from '@mantine/dates';
import { useNavigate } from 'react-router-dom';
import { applicantType } from '@miurac/resources';
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

type applicantTypeFull = applicantType & {DOB: string;}
// eslint-disable-next-line no-empty-pattern
export default function Careers({}: Props) {
  const navigate = useNavigate();
  const form = useForm<applicantTypeFull>({
    initialValues: {
      name: '',
      fatherName: '',
      email: '',
      DOB: '',
      phone: '',
      profession: '',
      education: [],
      address1: '',
      address2: '',
      pincode: '',
      city: '',
      state: '',
      country: '',
      interest: '',
      maritalStatus: '',
      question1: '',
      question2: '',
      message:""
    },
    validate: yupResolver(
      yup.object({
        name: yup
          .string()
          .min(3, 'Enter a valid name')
          .required('Enter a valid name'),
        education: yup.array(
          yup.object().shape({
            from: yup
              .number()
              .typeError('Year must be a number')
              .min(1950, 'You want me to believe this?')
              .max(new Date().getFullYear(), 'enter a valid year')
              .required('year is required'),
            to: yup
              .number()
              .typeError('Year must be a number')
              .min(1950, 'You want me to believe this?')
              .max(new Date().getFullYear() + 10, 'enter a valid year')
              .required('year is required'),
            title: yup.string().required('college/school is required'),
            cgpa: yup
              .number()
              .typeError('Score must be a number')
              .min(0, 'you scored negative mark?')
              .max(100, 'Were you using Apsara pencil?')
              .required('Please provide your Mark in %.'),
          })
        ).min(1,"Please provide your schoolings info").required("Please provide your schoolings info"),
        email: yup
          .string()
          .email('Enter a valid Email')
          .required('Enter a valid Email'),
        // resume: yup.mixed().required('File is required'),
        interest: yup.string().required('Select atleast one option'),
        question1: yup.string().required('Answer this compulsory question'),
        question2: yup.string().required('Answer this compulsory question'),
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
      className="w-full template-shadow roie"
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
                // console.log(new Date(data.DOB).getTime());

                await addDoc(collection(db, 'career'), {
                  ...data,
                  time: serverTimestamp(),
                  DOB: new Date(data.DOB).getTime(),
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
                form.reset()
                setTimeout(() => {
                  navigate("/")
                }, 5000);
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
                maxDate={dayjs(
                  new Date().setFullYear(new Date().getFullYear() - 13)
                ).toDate()}
                icon={<IconCalendar size={16} />}
                withAsterisk
                {...form.getInputProps('DOB')}
              />
              {/* <div className="flex"> */}
              {/* <PhoneInput
                className='h-16'
                  placeholder="Enter phone number"
                  value={form.values.phone}
                  onChange={e=>form.setFieldValue("phone",e)}
                /> */}
              {/* </div> */}
              <TextInput
                className="my-2"
                label="Phone"
                name="phone"
                description="include country code if outside India."
                required
                classNames={{
                  input: 'abeezee',
                  description: 'abeezee',
                }}
                placeholder="(+91)1234567890"
                {...form.getInputProps('phone')}
              />

              <div>
                <div className="flex items-center justify-start h-28 md:h-16 my-2 md:pt-3">
                  <Text className="w-24 pl-2">I am a</Text>
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
              <TextInput
                className="my-2"
                label="Address 1"
                required
                classNames={{
                  input: 'abeezee',
                }}
                placeholder="Door Number, Apartment, etc"
                name="address1"
                {...form.getInputProps('address1')}
              />
              <TextInput
                className="my-2"
                label="Address 2"
                name="address2"
                required
                classNames={{
                  input: 'abeezee',
                }}
                placeholder="Street, Area, etc"
                {...form.getInputProps('address2')}
              />
              <TextInput
                className="my-2"
                label="Pincode"
                name="pincode"
                required
                classNames={{
                  input: 'abeezee',
                }}
                placeholder="Pincode"
                {...form.getInputProps('pincode')}
              />
              <TextInput
                className="my-2"
                label="City"
                name="city"
                required
                classNames={{
                  input: 'abeezee',
                }}
                placeholder="city"
                {...form.getInputProps('city')}
              />
              <TextInput
                className="my-2"
                label="State/Province"
                name="state"
                required
                classNames={{
                  input: 'abeezee',
                }}
                placeholder="state/province"
                {...form.getInputProps('state')}
              />
              <TextInput
                className="my-2"
                label="Country"
                name="country"
                required
                classNames={{
                  input: 'abeezee',
                }}
                placeholder="country"
                {...form.getInputProps('country')}
              />
              <Select
                label="Marital Status"
                my={8}
                data={[
                  { value: 'married', label: 'Married' },
                  { value: 'unmarried', label: 'Unmarried' },
                ]}
                value={form.values.maritalStatus}
                onChange={(e) => form.setFieldValue('maritalStatus', e)}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                error={form.errors.maritalStatus}
              />
              <div />
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
              <div />
            </div>
            <div>
              <div className="flex gap-3">
                <Text size={14}>
                  Educational History <span className="text-red-600">*</span>
                </Text>
              </div>
              <div className="w-full overflow-y-auto">
                <Table>
                  <thead>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>College/school</th>
                      <th>CGPA%</th>
                      <th>clear</th>
                    </tr>
                  </thead>
                  <tbody>
                    {form.values.education.map((element, index) => (
                      <tr key={index}>
                        <td>
                          <TextInput
                            placeholder="from year"
                            {...form.getInputProps(`education.${index}.from`)}
                          />
                        </td>
                        <td>
                          <TextInput
                            {...form.getInputProps(`education.${index}.to`)}
                            placeholder="to year"
                          />
                        </td>
                        <td>
                          <TextInput
                            placeholder="College/school"
                            {...form.getInputProps(`education.${index}.title`)}
                          />
                        </td>
                        <td>
                          <TextInput
                            placeholder="% mark"
                            {...form.getInputProps(`education.${index}.cgpa`)}
                          />
                        </td>
                        <td>
                          <ActionIcon
                            variant="subtle"
                            size="sm"
                            onClick={() =>
                              form.removeListItem(`education`, index)
                            }
                          >
                            <IconX />
                          </ActionIcon>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <Button
                        className="my-1"
                        variant="filled"
                        size="xs"
                        onClick={() =>
                          form.setFieldValue(
                            `education.${form.values.education.length}`,
                            { from: '', to: '', title: '', cgpa: '' }
                          )
                        }
                        leftIcon={<IconPlus />}
                      >
                        Add Row
                      </Button>
                    </tr>
                  </tbody>
                </Table>
                <Text
                  className="abeezee"
                  size={12}
                  weight={700}
                  color={'red'}
                >
                  {form.errors['education']}
                </Text>
              </div>
            </div>

            <Textarea
              className="my-2"
              classNames={{
                input: 'abeezee',
                description: 'abeezee',
              }}
              label="Why should you join Miurac"
              description="Why you think you are suitable to work in Miurac? What attracted you to Miurac? What value can you add to Miurac's Vision?"
              placeholder="Explain your answer..."
              {...form.getInputProps('question1')}
            />
            <Textarea
              className="my-2"
              classNames={{
                input: 'abeezee',
                description: 'abeezee',
              }}
              label="Important Test"
              description="Imagine you have unlimited resources, No social pressure, no pressure from family, you have enough money to live for generations, you're well settled for life. You wake up in morning, what will you want to do that day? or rest of your life?"
              placeholder="Explain your answer..."
              {...form.getInputProps('question2')}
            />
            <Textarea
              className="my-2"
              classNames={{
                input: 'abeezee',
                description: 'abeezee',
              }}
              label="Message"
              description="If you have any query or message, please write us."
              placeholder="Explain your answer..."
              {...form.getInputProps('message')}
            />

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
