import {
  ActionIcon,
  Box,
  Drawer,
  Group,
  Navbar,
  ScrollArea,
  ThemeIcon,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconChevronLeft,
  IconChevronRight,
  IconFolder,
  IconHome,
  IconSchool,
  IconSettings,
  IconTestPipe,
  IconUser,
} from '@tabler/icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import LeftLink from './LeftLink';
import Logo from './Logo';

type Props = {
  tooglesize: boolean;
  setTooglesize: any;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LeftBar({
  tooglesize,
  setTooglesize,
  open,
  setOpen,
}: Props) {
  const theme = useMantineTheme();
  const mediaQuery = useMediaQuery('(min-width: 640px)');
  
  return(
  <div 
  // onMouseEnter={()=>setTooglesize(false)}
  // onMouseLeave={()=>setTooglesize(true)}
  >
    {mediaQuery ? (
      <Navbar
        sx={{ background: '#1e1e20', color: theme.white, top: 59,transition: 'width 0.3s', }}
        width={{ base: tooglesize ? 80 : 300 }}
        height={'calc(100% - 60px)'}
        p="md"
      >
        <NavSections tooglesize={tooglesize} setTooglesize={setTooglesize} />
      </Navbar>
    ) : (
      <Drawer
        position="right"
        // transition={"rotate-left"}
        sx={{ background: 'black', color: 'black', top: 59 }}
        opened={open}
        onClose={() => setOpen(false)}
      >
        {!mediaQuery && <Logo type="full" color="light" height={'40'} />}
        <NavSections
          tooglesize={tooglesize}
          setTooglesize={setTooglesize}
          setOpen={setOpen}
        />
      </Drawer>
    )}
    ;
  </div>);
}

type NavSectionsType = {
  tooglesize: boolean;
  setTooglesize: any;
  setOpen?: any;
};

export function NavSections({
  tooglesize,
  setTooglesize,
  setOpen,
}: NavSectionsType) {
  const mediaQuery = useMediaQuery('(min-width: 640px)');
  
  return (
    <>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px={"xs"}>
        <Box py="md">
          <LeftLink
            path={'/'}
            icon={<IconHome size={16} color="black" />}
            color="#e0e0e0"
            tooglesize={tooglesize}
            label={'Home'}
            setOpen={setOpen}
            name="Home"
          />
          { <LeftLink
            path={'/enquiry'}
            icon={<IconSchool size={16} color="black" />}
            color="#e0e0e0"
            tooglesize={tooglesize}
            label={'Enquiry'}
            setOpen={setOpen}
            name="Enquiry"
          />}
          {<LeftLink
            path={'/department'}
            icon={<IconFolder size={16} color="black" />}
            color="#e0e0e0"
            tooglesize={tooglesize}
            label={'Department'}
            setOpen={setOpen}
            name="Department"
          />}
        </Box>
      </Navbar.Section>
      {mediaQuery && (
        <Navbar.Section mx="-xs" px={"xs"}>
          <Box
            sx={(theme) => ({
              paddingLeft: theme.spacing.xs,
              paddingRight: theme.spacing.xs,
              paddingTop: theme.spacing.lg,
              borderTop: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors['dark'][4]
                  : theme.colors['gray'][2]
              }`,
            })}
          >
            <Group position="apart">
              <div />
              <ActionIcon
                variant="default"
                onClick={() => {
                  setTooglesize(!tooglesize);
                  if (setOpen) setOpen(false);
                }}
                size={30}
                sx={() => ({
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'black',
                  },
                })}
              >
                <ThemeIcon color={'#1e1e20'} variant="light">
                  {tooglesize ? (
                    <IconChevronRight color="white" size={16} />
                  ) : (
                    <IconChevronLeft color="white" size={16} />
                  )}
                </ThemeIcon>
              </ActionIcon>
            </Group>
          </Box>
           {/* <LeftLink
            path={'/testing'}
            name="Testing"
            icon={<IconTestPipe size={16} color="black" />}
            color="#e0e0e0"
            tooglesize={tooglesize}
            label={'Testing'}
            setOpen={setOpen}
          /> */}
        </Navbar.Section>
      )}
    </>
  );
}
