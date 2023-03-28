import React from 'react';
import { Button, TextInput } from '@mantine/core';
import targetImg from '../../../images/target.svg';
import { CloseButton } from '@mantine/core';
import backBtn from '../../../images/icons/backbtn.svg';
import { Chip } from '@mantine/core';

interface Detail1Props {
    nextStep: () => void;
    prevStep: () => void;
}


export default function Detail1(props: Detail1Props) {
    const [value, setValue] = React.useState<string[]>([]);

    console.log(value);
    


    return(
        <div>
            <div className="bg-[#DEBF43] h-[500px] relative rounded-[20px] p-3">
                    <button onClick={props.prevStep}>
                        <img src={backBtn} alt='backBtn' className='absolute left-3 top-3'/>
                    </button>
                    <CloseButton size={45} color='black' className='absolute right-3 top-2'/>
                <div>
                    <h5 className="text-center text-black text-[12px] p-2">1/7</h5>
                </div>
                <div className='flex flex-col h-full justify-center items-center'>
                    <div className="flex justify-center items-center">
                        <div>
                            <img src={targetImg} alt="target" />
                        </div>
                        <div>
                            <h3 className="text-white text-[24px] font-bold">Select your Requirement:</h3>
                            <div>
                                <Chip.Group 
                                        className='w-[80%] m-3'
                                        multiple={true} 
                                        value={value} 
                                        onChange={setValue}>
                                    <Chip className='p-2 border-none outline-none' value="website">Website</Chip>
                                    <Chip className='p-2 border-none outline-none' value="app">App</Chip>
                                    <Chip className='p-2 border-none outline-none' value="web-app">Web App</Chip>
                                    <Chip className='p-2 border-none outline-none' value="software">Software</Chip>
                                    <Chip className='p-2 border-none outline-none' value="other">Other</Chip>
                                </Chip.Group>
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