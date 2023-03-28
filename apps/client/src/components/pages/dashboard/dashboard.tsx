import React from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Detail1 from "./details/Detail1";
import Detail2 from "./details/Detail2";
import Detail3 from "./details/Detail3";
import ShowStep from "./steps/ShowStep";





export default function Dashboard(){
    return(
        <div>
            {/* <Step2 />
             */}
            {/* <Detail3 /> */}
            <ShowStep />
        </div>
    );
}