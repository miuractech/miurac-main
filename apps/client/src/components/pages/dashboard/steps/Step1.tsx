import React from "react";
import StartImg from '../../../images/StartPageImg.svg';

interface step1Props {
    nextStep : () => void;
}

export default function Step1(props : step1Props){
    return(
        <div className="w-full">
            <div
                className="w-full rounded-[15px] h-[230px]  p-3 bg-cover bg-center justify-center text-center items-center"
                style={{backgroundImage: `url(${StartImg})`}} 
                >
                <h3 className="p-3 font-bold text-[22px] text-white">Welcome To Miurac</h3>
                <p className="font-[500] text-[14px] text-white tracking-[1px]">We build your requirements into apps!</p>
                <button 
                    onClick={props.nextStep}
                    className="bg-white text-[14px] w-[200px] text-black px-3 py-2 rounded-[10px] my-2 hover:bg-blue-400">
                        Start New Project
                </button>
            </div>
            <div className="my-2 mx-2">
                <h2 className="font-bold text-[18px]">Your Projects:</h2>
                <button 
                    onClick={props.nextStep}
                    className="w-[180px] h-[180px] my-2 flex flex-col justify-center items-center border-[#782DED] rounded-[20px] border-2 border-dashed">
                    <h2 className="text-[#782DED] text-[32px] p-2">+</h2>
                    <p className="text-[#782DED] text-[18px] p-2">Add Project</p>
                </button>
            </div>
        </div>
    );
}