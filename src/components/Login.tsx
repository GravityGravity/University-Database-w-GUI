import React, { useState } from "react";
import logincss from "./Login.module.css";
import { checkUser } from "./user";
import { globalRole } from "./user";

let boolcheck = -1;

function LoginPage() {
  const [loginUserID, setloginUserID] = useState();
  const [loginpassword, setloginPassword] = useState();

  const handleUserIDInput = (event) => {
    setloginUserID(event.target.value);
  };

  const handlePassInput = (event) => {
    setloginPassword(event.target.value);
  };

  return (
    <>
      <div className={logincss.NotCan}>
        <div className={logincss.header}>
          <div className="text"> Racoon University Login </div>
        </div>
        {/* {buttontype()} */}
        <div className={logincss.inputs}>
          <div className={logincss.input}>
            <img
              className={logincss.loginIcons}
              src="./src/assets/user-icon.png"
            ></img>
            <input
              type="userID"
              placeholder="   USERID"
              onChange={handleUserIDInput}
            ></input>
          </div>
          <div className={logincss.input}>
            <img
              className={logincss.loginIcons}
              src="./src/assets/pass-icon.png"
            ></img>
            <input
              type="password"
              placeholder="   PASSWORD"
              onChange={handlePassInput}
            ></input>
          </div>
        </div>
        <div className={logincss.submitbtun}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => check(loginUserID, loginpassword)}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

function buttontype( ) {
  switch (boolcheck) {
    default:
      return;

    case 1:
      return (
        <div className="alert alert-success mx-auto" role="alert">
          Login Succesful! Loading Profile
        </div>
      );
    case 0:
      return (
        <div className="alert alert-danger mx-auto" role="alert">
          Wrong UserID or Password! Please Try Again!
        </div>
      );
    }
}

function check(userID?: number, pass?: string) {
  console.log("Check Function");
    boolcheck = checkUser(userID, pass);
}

export default LoginPage;
