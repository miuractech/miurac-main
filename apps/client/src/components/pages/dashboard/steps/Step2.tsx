import React from 'react';
import bulbImg from '../../../images/icons/bulb.svg';
import { Button, TextInput } from '@mantine/core';
import { CloseButton } from '@mantine/core';
import backBtn from '../../../images/icons/backbtn.svg';

interface Step2Props {
    nextStep: () => void;
    prevStep: () => void;
}


export default function Step2(props: Step2Props){
    return(
        <div>
            <div className="bg-[#1798F4] relative rounded-[15px] h-[400px] flex flex-col justify-center items-center">
                        <button onClick={props.prevStep}>
                            <img src={backBtn} alt='backBtn' className='absolute left-3 top-3'/>
                        </button>
                        <CloseButton size={45} color='black' className='absolute right-3 top-2'/>
                <div className="flex justify-center items-center">
                    <div>
                        <img src={bulbImg} alt="bulb" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-white font-bold text-[22px] p-3'>Enter name of your brand:</h3>
                        <TextInput 
                            placeholder="ex: Zomato" 
                            className="w-[300px] h-[40px] p-3 rounded-[20px]" 
                        />
                        <Button 
                            onClick={props.nextStep}
                            className="w-[80%] h-[40px] mt-[80px] block mx-auto bg-black text-[16px] text-white px-5  rounded-[10px] hover:bg-black">
                            Next
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}