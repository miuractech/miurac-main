/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Button, Modal } from '@mantine/core';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { showNotification } from '@mantine/notifications';
import { defaultErrorMessage } from '../../constants';
import { IconX } from '@tabler/icons';

export interface Deck {
  email: string;
  name: string;
  firm: string;
  active: boolean;
  createdAt: Date;
  lastAccessed: Date;
  id?: string;
  timeStamp:Date[]
}
type Props = {
  data?: Deck;
};

const AccessForm = ({ data }: Props) => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm<Deck>({
    initialValues: {
      email: '',
      name: '',
      firm: '',
      active: true,
      timeStamp:[],
      createdAt: new Date(),
      lastAccessed: new Date(),
    },
  });

  const handleSubmit = async (values: Deck) => {
    setLoading(true);
    try {
      setLoading(false);
      if (data) {
        await setDoc(doc(collection(db, 'deck'), data.id), values);
       
      } else {
        await addDoc(collection(db, 'deck'), {...values,timeStamp:[]});
  
        
      }
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
      setLoading(false);
    }
    // Perform your submit logic here
  };
  useEffect(() => {
    if (data) {
      form.setValues(data);
    } else {
      form.reset();
    }
  }, [data]);
  return (
    <div>
      <Button size="xs" onClick={() => setModal(true)}>
        {data ? 'Edit Access' : 'Add Access'}
      </Button>
      <Modal
        centered
        transition={'slide-down'}
        transitionDuration={600}
        opened={modal}
        title="Access"
        onClose={() => setModal(false)}
      >
        <form
          className="flex flex-col gap-y-4"
          onSubmit={form.onSubmit(handleSubmit)}
        >
          <TextInput
            label="Email"
            placeholder="Enter email"
            {...form.getInputProps('email')}
          />

          <TextInput
            label="Name"
            placeholder="Enter name"
            required
            {...form.getInputProps('name')}
          />

          <TextInput
            label="Firm"
            placeholder="Enter firm"
            required
            {...form.getInputProps('firm')}
          />

          <Checkbox
            label="Active"
            {...form.getInputProps('active', { type: 'checkbox' })}
          />

          <Button loading={loading} type="submit" variant="filled">
            Submit
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default AccessForm;
