import React from "react";
import { Button , TextInput } from "@mantine/core";
import { CloseButton } from '@mantine/core';
import backBtn from '../../../images/icons/backbtn.svg';
import paintBrushImg from '../../../images/paint-brush.svg';
import paintPalleteImg from '../../../images/paint-palette.svg';
import { Select } from '@mantine/core';

export default function Detail2() {
    return(
        <div>
            <div className="bg-[#19CC8B] h-[500px] relative rounded-[20px] p-3">
                    <img src={backBtn} alt='backBtn' className='absolute left-3 top-3'/>
                    <CloseButton size={45} color='black' className='absolute right-3 top-2'/>
                <div>
                    <h5 className="text-center text-black text-[12px] p-2">2/7</h5>
                </div>
                <div className='flex flex-col h-full justify-center items-center'>
                    <div className="flex justify-center items-center">
                        <div>
                            <img src={paintBrushImg} alt="paintBrushImg" />
                        </div>
                        <div>
                            <h3 className="text-white text-[24px] font-bold">Select your Requirement:</h3>
                            <div className="flex justify-center items-center m-4">
                                <img src={paintPalleteImg} alt="paintPalleteImg" className="mr-2" />
                                <h5 className="text-white">Base Color :{' '}</h5>
                                
                                
                            </div>
                            
                            <Button 
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