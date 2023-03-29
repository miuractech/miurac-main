import React from "react";
import { useState } from "react";
import { Button , TextInput } from "@mantine/core";
import { CloseButton } from '@mantine/core';
import { IconReload } from "@tabler/icons";
import backBtn from '../../../images/icons/backbtn.svg';
import paintBrushImg from '../../../images/paint-brush.svg';
import paintPalleteImg from '../../../images/paint-palette.svg';
import { Select , ActionIcon, ColorInput } from '@mantine/core';
import greenGradient from '../../../images/GreenGradient.svg';
import closeIcon from '../../../images/icons/closeIcon.svg';


const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

interface Detail2Props {
    nextStep: () => void;
    prevStep: () => void;
    setInit : () => void;
}


export default function Detail2(props: Detail2Props) {
    const [value, onChange] = useState(randomColor());

    return(
        <div className="w-full">
            <div
                style={{ backgroundImage: `url(${greenGradient})` }} 
                className="h-[500px] relative rounded-[20px] p-3">
                    <button onClick={props.prevStep}>
                        <img src={backBtn} alt='backBtn' className='absolute left-3 top-3'/>
                    </button>
                    <button onClick={props.setInit}>
                            <img src={closeIcon} alt='closeBtn' className='absolute right-3 top-3' />
                    </button>
                    {/* <CloseButton size={45} color='black' className='absolute right-3 top-2'/> */}
                <div>
                    <h5 className="text-center text-black text-[12px] p-2">2/7</h5>
                </div>
                <div className='flex flex-col h-full justify-center items-center'>
                    <div className="flex justify-center items-center">
                        <div>
                            <img src={paintBrushImg} alt="paintBrushImg" />
                        </div>
                        <div>
                            <h3 className="text-white text-[24px] font-bold">Do you have any brand or sentiment color?</h3>
                            <div className="flex justify-center items-center m-4">
                                <img src={paintPalleteImg} alt="paintPalleteImg" className="mr-2" />
                                <h5 className="text-white">Base Color : {' '}</h5>
                                <ColorInput
                                        className="w-[200px] ml-2"
                                        placeholder="Pick color"
                                        value={value}
                                        onChange={onChange}
                                        rightSection={
                                            <ActionIcon onClick={() => onChange(randomColor())}>
                                                <IconReload size="1rem" />
                                            </ActionIcon>
                                        }
                                />
                                
                            </div>
                            
                            <Button 
                                onClick={props.nextStep}
                                className="w-[80%] h-[40px] mt-[80px] block mx-auto bg-black text-[16px] text-white px-5  rounded-[10px] hover:bg-black">
                                Next
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}