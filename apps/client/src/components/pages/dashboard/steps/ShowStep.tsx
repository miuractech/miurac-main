import React from 'react';
import Detail1 from "../details/Detail1";
import Detail2 from "../details/Detail2";
import Detail3 from "../details/Detail3";
import Step2 from "./Step2";
import Step1 from "./Step1";
import { useState } from "react";
import { Link } from 'react-router-dom';
import miuracLogo from '../../../images/miurac-logo-das.svg';
import homeIcon from '../../../images/icons/homeicon.svg';


export default function ShowStep(){
    const [step , setStep] = useState(0);
    
    const goNextStep = () => {
        console.log('next step');
        
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    const setInit = () => {
        setStep(0);
    }

    const show = () => {
        switch(step){
            case 0:
                return <Step1 nextStep={goNextStep} />
            case 1:
                return <Step2 nextStep={goNextStep} prevStep={prevStep} setInit={setInit} />
            case 2:
                return <Detail1 nextStep={goNextStep} prevStep={prevStep} setInit={setInit} />
            case 3:
                return <Detail2 nextStep={goNextStep} prevStep={prevStep} setInit={setInit} />
            case 4:
                return <Detail3 nextStep={goNextStep} prevStep={prevStep} setInit={setInit} />
            default:
                return <Step1 nextStep={goNextStep} />
            
        }
    };


    return(
        <div className='flex'>
            <div 
                className='w-[25vw] bg-black h-[100vh]'
                style={{'transform':'translateY(-70px)'}}
            >
                <div className='px-2 m-[18px] my-4 relative'>
                    <h2 className='text-white text-[28px] font-bold mt-4 mb-4'>Miurac Logo</h2>
                </div>
                <ul>
                    <Link to="/">
                        <div className='flex bg-[grey] my-[20px] border-white border-l-4 rounded-[8px] ml-2 p-4'>
                            <img src={homeIcon} alt='homeIcon' />
                            <li className='text-white px-3 bg-[grey]'>Home</li>
                        </div>
                    </Link>
                </ul>
            </div>
            <div className='w-[75vw] p-3'>
                {show()}
            </div>
        </div>
    );
}