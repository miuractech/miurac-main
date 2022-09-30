import React from 'react'
import LOGO from "./assets/logoSmall.svg";
type Props = {
    imgProps?:React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
    height?:number
    width?:number
    dark?:boolean
}

export function Logo({height,width, dark,imgProps}: Props) {
  return (
    <img src={LOGO} style={{width:width??'auto', height:height??"unset"}} alt="Edufeat-logo" {...imgProps} />
  )
}