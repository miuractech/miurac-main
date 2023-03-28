import React from 'react';
import Detail1 from "../details/Detail1";
import Detail2 from "../details/Detail2";
import Detail3 from "../details/Detail3";
import Step2 from "./Step2";
import Step1 from "./Step1";
import { useState } from "react";
import { Link } from 'react-router-dom';
import miuracLogo from '../../../images/miurac-logo-das.svg';


export default function ShowStep(){
    const [step , setStep] = useState(0);
    
    const goNextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    const show = () => {
        switch(step){
            case 0:
                return <Step1 nextStep={goNextStep} />
            case 1:
                return <Step2 nextStep={goNextStep} prevStep={prevStep}/>
            case 2:
                return <Detail1 nextStep={goNextStep} prevStep={prevStep}/>
            case 3:
                return <Detail2 nextStep={goNextStep} prevStep={prevStep}/>
            case 4:
                return <Detail3 nextStep={goNextStep} prevStep={prevStep}/>
            default:
                return <Step1 nextStep={goNextStep} />;
            
        }
    };


    return(
        <div className='flex'>
            <div className='w-[30vh] bg-black h-[90vh]'>
                <div className='px-2 m-[18px]'>
                    <img src={miuracLogo} alt='miuracLogo' />
                </div>
                <ul>
                    <Link to="/">
                        <li className='text-white p-3 bg-[grey]'>Home</li>
                    </Link>
                </ul>
            </div>
            <div className='w-[70vh] p-3'>
                {show()}
            </div>
        </div>
    );
}