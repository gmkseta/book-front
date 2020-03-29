import React from "react";
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
          <ListInput label="Email" {...email}
            type="email" placeholder="Your e-mail" 
          />
          <ListInput label="Password" {...password}
            type="password" placeholder="Your password"
          />
          <Row>
            <Col/>
            <Col>
              <Button raised fill type='submit' className="sign-button">Log in</Button>
            </Col>
            <Col/>
          </Row>
        </List>
        )}
        {action === "signUp" && (
          <List form onSubmit={onSubmit}>
            <ListInput label="Email" {...email}
            type="email" placeholder="Your e-mail" 
            />
            <ListInput label="Password" {...password}
              type="password" placeholder="Your password"
            />
            <ListInput label="username" {...username}
            type="text" placeholder="Your User name" 
            />
            <Row>
              <Col/>
              <Col>
                <Button raised fill type='submit' className="sign-button">Sign Up</Button>
              </Col>
              <Col/>
            </Row>
          </List>
        )}
      
      {action === "logIn" ? (
        <List>
          <ListButton onClick={() => setAction("signUp")}>Sign Up</ListButton>
          <BlockFooter>로그인을 해서 다양한 책들을 만나보세요<br /> 수많은 책들이 당신의 리뷰를 기다리고있습니다.</BlockFooter>
        </List>

      ) : (
        <List>
          <ListButton onClick={() => setAction("logIn")}>Login</ListButton>
          <BlockFooter>회원가입을 해서 다양한 책들을 만나보세요<br /> 수많은 책들이 당신의 리뷰를 기다리고있습니다.</BlockFooter>
        </List>
      )}    
  </div>
);
