import React from "react";
import Login from "../login/Login";
import Signup from "../signup/Signup";

export default function Initial(){

    const [login , showLogin] = React.useState(true);

    const handleLogin = () => {
            showLogin(true);
    };
        
    const handleSignup = () => {
            showLogin(false);
    };

    return(
        <div>
            {
                login 
                ? <Login clickFunction={handleSignup}/>
                : <Signup clickFunction={handleLogin}/>
            }
        </div>
    );
}