import React from "react";
import { getAuth } from "firebase/auth";


export default function Dashboard() {

    const auth = getAuth();
    const handleLogout = () => {
        auth.signOut();
    }


  return (
    <div>
      
    </div>
  );
}