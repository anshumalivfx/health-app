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
  // const SignUpTest = (e) => {
  //   const fullname = document.querySelector("#displayname").value;

  //   const email = document.querySelector("#email").value;
  //   const uid = "Xsndskdnkjdbkjdbjkdjkdkjdjkdj";
  //   e.preventDefault();
  //   const data = { uid: uid, name: fullname, email: email };
  //   fetch("/create_new_user", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };
  const signUp = () => {
    const fullname = document.querySelector("#displayname").value;

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmpassword = document.querySelector("#conpassword").value;
    if (fullname === "") {
      alert("Enter Your Full Name");

      document.querySelector("#password").value = "";
      document.querySelector("#conpassword").value = "";
      return;
    }

    if (password !== confirmpassword) {
      alert("password Doesn't Match, Please try Again");
      document.querySelector("#password").value = "";
      document.querySelector("#conpassword").value = "";
      return;
    }

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Signedup");
        u.user.updateProfile({
          displayName: fullname,
        });
        const data = {
          uid: u.user.uid,
          name: fullname,
          email: email,
          password: password,
        };
        fetch("/create_new_user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((res) => console.log(res));
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
        alert(err.toString());
      });
  };

  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer action="">
        <Input type="text" placeholder="Full Name" id="displayname" />
        <Input type="email" placeholder="Email" id="email" />
        <Input type="password" placeholder="Password" id="password" />
        <Input
          type="password"
          placeholder="Confirm Password"
          id="conpassword"
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={signUp}>
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
