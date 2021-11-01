import { signInWithPopup } from "@firebase/auth";
import { Button } from "@mui/material";
import React, { ReactElement } from "react";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../features/userSlice";
import { auth, provider } from "../../firebase";
import "./Login.css";

interface Props {}

function Login({}: Props): ReactElement {
  const dispatch = useAppDispatch();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt="Google Mail Logo"
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
