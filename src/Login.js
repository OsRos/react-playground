import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function Login() {
  console.log("in login")  
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <>
      <button onClick={loginWithRedirect}>Login</button>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Login;
