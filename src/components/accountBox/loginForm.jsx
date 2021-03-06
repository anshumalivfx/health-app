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

import fire, { users } from "../../config/fire";

export function LoginForm(props) {
  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      login();
    }
  };
  const login = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Login");
        users
          .push({
            name: u.user.displayName,
            email: u.user.email,
            password: password,
          })
          .then((u) => {
            console.log("Successfully Created database");
          })
          .catch((err) => {
            console.log("Error: " + err.toString());
          });
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
        alert(err.toString());
      });
  };
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="email"
          placeholder="Email"
          id="email"
          onKeyDown={(e) => onEnterPress(e)}
        />
        <Input
          type="password"
          placeholder="Password"
          id="password"
          onKeyDown={(e) => onEnterPress(e)}
        />
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
