import React from 'react';
import pic from '../../images/champion.svg';
import googleIcon from '../../images/icons/google.svg';
import { TextInput , Divider , PasswordInput , Button } from '@mantine/core';
// import { Link } from 'react-router-dom';
import Footer from '../../layout/Footer';
import { signInWithPopup , GoogleAuthProvider , getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';



interface signUpProps {
    clickFunction: () => void
}

export default function Signup(clickFunction : signUpProps){
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const switchLogin = () => {
        clickFunction.clickFunction();
    }

    const signUpWithGoogle = () => {
        try {
            signInWithPopup(auth , provider);
        } catch (error : any) {
            alert(error.message);
        }
    }

    const signUpWithEmailHandler = () => {
        if(password === confirmPassword){
            try {
                createUserWithEmailAndPassword(auth , email , password);
            } catch (error : any) {
                alert(error.message);
            }
        } else {
            alert('Passwords do not match');
        }
    }

    return(
        <div>
            <div className='h-[90vh] w-full bg-[#E0E6EC] flex justify-center items-center p-[5%] xd:flex-col xd:h-auto'>
                <div className='h-auto p-[20px] w-[75%] mx-auto grid grid-cols-2 bg-white rounded-[15px] sl:w-[90%] xd:grid-cols-1'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={pic} alt="login pic" />
                        <h5 className='font-bold'>Build your next unicorn with us!</h5>
                    </div>
                    <div className='bg-[#F0F3F8] flex justify-center items-center'
                            style={{
                                borderTopRightRadius:'10px',
                                borderBottomRightRadius:'10px'
                            }}
                        >
                        <div className='w-[90%] mx-auto flex flex-col justify-center items-center p-[12px]'>
                            <h5 className='font[20px] font-bold text-center'>Create Your Account</h5>
                            <button 
                                onClick={signUpWithGoogle}
                                className='m-5 rounded-[10px] bg-white px-4 py-2 flex text-[14px] font-[600]'>
                                    <img src={googleIcon} alt="google" />
                                    &nbsp;&nbsp;&nbsp;Sign Up with Google
                            </button>
                            <Divider label="OR" my="xs" labelPosition="center"/>
                            <div className='w-full flex flex-col justify-center items-center'>
                                <TextInput 
                                    withAsterisk
                                    style = {{
                                                padding:'8px',
                                                fontSize:'16px',
                                                fontWeight:'600',
                                                outline:'none',
                                                margin:'10px',
                                                width:'80%'
                                            }}
                                    label="Email" 
                                    placeholder='Email id' 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>
                                    <PasswordInput 
                                        withAsterisk
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
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <PasswordInput 
                                        withAsterisk
                                        style = {{
                                            padding:'8px',
                                            fontSize:'16px',
                                            fontWeight:'600',
                                            outline:'none',
                                            margin:'10px',
                                            width:'80%'
                                        }}
                                        label='Confirm Password'
                                        placeholder='Repeat Password'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <Button 
                                        style={{'width':'80%','margin':'10px','borderRadius':'10px','background':'black'}} 
                                        color='dark' 
                                        size={'md'}
                                        onClick={signUpWithEmailHandler}>
                                        Get Started
                                    </Button>
                                    <p className='text-[12px] p-2 font-[600] text-[grey] text-center flex'>
                                        Already have an account? 
                                        <button 
                                            className='text-black' 
                                            onClick={switchLogin}
                                            >Login
                                        </button>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}