import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { Link } from "react-router-dom";

import fire from "../../config/fire";

export function LoginForm(props) {
  const login = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Login");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
        alert("Error: Only Guys with small pps enters incorrect login details");
      });
  };
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" id="email" />
        <Input type="password" placeholder="Password" id="password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />

      <SubmitButton type="submit" onClick={() => login()}>
        Signin
      </SubmitButton>

      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
