import React, { useState } from 'react'
import {motion} from 'framer-motion';
import { TextInput, Title } from '@mantine/core';
import { IconMail, IconPhone } from '@tabler/icons';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line no-empty-pattern
export default function Contact({}: Props) {
  return (
    <motion.div
      key={'contact'}
      id={'contact'}
      className="w-screen template-shadow roie"
      style={{ background:"linear-gradient(90.54deg, #FBFBFD 0.06%, rgba(245, 245, 245, 0.97) 99.12%)", height:"100vh" }}
      initial={{ y:  "100vh"}}
      animate={{ y: 0,  zIndex:10}}
      exit={{  y:0, zIndex:0 }}
      transition={{duration:0.4,ease:'easeInOut'}}
    >
      <div className="h-16" />
        <div className="w-full rounded-xl flex flex-col gap-4 max-w-md h-52 m-auto bg-white p-5">
            <Title order={3} align='center' >
                Contact
            </Title>
           <div className="flex items-center justify-center">
            <IconMail />
            <div>
                Email: &ensp; 
            </div>
            <div>
                info@miurac.com
            </div>
           </div>

           <div className="flex items-center justify-center">
            <IconPhone />
            <div>
                Phone: &ensp; 
            </div>
            <div>
                8336801389
            </div>
           </div>
        </div>
    </motion.div>
  )
}