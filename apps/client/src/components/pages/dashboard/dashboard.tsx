import React from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Detail1 from "./details/Detail1";
import Detail2 from "./details/Detail2";




export default function Dashboard(){
    return(
        <div className="p-3">
            {/* <Step2 />
             */}
            <Detail1 />
        </div>
    );
}