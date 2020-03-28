import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import { Page, Navbar, NavRight, Link, LoginScreenTitle } from "framework7-react";
import useInput from "../../Hooks/useInput";
import { useMutation } from "@apollo/react-hooks";

import {
  LOGIN,
  CREATE_USER,
  LOCAL_LOG_IN
} from "./AuthQueries";
import { f7 } from 'framework7-react';

import { renderToString } from 'react-dom/server'
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
    if(!f7.notiToast.params.isOpen){
      Object.assign(f7.notiToast.params, options)
      f7.notiToast.params.setOption()
      f7.notiToast.open()
    }
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
            notiToast({ text:"You dont have an account yet, create one"})
            setTimeout(() => setAction("signUp"), 3000);
          } else {
            const token = login;
            localLogInMutation({ variables: { token } }).then(rsp => window.location.href="/")
          }
        } catch(err) {
          if(err.graphQLErrors.length){
            notiToast({text: err.graphQLErrors[0].message, icon: renderToString(<FontAwesomeIcon icon={faExclamationTriangle}/>)});
          }else{
            notiToast({text: err.message});
          }
        }
      } else {
        notiToast({ text:"All field are required"})
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        password.value !==""
      ) {
        try {
          const {
            data: { createUser }
          } = await createAccountMutation();
          if (!createUser) {
            notiToast({ text:"Can't create account"})
          } else {
            notiToast({ text:"Account created! Log In now"})
            setTimeout(() => setAction("logIn"), 3000);
          }
        } catch (err) {
          if(err.graphQLErrors.length){
            notiToast({text: "이메일이 중복 되었습니다."});
          }else{
            notiToast({text: err.message});
          }
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
      <LoginScreenTitle>
        {action === "logIn" && ( '로그인 하셈여!' )}{action === "signUp" && ( '회원가입 하셈여!' )}
      </LoginScreenTitle>
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
