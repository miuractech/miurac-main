import React, { Children } from 'react'
type Props = {
  children: JSX.Element
}
export default function Content(props: Props) {
  return (
    <div className='px-8 max-w-[1440px] mx-auto'>
      {props.children}
    </div>
  )
}