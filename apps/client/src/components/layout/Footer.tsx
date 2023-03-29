import React from 'react';
import linkedin from '../images/icons/linkedin.svg';
import instagram from '../images/icons/insta.svg';
import youtube from '../images/icons/youtube.svg';
import locationIcon from '../images/icons/location.svg';
import mailIcon from '../images/icons/mail.svg';
import phoneIcon from '../images/icons/phone.svg';



export default function Footer() {
  const services = ['For Start up', 'For Business', 'For Investor'];
  const quicklinks = ['Our Work', 'About us', 'Careers'];
  const contactInfo = (
    <div className='text-white'>
        <div className='flex p-3'>
            <img src={locationIcon} alt="location" />
            &nbsp;&nbsp;&nbsp;Bangalore , Karnataka
        </div>
        <div className='flex p-3'>
            <img src={mailIcon} alt="mail" />
            &nbsp;&nbsp;&nbsp;<a href='mailto:miuractech@gmail.com'>
                miuractech@gmail.com
            </a>
        </div>
        <div className='flex p-3'>
            <img src={phoneIcon} alt="phone" />
            &nbsp;&nbsp;&nbsp;+91-8336801389
        </div>
    </div>
  );
  return (
    <div className="bg-black h-auto">
        <div className='p-[15px] flex flex-wrap justify-between items-start'>
            <div>
                    <h1 className="text-[#E0E5EC] ml-[132px] font-black text-5xl pt-[51px]">MIURAC</h1>
                    <div>
                    <div className="font-normal text-[22px] pt-[75px] text-[#9CA5B1] ml-[138px]">
                        Follow us
                    </div>
                    <div className="flex pl-[138px] gap-[34px] pt-[16px] justify-center items-center">
                        <a href="/" target={'_blank'}>
                            <img src={linkedin} alt="linkedin" />
                        </a>
                        <a href="/" target={'_blank'}>
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href="/" target={'_blank'}>
                            <img src={youtube} alt="youtube" />
                        </a>
                    </div>
            </div>
            </div>
            
            <div>
                <div className="font-normal text-[#9CA5B1] text-[22px] pt-[51px] p-3">Services</div>
                {services.map((item, i) => (
                    <div className="text-[#FBFBFD] p-3 text-[16px]">{item}</div>
                ))}
            </div>
            <div>
                <div className='font-normal text-[#9CA5B1] text-[22px] pt-[51px] p-3'>Quick links</div>
                {quicklinks.map((item, i) => (
                    <div className='text-[#FBFBFD] p-3 text-[16px]'>{item}</div>
                ))}
            </div>
            <div>
                <div className='font-normal text-[#9CA5B1] text-[22px] pt-[51px] p-3'>Quick links</div>
                {contactInfo}
            </div>
            
      </div>
      <div className='mt-[40px] text-center text-[#9CA5B1] text-[14px] p-4'>
                    <h6>© copyright 2023 . All rights reserved</h6>
        </div>
    </div>
  );
}
