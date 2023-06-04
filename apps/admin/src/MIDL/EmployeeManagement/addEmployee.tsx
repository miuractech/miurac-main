/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, Checkbox, Modal, TextInput } from '@mantine/core';
import {DatePicker} from "@mantine/dates"
import { useForm, yupResolver } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { employeeAccess } from '@miurac/resources';
import { IconX } from '@tabler/icons';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { db } from '../../config/firebaseConfig';
import { defaultErrorMessage } from '../../constants';
import { httpsCallable } from 'firebase/functions';
import { functions } from '../../config/firebaseConfig';
import { staffType } from '.';
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  data?: staffType;
  setData?: React.Dispatch<React.SetStateAction<staffType[] | undefined>>;
};

// eslint-disable-next-line no-empty-pattern
export default function AddEmployee({ data, setData }: Props) {
  const [modal, setModal] = useState(false);
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
      //@ts-ignore
      form.setFieldValue('doj',data.doj.toDate());
    } else {
      form.reset();
    }
  }, [data]);

  return (
    <div>
      <Button onClick={() => setModal(true)}>
        {data ? 'Edit Employee' : 'Add Employee'}
      </Button>
      <Modal
        centered
        transition={'slide-down'}
        transitionDuration={600}
        opened={modal}
        onClose={() => setModal(false)}
      >
        <form
          onSubmit={form.onSubmit(async (data) => {
            try {
              setLoading(true);
              const getUID = httpsCallable(functions, 'getUserUidByEmail');
              const res = (await getUID({ email: data.email })) as any;
              const uid = res.data.uid;
              await setDoc(doc(collection(db, 'employees'), uid), data);
              setLoading(false);
              setModal(false);
              showNotification({
                id: `reg-err-${Math.random()}`,
                autoClose: 5000,
                title: 'Success',
                message: 'Added successfully',
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
              setLoading(false);
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
          <TextInput
            label="position"
            placeholder="Developer (react dev)"
            my={16}
            {...form.getInputProps('position')}
          />
          <DatePicker
            label="Date of join"
            my={16}
            {...form.getInputProps('doj')}
          />
          <DatePicker
            label="ending"
            my={16}
            {...form.getInputProps('ending')}
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
    </div>
  );
}
