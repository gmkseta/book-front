import React from "react";
import { Helmet } from "react-helmet";

import Input from "../../Components/Input";

import { List, ListInput, ListButton, BlockFooter, Button, Col, Row } from 'framework7-react';

export default ({
  action,
  username,
  email,
  password,
  setAction,
  onSubmit,
}) => (
  <div>
    
      {action === "logIn" && (
            <List form onSubmit={onSubmit}>
              <Helmet>
                <title>Log In | Prismagram</title>
              </Helmet>
              <ListInput label="Email" {...email}
                type="email" placeholder="Your e-mail" 
              />
              <ListInput label="Password" {...password}
                type="password" placeholder="Your password"
              />
              <Row>
                <Col/>
                <Col>
                  <Button raised fill type='submit'>Log in</Button>
                </Col>
                <Col/>
              </Row>
            </List>
        )}
        {action === "signUp" && (
          <List form onSubmit={onSubmit}>
            <Helmet>
              <title>Sign Up | Prismagram</title>
            </Helmet>
            <Input placeholder={"Email"} {...email} type="email" />
            <Input placeholder={"Email"} {...password} type="password" />
            <Input placeholder={"Username"} {...username} />
            <ListButton text={"Sign up"} />
          </List>
        )}
      
    <List>
    
      {action === "logIn" ? (
        <>
          <ListButton onClick={() => setAction("signUp")}>Sign In</ListButton>
          <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
        </>
      ) : (
        <>
          <ListButton onClick={() => setAction("logIn")}>Sign In</ListButton>
          <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
          
        </>
      )}    
  </List>
  </div>
);
