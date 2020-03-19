import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import { Page, Navbar, NavRight, Link, LoginScreenTitle } from "framework7-react";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { renderToString } from 'react-dom/server'
import {
  LOGIN,
  CREATE_USER,
  LOCAL_LOG_IN
} from "./AuthQueries";
import { f7 } from 'framework7-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle  } from '@fortawesome/free-solid-svg-icons'


export default ({loginClose}) => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const password = useInput("");
  const email = useInput("");
  const requestSecretMutation = useMutation(LOGIN, {
    variables: { email: email.value, password: password.value }
  });
  const createAccountMutation = useMutation(CREATE_USER, {
    variables: {
      email: email.value,
      username: username.value,
      password: password.value
    }
  });
  
  const localLogInMutation = useMutation(LOCAL_LOG_IN);

  const notiToast = (options) => {
    Object.assign(f7.notiToast.params, options)
    let a = f7.notiToast;
   
    f7.notiToast.open()
  }
  const onSubmit = async e => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "" && password.value !== "") {
        try {
          const {
            data: { login }
          } = await requestSecretMutation();
          if (!login) {
            
            notiToast({ text:"Y4ou dont have an account yet, create one"})
            setTimeout(() => setAction("signUp"), 3000);
          } else {
            const token = login;
            localLogInMutation({ variables: { token } }).then(rsp => window.location.href="/")
            
          }
        } catch {
          notiToast({text: "Can't request secret, try again"});
        }
      } else {
        notiToast({text: 'I\'m with icon'});
        notiToast({ text:"Email is required"})
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        password.value !==""
      ) {
        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();
          if (!createAccount) {
            notiToast({ text:"Can't create account"})
          } else {
            notiToast({ text:"Account created! Log In now"})
            setTimeout(() => setAction("logIn"), 3000);
          }
        } catch (e) {
          notiToast({ text:e.message});
        }
      } else {
        notiToast({ text:"All field are required"})
      }
    }
  };

  return (
    <Page loginScreen>
      <Navbar title="Login Screen">
        <NavRight>
          <Link onClick={loginClose}>Close</Link>
        </NavRight>
      </Navbar>
      <LoginScreenTitle>Framework7</LoginScreenTitle>
      <AuthPresenter
        setAction={setAction}
        action={action}
        username={username}
        email={email}
        password={password}
        onSubmit={onSubmit}
      />
    </Page>
  );
};
