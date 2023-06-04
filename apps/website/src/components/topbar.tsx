import React, { useState } from 'react';
import {
  ActionIcon,
  AppShell,
  Burger,
  Button,
  Header,
  Modal,
} from '@mantine/core';
import { Logo } from '@miurac/resources';
import Index from './sidenav';
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMenu,
} from '@tabler/icons';
import { useMediaQuery } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import { CTA } from './cta/cta';
import TopSmallBar from './topSmallBar';
// import Logo from "@miurac/resources"
type Props = {
  bg: "transparent" | string;
};

export default function Topbar({bg}:Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const mediaMatch = useMediaQuery('(min-width: 700px)');


  return (
    <Header
        fixed
        style={{background:bg}}
        height={60}
      >
      <div className="flex justify-between a-p px-2 py-2">
        <Link to="/">
          <div className="flex items-center cursor-pointer h-full ">
            <Logo
              height={mediaMatch ? 40 : 30}
              imgProps={{ className: 'md:mr-2 mr-0 h-4 md:h-10' }}
            />
            <span
              id="ch1"
              className="lato font-black text-xl md:text-3xl text-[#3C4043] a-c"
            >
              M
            </span>
            <span
              id="ch2"
              className="lato font-black text-xl md:text-3xl text-[#3C4043]"
            >
              I
            </span>
            <span
              id="ch3"
              className="lato font-black text-xl md:text-3xl text-[#3C4043]"
            >
              U
            </span>
            <span
              id="ch4"
              className="lato font-black text-xl md:text-3xl text-[#3C4043]"
            >
              R
            </span>
            <span
              id="ch5"
              className="lato font-black text-xl md:text-3xl text-[#3C4043]"
            >
              A
            </span>
            <span
              id="ch6"
              className="lato font-black text-xl md:text-3xl text-[#3C4043]"
            >
              C
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-5">
          <CTA
            style={{
              height: mediaMatch ? 40 : 30,
              padding: mediaMatch ? '12px 20px' : '8px 12px',
            }}
            id={'topbar'}
          />
          <ActionIcon
            variant="transparent"
            size={'xl'}
            onClick={() => setMenuOpen(true)}
          >
            <IconMenu size={30} />
          </ActionIcon>
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
                  {navItems
                    .slice(0, navItems.length/2)
                    .map(({ text, link, onclick }, index) => (
                      <NavItemComponent
                        index={index}
                        text={text}
                        link={link}
                        onclick={onclick}
                        closeModal={() => setMenuOpen(false)}
                      />
                    ))}
                </div>
                <div className="md:w-1/2 w-full">
                  {navItems
                    .slice(navItems.length/2, navItems.length)
                    .map(({ text, link, onclick }, index) => (
                      <NavItemComponent
                        index={index + navItems.length/2}
                        text={text}
                        link={link}
                        onclick={onclick}
                        closeModal={() => setMenuOpen(false)}
                      />
                    ))}
                </div>
              </div>
              <br />
              <br />
              <div className="flex justify-between m-auto text-xs font-light md:w-4/5 w-full ">
                <div>All rights reserved 2022</div>
                <div className="flex gap-5">
                  {socialItems.map(({ icon, link, text }) => (
                    <SocialLink icon={icon} link={link} text={text} />
                  ))}
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
      </Header>
  );
}

const navItems = [
  { text: 'Home', onclick: () => void 0, link: '/' },
  { text: 'Why Miurac', onclick: () => void 0, link: '/why-miurac' },
  { text: 'Startup', onclick: () => void 0, link: '/startup' },
  { text: 'Business', onclick: () => void 0, link: '/business' },
  { text: 'Investor', onclick: () => void 0, link: '/investor' },
  { text: 'About', onclick: () => void 0, link: '/about' },
  { text: 'Case study', onclick: () => void 0, link: '/case-study' },
  { text: 'Careers', onclick: () => void 0, link: '/career' },
  { text: 'Show Case', onclick: () => void 0, link: '/showcase' },
  { text: 'Contact us', onclick: () => void 0, link: '/contact' },
];

export const socialItems = [
  // { icon: <IconBrandInstagram />, text: 'Instagram', link: '' },
  { icon: <IconBrandLinkedin />, text: 'Linked In', link: 'https://www.linkedin.com/company/74319023/' },
  // { icon: <IconBrandYoutube />, text: 'Youtube', link: '' },
];

const NavItemComponent = ({
  index,
  text,
  link,
  onclick,
  closeModal,
}: {
  index: number;
  text: string;
  link?: string;
  onclick: () => void;
  closeModal: () => void;
}) => {
  const CoreComponent = () => (
    <div
      onClick={() => {
        onclick();
        closeModal();
      }}
      className="md:p-8 p-3 hover:bg-[#434348] hover:text-white text-xl roie font-normal rounded-xl cursor-pointer"
    >
      <div className="block ml-10 ">
        <span className="text-sm"> {index + 1} &ensp;</span>
        <span>{text}</span>
      </div>
    </div>
  );
  if (link)
    return (
      <Link to={link}>
        <CoreComponent />
      </Link>
    );
  else return <CoreComponent />;
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
    <a href={link} target='_blank' rel="noreferrer"  >
      <div className="flex items-center gap-1">
        {icon}
        {media && text}
      </div>
    </a>
  );
};
