import { Loader } from '@mantine/core'
import React from 'react'

type Props = {
    fullPage?:boolean
}

export default function LoaderComponent({fullPage}: Props) {
  return (
    <div className={`flex justify-center align-middle flex-grow w-full ${fullPage?'h-screen':''}`} >
        <Loader />
    </div>
  )
}