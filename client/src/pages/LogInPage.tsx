import { Button } from "@mui/material";
import { CSSProperties, FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/context/LoginContext";
import { makeReq } from "../helper";

  export default function LogInPage() {
  const navigate = useNavigate();
  const { fetchUser, logIn, signUp} = useContext(UserContext);
  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const handleEmailChange = (e: any) => {
    setLogInEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setLogInPassword(e.target.value);
  };


  const handleSignUpEmailChange = (e: any) => {
    setSignUpEmail(e.target.value);
  };

  const handleSignUpPasswordChange = (e: any) => {
    setSignUpPassword(e.target.value);
  };

  const handleSubmit = () => {
    // let user = {
    //   email: logInEmail,
    //   password: logInPassword
    // }
    // handleLogin(user.email, user.password) 
  }

  const handleLogin = () => {
    // const existingUser = await logIn(email, password);
    // // jag får fel medelanden wrong password o email när jag logga in med rätt email och fel lösenord
    // if (!currentUser) {
    //   setFailedLogin(true)
    //   console.log(failedLogin)
    // } else 
    fetchUser();
    logIn(logInEmail, logInPassword);
    navigate("/");
  }


  const handleSignUp = () => {
    signUp(signUpEmail, signUpPassword);
    navigate('/');
  }


  return (
    <div style={container}>
      <div style={innerContainer}>
        <h2 style={textCenter}>Log In</h2>
        <div style={innerContainer}>
          <label htmlFor="email">Email</label>
          <input name="email" type="text" onChange={handleEmailChange}/>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" onChange={handlePasswordChange}/>
          <Button onClick={() => {
            handleLogin();
            }}
            >Log in</Button>
           {failedLogin ? "Wrong username or password" : undefined}
        </div>
        <h4 style={textCenter}>
          Don't have account? <br /> Sign up here!
        </h4>
        <div style={innerContainer}>
          <label htmlFor="email">Email</label>
          <input name="email" type="text" onChange={handleSignUpEmailChange} />
           
          <label htmlFor="password">Password</label>
          <input name="password" type="password" onChange={handleSignUpPasswordChange} />
          <Button onClick={handleSignUp}>Sign up</Button>
        </div>
      </div>
    </div>
  );
}

const container: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const textCenter: CSSProperties = {
  textAlign: "center",
};

const innerContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};
