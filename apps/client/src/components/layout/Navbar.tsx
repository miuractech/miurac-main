import React, { useEffect , useState } from 'react';
import logo from '../images/miurac-logo.svg';
import miuracDashLogo from '../images/miurac-logo-das.svg';
import { getAuth, reload } from 'firebase/auth';
import msgIcon from '../images/icons/message.svg';
import linkTabIcon from '../images/icons/linkTabIcon.svg';
import { Menu } from '@mantine/core';
import { IconArrowDown } from '@tabler/icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IconArrowLeft } from '@tabler/icons';

export default function Navbar() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [userDetails, setUser] = useState<any | null>(null);

  const navBtns = [
    {name : msgIcon},
    {name: linkTabIcon}
  ]

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        console.log('user is not signed in');
      }
    })
  })


  const handleLogout = () => {
    try {
      auth.signOut();
    } catch(error){
      console.log(error);
    }
    setUser(null);
  }
  

  return (
    <div>
      {
        userDetails
        ? (
          <div className='h-[70px] p-[10px] justify-between items-center flex'>
            
            <div className='relative'>
              
              <img src={miuracDashLogo} alt='miurac-logo' />
            </div>
            <div className='flex items-center'>
              {navBtns.map((item) => {
                return (
                  <button className='m-2 p-2'>
                    <img src={item.name} alt={item.name}/>
                  </button>
                );
              })}
              <button className='m-2 p-2 flex'>
                <Menu trigger="hover" openDelay={100} closeDelay={400}>
                  <Menu.Target>
                  <img 
                    className='w-[45px] h-[45px] rounded-full'
                    src={userDetails.photoURL} 
                    alt='user-profile-pic' />
                  </Menu.Target>
                  <Menu.Dropdown className='w-[120px] text-left'>
                    <h4 className='p-2 hover:bg-[#e8e8e8]'><Link to="/">Account</Link></h4>
                    <h4 className='p-2 hover:bg-[#e8e8e8]'><Link to="/">Profile</Link></h4>
                    <h4 
                      onClick={handleLogout}
                      className='p-2 hover:bg-[#e8e8e8]'>
                      Logout
                    </h4>
                  </Menu.Dropdown>
                </Menu>
              </button>
            </div>
          </div>
        )
        : (<div className='h-[70px] p-[10px] justify-between items-center flex'>
            <img src={logo} alt='miurac-logo' />
          </div>)
      }
      
    </div>
  )
}
