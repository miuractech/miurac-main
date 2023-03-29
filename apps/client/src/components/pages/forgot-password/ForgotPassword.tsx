import setting from '../../images/settings.svg';
import { Button, PasswordInput,TextInput } from '@mantine/core';
import Footer from '../../layout/Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { sendPasswordResetEmail , getAuth } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [link , isLinkSent] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();


  const resetPasswordHandler = async() => {
    try{
      await sendPasswordResetEmail(auth , email);
      isLinkSent(true);

      if(link){
        toast.success('Email sent successfully!', {
          position: toast.POSITION.TOP_RIGHT
        });
        setEmail('');
        navigate('/');
      }

      localStorage.setItem('email' , email);
      // navigate('/');
    } catch (error : any) {
      alert(error.message);
    }
  }

  return (
    <div>
      <div className="h-[90vh] w-full bg-[#E0E6EC] flex justify-center items-center">
        <div className="h-[80vh] w-[75%] mx-auto grid grid-cols-2 bg-white rounded-[15px]">
          <div className="flex flex-col justify-center items-center">
            <img src={setting} alt="login pic" />
          </div>
          <div className="bg-[#F0F3F8] flex justify-center items-center">
            <div className="w-[90%] mx-auto flex flex-col justify-center items-center p-[12px]">
              <text className="text-[20px] font-bold text-center ">
                Forgot Password
              </text>
              <text className='text-[14px] pt-[26px] font-medium text-center '>Enter your registered email id to reset the <br /> password</text>
              <div className="w-full flex flex-col justify-center items-center">
                <TextInput
                  style={{
                    padding: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    outline: 'none',
                    margin: '10px',
                    width: '80%',
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email"
                  placeholder="Email id"
                  withAsterisk
                />
                <Button
                  style={{
                    width: '80%',
                    margin: '10px',
                    borderRadius: '10px',
                    background: 'black',
                  }}
                  onClick={resetPasswordHandler}
                  color="dark"
                  size={'md'}
                >
                  Reset Password
                </Button>
                <button onClick={() => navigate('/')}>
                  <p className="text-[12px]  pt-[38px] font-[600] text-[#222629] text-center">
                    Back to login
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}