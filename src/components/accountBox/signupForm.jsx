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
import fire from "../../config/fire";

export function SignupForm(props) {
  const signUp = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const fullname = document.querySelector("#displayname").value;
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Signedup");
        u.user.updateProfile({
          displayName: fullname,
        });
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
        alert(err.toString());
      });
  };

  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" id="displayname" />
        <Input type="email" placeholder="Email" id="email" />
        <Input type="password" placeholder="Password" id="password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={() => signUp()}>
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
