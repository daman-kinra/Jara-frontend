"use client";

import React, { useContext } from "react";
import { AUTH } from "../../context/AuthContext";

function ClientComponent() {
  console.log("client component");
  const { isLoggedIn, setIsLoggedIn } = useContext(AUTH);
  return (
    <div>
      {isLoggedIn ? (
        <button>Hello User</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Please Login</button>
      )}
    </div>
  );
}

export default ClientComponent;
