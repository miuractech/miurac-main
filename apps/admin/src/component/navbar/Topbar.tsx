import { AppShell, Burger, Header } from '@mantine/core';
import React, { useState } from 'react';
// import Logo from './Logo';
import LeftBar from './leftBar';
import { useMediaQuery } from '@mantine/hooks';
import { Logo } from '@miurac/resources';
export function NavBar({ children }: { children: React.ReactNode }) {
  const [tooglesize, setTooglesize] = useState(true);
  const [open, setOpen] = useState(false);
  const mediaQuery = useMediaQuery('(min-width: 640px)');
  return (
    <AppShell
      padding="md"
      navbar={
        <LeftBar
          tooglesize={tooglesize}
          setTooglesize={setTooglesize}
          open={open}
          setOpen={setOpen}
        />
      }
      header={
        <Header
          className=" text-left flex justify-between"
          height={60}
          p="xs"
        >
          <div className='flex items-center text-2xl font-semibold abeezee' >
            <Logo height={40} />
            MIURAC
          </div>
          {!mediaQuery && (
            <Burger
              opened={open}
              onClick={() => setOpen((o) => !o)}
              color="white"
            />
          )}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors['dark'][8]
              : theme.colors['gray'][0],
        },
      })}
    >
      <div>
        {children}
      </div>
    </AppShell>
  );
}
