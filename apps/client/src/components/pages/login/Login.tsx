import React from 'react';
import rocketPic from '../../images/rocket.svg';
import googleIcon from '../../images/icons/google.svg';
import { TextInput , Divider , PasswordInput , Button } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <div>
            <div className='h-[90vh] w-full bg-[#E0E6EC] flex justify-center items-center'>
                <div className='h-[80vh] w-[75%] mx-auto grid grid-cols-2 bg-white rounded-[15px]'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={rocketPic} alt="login pic" />
                        <h5 className='font-bold'>Turn Your Ideas into products</h5>
                    </div>
                    <div className='bg-[#F0F3F8] flex justify-center items-center'>
                        <div className='w-[90%] mx-auto flex flex-col justify-center items-center p-[12px]'>
                            <h5 className='font[20px] font-bold text-center '>Welcome Back Login</h5>
                            <button className='m-5 rounded-[10px] bg-white px-4 py-2 flex text-[14px] font-[600]'>
                                <img src={googleIcon} alt="google" />
                                &nbsp;&nbsp;&nbsp;Sign In with Google
                            </button>
                            <Divider label="OR" my="xs" labelPosition="center"/>
                            <div className='w-full flex flex-col justify-center items-center'>
                                <TextInput 
                                    style = {{
                                        padding:'8px',
                                        fontSize:'16px',
                                        fontWeight:'600',
                                        outline:'none',
                                        margin:'10px',
                                        width:'80%'
                                    }}
                                    label="Email" 
                                    placeholder='Email id' />
                                    <PasswordInput 
                                        style = {{
                                            padding:'8px',
                                            fontSize:'16px',
                                            fontWeight:'600',
                                            outline:'none',
                                            margin:'10px',
                                            width:'80%'
                                        }}
                                        label='Password'
                                        placeholder='Password'
                                    />
                                    <Button style={{'width':'80%','margin':'10px',borderRadius:'10px',background:'black'}} color='dark' size={'md'}>
                                        Get Started
                                    </Button>
                                    <p className='text-[12px] p-2 font-[600] text-[grey] text-center'>
                                        Not have an account? <Link to='/sign-up' className='text-black'>Signup</Link>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}