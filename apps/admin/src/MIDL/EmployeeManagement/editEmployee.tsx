import { Button, Checkbox, Modal, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import React, { useEffect, useState } from 'react';
import { staffType } from '.';
import * as yup from 'yup';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { showNotification } from '@mantine/notifications';
import { IconX } from '@tabler/icons';
import { defaultErrorMessage } from '../../constants';
import { employeeAccess } from '@miurac/resources';

type Props = {
  data: staffType;
  setData: React.Dispatch<React.SetStateAction<staffType[] | undefined>>;
};

export default function EditEmployee({ data, setData }: Props) {
  const [loading, setLoading] = useState(false);
  const form = useForm<{
    email: string;
    name: string;
    access: string[];
  }>({
    initialValues: {
      email: '',
      name: '',
      access: [],
    },
    validate: yupResolver(
      yup.object({
        email: yup
          .string()
          .email('email must be abc@email.com')
          .required('email is required'),
        name: yup.string().required('name is required'),
        access: yup.array(yup.string()),
      })
    ),
  });
  useEffect(() => {
    if (data) {
      form.setValues(data);
    } else {
      form.reset();
    }
  }, [data]);

  return (
    <Modal
      centered
      transition={'slide-down'}
      transitionDuration={600}
      opened={Boolean(data)}
      onClose={() => setData(undefined)}
    >
      <form
        onSubmit={form.onSubmit(async (data) => {
          try {
            setLoading(true);
            await setDoc(doc(collection(db, 'employees'), data.email), data);
            setLoading(false);
            setData(undefined);
            showNotification({
              id: `reg-err-${Math.random()}`,
              autoClose: 5000,
              title: 'Success',
              message: 'Added successfully',
              color: 'green',
              icon: <IconX />,
              loading: false,
            });
            window.location.reload()
          } catch (err) {
            console.log(err);
            showNotification({
              id: `reg-err-${Math.random()}`,
              autoClose: 5000,
              title: 'Error',
              message: defaultErrorMessage,
              color: 'red',
              icon: <IconX />,
              loading: false,
            });
          }
        })}
      >
        <TextInput
          label="name"
          placeholder="abc@miurac.com"
          my={16}
          {...form.getInputProps('name')}
        />
        <TextInput
          label="email"
          placeholder="abc@miurac.com"
          my={16}
          {...form.getInputProps('email')}
        />
        <Checkbox.Group
          value={form.values.access}
          onChange={(v) => form.setFieldValue('access', v)}
        >
          {employeeAccess.map(({ name, value }) => (
            <Checkbox key={name} value={value} label={name} />
          ))}
        </Checkbox.Group>
        <br />
        <Button loading={loading} type="submit">
          Add Employee
        </Button>
      </form>
    </Modal>
  );
}
