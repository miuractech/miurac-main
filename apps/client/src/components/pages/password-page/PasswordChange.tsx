import react, { useEffect } from 'react';
import setting from '../../images/settings.svg';
import { Button, PasswordInput } from '@mantine/core';
import Email from '../../images/email.svg';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { useState } from 'react';



export default function PasswordChange() {

  const [password , setPassword] = useState('');
  const [confirmPassword , setConfirmPassword] = useState('');
  const [user , setUser] = useState<any | null>(null);
//   const auth = getAuth();

  const email = localStorage.getItem('email');



  

    const passwordChangeHandler = () => {
        if(password === confirmPassword){
            try {
                // user?.updatePassword(password);
                
                
                console.log('Password updated successfully');
                
            } catch (error : any) {
                alert(error.message);
                console.log('Password not updated')
            }
        } else {
            alert('Passwords do not match');
        }
    }


  return (
    <div>
      <div className="h-[90vh] w-full bg-[#E0E6EC] flex justify-center items-center">
        <div className="h-[80vh] w-[75%] mx-auto grid grid-cols-2 bg-white rounded-[15px]">
          <div className="flex flex-col justify-center items-center">
            <img src={Email} alt="login pic" />
          </div>
          <div className="bg-[#F0F3F8] flex justify-center items-center">
            <div className="w-[90%] mx-auto flex flex-col justify-center items-center p-[12px]">
              <text className="text-[20px] font-bold text-center ">
                Reset Password
              </text>
              <text className="text-[14px] font-medium text-[#222629] text-center pt-[26px]">
                We have a sent you an email with a link to reset <br /> your
                password
              </text>
              <div className="w-full flex flex-col justify-center items-center">
                <PasswordInput
                  style={{
                    padding: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    outline: 'none',
                    margin: '10px',
                    width: '80%',
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Enter new Password:"
                  placeholder="Password"
                  withAsterisk
                />
                <PasswordInput
                  style={{
                    padding: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    outline: 'none',
                    margin: '10px',
                    width: '80%',
                  }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  label="Confirm Password:"
                  placeholder="Password"
                  withAsterisk
                />
                <Button
                  style={{
                    width: '80%',
                    margin: '10px',
                    borderRadius: '10px',
                    background: 'black',
                  }}
                  color="dark"
                  onClick={passwordChangeHandler}
                  size={'md'}
                >
                  Create
                </Button>
                <p className="text-[12px]  pt-[38px] font-[600] text-[#222629] text-center">
                  Back to login
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
