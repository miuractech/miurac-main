import { Button, Container, Select, Text, Textarea, TextInput, Title } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { useForm } from '@mantine/form'
import { IconCirclePlus } from '@tabler/icons'
import React, { useEffect, useState } from 'react'

const Career = () => {
    const [educationInput, setEducationInput] = useState(false)
    const [employmentInput, setEmploymentInput] = useState(false)
    const [dob, setDob] = useState<Date|null>(null)
    const [eduInputs, setEduInputs] = useState({
        degreeName: '',
        CGPAormarks:''
    })
    const [empInputs, setEmpInputs] = useState({
        employerName: '',
        expMonths:0
    })
    const [empArray, setEmpArray] = useState<any[]>([])
    const [eduArray, setEduArray] = useState<any[]>([])

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            fatherName: '',
            dob: '' as unknown as Date,
            gender: '',
            education: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            country: '',
            pincode: '',
            phone: '',
            educationalHistory: [] as any[],
            employmentHistory: [] as any[],
            workLink: '',
            aboutYourSelf: '',
            whyToHire: ''
        },

        validate: {
            name: (value) => value.length > 3 ? null : 'Atleast 3 characters required',
            fatherName: (value) => value.length > 3 ? null : 'Atleast 3 characters required',
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            dob: (value) => value ? null : "requried",
            gender: (value) => value.length > 0 ? null : "requried",
            education: (value) => value.length > 3 ? null : "minmum of 3 characters required",
            address1: (value) => value.length > 5 ? null : 'minmum of 3 characters required',
            city: (value) => value.length > 0 ? null : 'requried',
            state: (value) => value.length > 0 ? null : 'requried',
            country: (value) => value.length > 0 ? null : 'requried',
            pincode: (value) => value.length > 0 ? null : 'requried',
            phone: (value) => value.length > 0 ? null : 'requried',
            educationalHistory: (value) => value.length > 0 ? null : "requried",
            workLink: (value) => value.length > 0 ? null : "requried",
            aboutYourSelf: (value) => value.length > 0 ? null : "requried",
            whyToHire: (value) => value.length > 0 ? null : "requried",
        },  
    });

    useEffect(() => {
        form.setFieldValue("educationalHistory", eduArray)
        form.setFieldValue("employmentHistory", empArray)
        if (dob) {
            form.setFieldValue("dob", dob)
        }

    }, [empArray, eduArray, dob ])
    
