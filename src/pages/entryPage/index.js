import React, { useEffect, useState } from "react";
import SignIn from "../../components/signInForm";
import SignUp from "../../components/signUpForm";
import "./index.scss";
export default function EntryPage() {
  const [signInOrSignUp, setSignInOrSignUp] = useState("signUp");
  function setSignIn() {
    setSignInOrSignUp("signIn");
    let selectedDOM = document.getElementById("welcome-form");
    selectedDOM.classList.remove("toLeft");
    selectedDOM.classList.add("toRight");
  }
  function setSignUp() {
    setSignInOrSignUp("signUp");
    let selectedDOM = document.getElementById("welcome-form");
    selectedDOM.classList.remove("toRight");
    selectedDOM.classList.add("toLeft");
  }
  return (
    <div className="formContainer" id="welcome-form">
      <div className="absolute-welcome-left">
        <h1>Welcome to CovidGlobal</h1>
        <p>Please sign up so you can see the work of our data analysist team</p>
      </div>
      <div className="absolute-welcome-right">
        <h1>Welcome back to CovidGlobal</h1>
        <p>Please sign in to continue getting the latest Covid infomation</p>
      </div>
      <div className="formContainer__welcome">
        <div className="formContainer__welcome--content">
          {signInOrSignUp === "signIn" ? (
            <>
              <button className="nav-button signup-button" onClick={setSignUp}>
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button className="nav-button signin-button" onClick={setSignIn}>
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
      {signInOrSignUp === "signIn" ? (
        <SignIn />
      ) : (
        <SignUp currentPage={setSignInOrSignUp} />
      )}
    </div>
  );
}

const clickedButtonStyle = {
  backgroundColor: "#ec3333",
  color: "white",
  fontWeight: "700",
  border: "none",
};
{
  /* <div className="button-container">
        <button
          className="nav-button signin-button"
          onClick={setSignIn}
          style={signInOrSignUp === "signIn" ? clickedButtonStyle : {}}
        >
          Sign In
        </button>
        <button
          className="nav-button signup-button"
          onClick={setSignUp}
          style={signInOrSignUp === "signUp" ? clickedButtonStyle : {}}
        >
          Sign Up
        </button>
      </div>
      {window.screen.width < 769 ? (
        <></>
      ) : (
        <div className="welcome-container">
          <div className="welcome-message">
            <p className="welcome-title">Welcome to&nbsp;</p>
            <p className="page-name">CovidGlobal</p>
            <p className="page-missions">
              Our missions is to inform you the latest news about Covid-19
              around the world and best analytical data about the destruction of
              the virus.
            </p>
          </div>
        </div>
      )}
      {signInOrSignUp === "signIn" ? (
        <SignIn />
      ) : (
        <SignUp currentPage={setSignInOrSignUp} />
      )} */
}
