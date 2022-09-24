import React, { useState } from 'react';
import { AppShell, Burger, Button, Header, Modal } from '@mantine/core';
import { Logo } from '@miurac/resources';
import Index from './sidenav';
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from '@tabler/icons';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from 'react-router-dom';
// import Logo from "@miurac/resources"
// type Props = {
//   children: JSX.Element;
// };

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const media = useMediaQuery('(min-width: 900px)');
  return (
   <Header
          fixed
          className="a-p flex justify-between bg-transparent"
          height={60}
          p="xs"
          px="xl"
        >
          <div className="flex items-center">
            <Logo height={40} imgProps={{ className: 'mr-2' }} />
            <span className="lato font-black text-3xl text-[#3C4043] a-c">
              M
            </span>
            <span className="lato font-black text-3xl text-[#3C4043]">I</span>
            <span className="lato font-black text-3xl text-[#3C4043]">U</span>
            <span className="lato font-black text-3xl text-[#3C4043]">R</span>
            <span className="lato font-black text-3xl text-[#3C4043]">A</span>
            <span className="lato font-black text-3xl text-[#3C4043]">C</span>
          </div>
          <div>
            <Burger opened={menuOpen} onClick={() => setMenuOpen(true)} />
            <Modal
              opened={menuOpen}
              size="100%"
              transition={'slide-down'}
              transitionTimingFunction="linear"
              onClose={() => setMenuOpen(false)}
              // className="-mt-12 "
              withCloseButton={false}
              classNames={{
                modal: 'rounded-b-3xl rounded-t-none bg-[#1E1E20]',
                inner: 'p-0 w-full',
                title: 'text-white text-xl',
                close: 'right-4 top-0',
              }}
              // styles={{inner:{padding:0, width:"100%",}, title:{color:"white"}}}
              overlayColor="#88888888"
              className="text-white roie"
              withFocusReturn
              title="MIURAC"
            >
              <div className="text-[#9CA5B1] roie font-normal rounded-t-none relative">
                <Burger
                  className="absolute right-0 -top-12"
                  size={'sm'}
                  color="white"
                  opened={menuOpen}
                  onClick={() => setMenuOpen(false)}
                />
                <div className="flex flex-wrap w-full md:w-3/4 m-auto">
                  <div className="md:w-1/2 w-full md:-mt-1">
                    {navItems.slice(0, 4).map(({ text }, index) => (
                      <NavItemComponent index={index} text={text} />
                    ))}
                  </div>
                  <div className="md:w-1/2 w-full">
                    {navItems.slice(4, 8).map(({ text }, index) => (
                      <NavItemComponent index={index+4} text={text} />
                    ))}
                  </div>
                </div>
                <br />
                <br />
                <div className="flex justify-between m-auto text-xs font-light md:w-4/5 w-full ">
                  <div >
                  All rights reserved 2022 
                  </div>
                  <div className="flex gap-5">
                    {socialItems.map(({icon,link,text}) => (
                      <SocialLink icon={icon} link={link} text={text} />
                    ))}
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </Header>
    
  );
}

const navItems = [
  { text: 'Work', onclick: () => void 0, link: '' },
  { text: 'Startup', onclick: () => void 0, link: '' },
  { text: 'Business', onclick: () => void 0, link: '' },
  { text: 'Investor', onclick: () => void 0, link: '' },
  { text: 'About', onclick: () => void 0, link: '' },
  { text: 'Login', onclick: () => void 0, link: '' },
  { text: 'Careers', onclick: () => void 0, link: '' },
  { text: 'Contact us', onclick: () => void 0, link: '' },
];

export const socialItems = [
  { icon: <IconBrandInstagram />, text: 'Instagram', link: '' },
  { icon: <IconBrandLinkedin />, text: 'Linked In', link: '' },
  { icon: <IconBrandYoutube />, text: 'Youtube', link: '' },
];

const NavItemComponent = ({ index, text }: { index: number; text: string }) => {
  return (
    <div className="md:p-8 p-3 hover:bg-[#434348] hover:text-white text-xl roie font-normal rounded-xl cursor-pointer">
      <div className="block ml-10 ">
        <span className="text-sm"> 0{index + 1} &ensp;</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export const SocialLink = ({
  icon,
  text,
  link,
}: {
  link: string;
  icon: any;
  text: string;
}) => {
  const media = useMediaQuery('(min-width: 900px)');
  return (
    <Link to={link}>
      <div className="flex items-center gap-1">
        {icon}
        {media && text}
      </div>
    </Link>
  );
};