console.log(form.errors);

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
            <Container className='bg-white shadow-sm rounded-lg p-5'>
                <Title my={10} align='center' order={2}>Join the Miurac Family</Title>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <div className='space-y-3'>
                        <TextInput
                            label='Full Name'
                            withAsterisk
                            placeholder='Enter your name'
                            name='name'
                            {...form.getInputProps('name')}
                        />
                        <TextInput
                            label='Email'
                            type='email'
                            withAsterisk
                            placeholder='Enter your email id'
                            {...form.getInputProps('email')}
                        />
                        <TextInput
                            label='Fathers Name'
                            withAsterisk
                            placeholder='Enter your Fathers Name'
                            {...form.getInputProps('fatherName')}
                        />
                        <DatePicker
                            label='Date of Birth'
                            withAsterisk
                            placeholder='Enter your Date of birth'
                            {...form.getInputProps('dob')}
                            onChange={(e) => e && setDob(e)}
                        />
                        <Select
                            label="Gender"
                            placeholder="Select your gender"
                            withAsterisk
                            {...form.getInputProps('gender')}
                            data={[
                                { value: 'male', label: 'Male' },
                                { value: 'female', label: 'Female' },
                                { value: 'other', label: 'Prefer not to answer' },
                            ]}
                        />
                        <Select
                            label="Education"
                            placeholder="Select your Education"
                            withAsterisk
                            {...form.getInputProps('education')}
                            data={[
                                { value: 'masters', label: 'Masters' },
                                { value: "bachelor's", label: "Bachelor's " },
                                { value: "higher secondary", lable: "Higher secondary" },
                                { value: 'other', label: 'Other' },
                            ]}
                        />
                        <div className=''>
                            <TextInput
                                withAsterisk
                                label="Address 1"
                                placeholder='Address 1'
                                {...form.getInputProps('address1')}
                            />
                            <TextInput
                                withAsterisk
                                label="Address 2"
                                placeholder='Address 2  (Optional)'
                                {...form.getInputProps('address2')}
                            />
                            <div className='grid grid-cols-2 gap-x-3'>
                                <TextInput
                                    withAsterisk
                                    label="City"
                                    placeholder='Enter your City'
                                    {...form.getInputProps('city')}
                                />
                                <TextInput
                                    withAsterisk
                                    label="State"
                                    placeholder='Enter your State'
                                    {...form.getInputProps('state')}
                                />
                                <TextInput
                                    withAsterisk
                                    label="Country"
                                    placeholder='Enter your Country'
                                    {...form.getInputProps('country')}
                                />
                                <TextInput
                                    withAsterisk
                                    label="Pincode"
                                    placeholder='Enter your Pincode'
                                    type="number"
                                    {...form.getInputProps('pincode')}
                                />
                                <TextInput
                                    withAsterisk
                                    label="Phone Number"
                                    placeholder='Enter your Phone Number'
                                    type="number"
                                    {...form.getInputProps('phone')}
                                />
                            </div>
                        </div>
                        <div className='space-y-5 my-5'>
                            <div className='flex gap-3'>
                                <Text size={14}>Educational History <span className='text-red-600'>*</span></Text>
                                <IconCirclePlus className='cursor-pointer' onClick={() => setEducationInput(!educationInput)} />
                            </div>
                            <div className='md:grid grid-cols-3 gap-3'>
                                {eduArray.map(a => (
                                    <div className='p-3 border-gray-300 border-solid rounded-md grid grid-cols-2'>
                                        <span>Degree</span>
                                        <Text>: {a.degreeName}</Text>
                                        <span>CGPA/Marks</span>
                                        <Text>: {a.CGPAormarks}</Text>
                                    </div>
                                ))}
                            </div>
                            {educationInput &&
                                <div className='space-y-3 lg:w-1/2'>
                                    <TextInput
                                        onChange={(e) => setEduInputs({ ...eduInputs, degreeName: e.target.value })}
                                        placeholder='Degree name'
                                    />
                                    <TextInput
                                        type='number'
                                        placeholder='CGPA / Marks '
                                        onChange={(e) => setEduInputs({ ...eduInputs, CGPAormarks: e.target.value })}
                                    />
                                    <Button onClick={() => setEduArray([...eduArray, eduInputs])}>Save</Button>
                                </div>}
                            <div className='flex gap-3'>
                                <Text size={14}>Employment History <span className='text-red-600'>*</span></Text>
                                <IconCirclePlus className='cursor-pointer' onClick={() => setEmploymentInput(!employmentInput)} />
                            </div>
                            <div className='md:grid grid-cols-3 gap-3'>
                                {empArray.map(a => (
                                    <div className='p-3 border-gray-300 border-solid rounded-md grid grid-cols-2'>
                                        <span>Employer</span>
                                        <Text>: {a.employerName}</Text>
                                        <span>Experience</span>
                                        <Text>: {a.expMonths}</Text>
                                    </div>
                                ))}
                            </div>
                            {employmentInput &&
                                <div className='space-y-3 lg:w-1/2'>
                                    <TextInput
                                        placeholder='Employer name'
                                        onChange={(e) => setEmpInputs({ ...empInputs, employerName: e.target.value })}
                                    />
                                    <TextInput
                                        placeholder='Experience in months'
                                        onChange={(e) => setEmpInputs({ ...empInputs, expMonths: Number(e.target.value) })}
                                    />
                                    <Button onClick={() => setEmpArray([...empArray, empInputs])}>Save</Button>
                                </div>}
                        </div>
                        <TextInput
                            withAsterisk
                            label='Work Links'
                            description='git, behance or any other'
                            placeholder='Enter your work links here'
                            {...form.getInputProps('workLink')}
                        />
                        <Textarea
                            label='About you'
                            withAsterisk
                            placeholder='About Your self'
                            {...form.getInputProps('aboutYourSelf')}
                        />
                        <Textarea
                            label='Why should we hire you'
                            withAsterisk
                            placeholder='Why should we hire you'
                            {...form.getInputProps('whyToHire')}
                        />
                        <div className='flex gap-5 justify-center'>
                            <Button variant='outline'>Reset</Button>
                            <Button type='submit'>Save</Button>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default Career