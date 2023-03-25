import React from 'react';
import rocketPic from '../../images/rocket.svg';
import googleIcon from '../../images/icons/google.svg';
import { TextInput , Divider , PasswordInput , Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import Footer from '../../layout/Footer';
import { signInWithPopup , signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../config/redux/store/authSlice';
import { useDispatch } from 'react-redux';

interface loginProps {
    clickFunction : () => void
}



export default function Login(clickFunction : loginProps){
    // const auth = getAuth();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState(''); 
    const dispatch = useDispatch(); 
    // const navigate = useNavigate();  


    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        try {
            const userDetails = signInWithPopup(auth , provider);
            dispatch(setUser(userDetails));
        } catch (error : any) {
            alert(error.message);
        }
    }

    const handleSignInWithEmailAndPassword = () => {
        try {
            const userDetails = 
                    signInWithEmailAndPassword(
                            auth , 
                            email , 
                            password);
            dispatch(setUser(userDetails));
        } catch (error : any) {
            alert(error.message);
        }
    }

    const switchSignUp = () => {
        clickFunction.clickFunction();
    }

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
                            <button 
                                onClick={signInWithGoogle}
                                className='m-5 rounded-[10px] bg-white px-4 py-2 flex text-[14px] font-[600]'>
                                <img src={googleIcon} alt="google" />
                                &nbsp;&nbsp;&nbsp;Sign In with Google
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <PasswordInput
                                        withAsterisk 
                                        style = {{
                                            padding:'8px',
                                            fontSize:'16px',
                                            fontWeight:'600',
                                            outline:'none',
                                            marginTop:'10px',
                                            width:'80%'
                                        }}
                                        label='Password'
                                        placeholder='Password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className='p-0 m-0 flex justify-end text-left mx-auto items-end w-[80%]'>
                                        <Link to='/forgot-password'> 
                                            <h5 className='font-[600] text-[12px]'>
                                                Forgot Password?
                                            </h5>
                                        </Link>
                                    </div>
                                    <Button 
                                        onClick={handleSignInWithEmailAndPassword}
                                        style={{'width':'80%','margin':'10px',borderRadius:'10px',background:'black'}} 
                                        color='dark' 
                                        size={'md'}>
                                        Get Started
                                    </Button>
                                    <p className='text-[12px] p-2 font-[600] text-[grey] text-center flex'>
                                        Not have an account? <button className='text-black' onClick={switchSignUp}>Signup</button>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}