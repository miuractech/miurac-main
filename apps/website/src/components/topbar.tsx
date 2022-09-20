import React, { useState } from 'react'
import { AppShell, Burger, Header } from "@mantine/core"
import { Logo } from '@miurac/resources'
import Index from './sidenav'
// import Logo from "@miurac/resources"
type Props = {
    children:JSX.Element
}

export default function Topbar({children}: Props) {
    const [dropDown, setDropDown] = useState(false)
  return (
    <AppShell
     
      padding={0}
    //   navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
      header={<Header 
        fixed
        className='a-p flex justify-between bg-transparent'
      height={60} p="xs" px="xl">
        <div className="flex items-center">
        <Logo height={40} imgProps={{className:"mr-2"}} /> 
        <span className='lato font-black text-3xl text-[#3C4043] a-c' >
        M
        </span>
        <span className='lato font-black text-3xl text-[#3C4043]'>
        I
        </span>
        <span className='lato font-black text-3xl text-[#3C4043]'>
        U
        </span>
        <span className='lato font-black text-3xl text-[#3C4043]'>
        R
        </span>
        <span className='lato font-black text-3xl text-[#3C4043]'>
        A
        </span>
        <span className='lato font-black text-3xl text-[#3C4043]'>
        C
        </span>
        </div>
        <div>
            {/* <Burger opened={dropDown} onClick={()=>setDropDown(t=>!t)} /> */}
            <Index />
        </div>
        </Header>}
    >
      {children}
    </AppShell>
  )
}