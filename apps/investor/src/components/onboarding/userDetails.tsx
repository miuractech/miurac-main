import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { useForm, yupResolver } from '@mantine/form';
import {
  TextInput,
  Textarea,
  Button,
  Select,
  Radio,
  ActionIcon,
  Text,
} from '@mantine/core';
import * as yup from 'yup';
import { MiuracFiles, miuracFileType } from '@miurac/miurac-files';
import { app, db } from '../../config/firebaseConfig';
import moment from 'moment';
import { IconX } from '@tabler/icons';
import { collection, doc, setDoc } from 'firebase/firestore';
import { addPerson } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export interface PeopleType {
  firstName: string;
  lastName: string;
  fathersName: string;
  dob: string;
  maritalStatus: boolean;
  educationQualification: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pincode: string;
  state: string;
  phoneNumber: string;
  idProof: miuracFileType | null;
  bankAccountNumber: string;
  bankIfscCode: string;
}

export const initPeople: PeopleType = {
  firstName: '',
  lastName: '',
  fathersName: '',
  dob: '',
  maritalStatus: false,
  educationQualification: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  pincode: '',
  state: '',
  phoneNumber: '',
  idProof: null,
  bankAccountNumber: '',
  bankIfscCode: '',
};

const validationSchema = yup.object({
  firstName: yup.string().min(3).required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  fathersName: yup.string().required("Father's name is required"),
  dob: yup
    .string()
    .required('Date of Birth is required')
    .test('valid-dob', 'You must be at least 18 years old', function (value) {
      return moment().subtract(18, 'years') > moment(value);
    }),
  maritalStatus: yup
    .string()
    .oneOf(['married', 'unmarried'])
    .required('Marital status is required'),
  educationQualification: yup
    .string()
    .required('Education Qualification is required'),
  addressLine1: yup.string().required('Address Line 1 is required'),
  city: yup.string().required('City is required'),
  pincode: yup.string().required('Pincode is required'),
  state: yup.string().required('State is required'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Invalid phone number'),
  idProof: yup
    .object()
    .shape({
      url: yup.string(),
      preview: yup.string(),
      metaData: yup.object().shape({
        name: yup.string(),
        size: yup.number(),
        type: yup.string(),
        lastModified: yup.number(),
      }),
      createdAt: yup.object().shape({
        seconds: yup.number(),
        nanoseconds: yup.number(),
      }),
      path: yup.string().required('Phone number is required'),
    })
    .required('ID Proof is required'),
  bankAccountNumber: yup
    .string()
    .required('Bank Account Number is required')
    .matches(/^[0-9]{9,18}$/, 'Invalid bank account number'),
  bankIfscCode: yup
    .string()
    .matches(/^[A-Z]{4}\d{7}$/, 'Bank IFSC Code is invalid')
    .required('Bank IFSC Code is required'),
});

export default function OnBoardingForm() {
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const form = useForm<PeopleType>({
    initialValues: initPeople,
    validate: yupResolver(validationSchema),
  });
  console.log(form.errors);
  
  return (
    <>
      <h3 className="text-center">Details</h3>
      <form
        className="max-w-lg mx-auto space-y-3"
        onSubmit={form.onSubmit(async (values) => {
          try {
            setSubmitting(true);
            // add values to "people" collection of firebase 9 and dispatch the values to setPerson reducer.

            // Add values to "people" collection
            await setDoc(doc(collection(db, 'employees'), user?.uid), {
              status: 'signup',
              ...values,
            }, { merge:true});

            // Dispatch the values to setPerson reducer
            dispatch(addPerson(values));
            setSubmitting(false);
          } catch (error) {
            console.error(error);
            setSubmitting(false);
          }
        })}
      >
        <TextInput
          label="First Name"
          required
          {...form.getInputProps('firstName')}
        />
        <TextInput
          label="Last Name"
          required
          {...form.getInputProps('lastName')}
        />
        <TextInput
          label="Father's Name"
          required
          {...form.getInputProps('fathersName')}
        />
        <DatePicker
          label="Date of Birth"
          required
          {...form.getInputProps('dob')}
        />
        <Radio.Group
          label="Marital status"
          {...form.getInputProps('maritalStatus')}
        >
          {[
            { label: 'Married', value: 'married' },
            { label: 'Unmarried', value: 'unmarried' },
          ].map((option) => (
            <Radio
              key={option.value}
              label={option.label}
              value={option.value}
              //   checked={field.value === option.value}
              //   onChange={() => field.onChange({ target: { value: option.value } })}
            />
          ))}
          {/* {form.errors['maritalStatus'] &&  <Text color='red' >
      Select one.
      </Text>} */}
        </Radio.Group>
        {/* <Checkbox label="Married"  /> */}
        <TextInput
          label="Education Qualification"
          required
          {...form.getInputProps('educationQualification')}
        />
        <Textarea
          label="Address Line 1"
          required
          {...form.getInputProps('addressLine1')}
        />
        <Textarea
          label="Address Line 2"
          {...form.getInputProps('addressLine2')}
        />
        <TextInput label="City" required {...form.getInputProps('city')} />
        <TextInput
          label="Pincode"
          required
          {...form.getInputProps('pincode')}
        />
        <Select
          label="State"
          placeholder="Select your state"
          required
          {...form.getInputProps('state')}
          data={[
            { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
            { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
            { value: 'Assam', label: 'Assam' },
            { value: 'Bihar', label: 'Bihar' },
            { value: 'Chhattisgarh', label: 'Chhattisgarh' },
            { value: 'Goa', label: 'Goa' },
            { value: 'Gujarat', label: 'Gujarat' },
            { value: 'Haryana', label: 'Haryana' },
            { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
            { value: 'Jharkhand', label: 'Jharkhand' },
            { value: 'Karnataka', label: 'Karnataka' },
            { value: 'Kerala', label: 'Kerala' },
            { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
            { value: 'Maharashtra', label: 'Maharashtra' },
            { value: 'Manipur', label: 'Manipur' },
            { value: 'Meghalaya', label: 'Meghalaya' },
            { value: 'Mizoram', label: 'Mizoram' },
            { value: 'Nagaland', label: 'Nagaland' },
            { value: 'Odisha', label: 'Odisha' },
            { value: 'Punjab', label: 'Punjab' },
            { value: 'Rajasthan', label: 'Rajasthan' },
            { value: 'Sikkim', label: 'Sikkim' },
            { value: 'Tamil Nadu', label: 'Tamil Nadu' },
            { value: 'Telangana', label: 'Telangana' },
            { value: 'Tripura', label: 'Tripura' },
            { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
            { value: 'Uttarakhand', label: 'Uttarakhand' },
            { value: 'West Bengal', label: 'West Bengal' },
          ]}
        />
        <TextInput
          label="Phone Number"
          required
          {...form.getInputProps('phoneNumber')}
          placeholder="e.g. +919876543210"
        />
        {/* <FileInput
          label="ID Proof"
          required
          icon={<IconFileUpload />}
          {...form.getInputProps('idProof')}
        /> */}

        <Text> ID proof </Text>
        {form.values['idProof'] ? (
          <div className="relative">
            <div className="absolute left-3 top-3">
              <ActionIcon
                color="red"
                variant="filled"
                onClick={() => form.setFieldValue('idProof', null)}
              >
                <IconX />
              </ActionIcon>
            </div>
            <img
              className="max-w-xs max-h-[450px]"
              src={form.values['idProof'].preview}
              alt="preview"
            />
          </div>
        ) : (
          <MiuracFiles
            app={app}
            getUrl={(url) => form.setFieldValue('idProof', url)}
            updateFirestore={true}
          />
        )}
        <TextInput
          label="Bank Account Number"
          required
          {...form.getInputProps('bankAccountNumber')}
        />
        <TextInput
          label="Bank IFSC Code"
          required
          {...form.getInputProps('bankIfscCode')}
        />

        <Button
          type="submit"
          variant="outline"
          //   disabled={submitting || Boolean(form.errors)}
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </>
  );
}
