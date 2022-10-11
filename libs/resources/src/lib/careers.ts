export type educationType = {
  from: number;
  to: number;
  title: string;
  cgpa: number;
};

export type applicantType = {
  name: string;
  fatherName: string;
  email: string;
  phone: string;
  profession: 'employee' | 'student' | 'others' | '';
  education: educationType[];
  address1: string;
  address2: string;
  city: string;
  pincode: string;
  country: string;
  state: string;
  // resume: File | null;
  interest: string;
  maritalStatus: string | null;
  question1: string;
  question2: string;
  message:string
};
