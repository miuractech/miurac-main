import React from "react";
import { getAuth } from "firebase/auth";


export default function Dashboard() {

    const auth = getAuth();
    const handleLogout = () => {
        auth.signOut();
    }


  return (
    <div>
      <h1>
        <button onClick={handleLogout}>Logout</button>
      </h1>
      <div className="">

      </div>
      <div>

      </div>
    </div>
  );
}