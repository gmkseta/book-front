import React from 'react';
import { Page, Swiper, SwiperSlide, Button, Link, Navbar, NavRight, ListButton, LoginScreen, BlockFooter, LoginScreenTitle, ListInput, List, Row, Col } from 'framework7-react';
import styled from "styled-components";

const IntroImage = styled.img`
  max-width:80%;max-height:80%;margin-top:30%;
`
const FullSwiper = styled(Swiper)`
  height:100%;
  background-color: white;
  text-align: center;
`

export default class extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      loginScreenOpened: false,
      username: '',
      password: '',
    };
  }
  render() {
    return(
      <Page className="page-intro">
        <FullSwiper pagination>
          <SwiperSlide><IntroImage src="https://insomenia.com/svgs/couple"/></SwiperSlide>
          <SwiperSlide><IntroImage src="https://insomenia.com/svgs/couple"/></SwiperSlide>
          <SwiperSlide>
            <IntroImage src="https://insomenia.com/svgs/couple"/>
            <Row>
              <Col tag="span">
              <Button raised large fill onClick={() => {this.setState({loginScreenOpened : true})}}>Open Via Prop Change</Button>
              </Col>
            </Row>
          </SwiperSlide>
        </FullSwiper>
        <LoginScreen className="demo-login-screen" opened={this.state.loginScreenOpened} onLoginScreenClosed={() => {this.setState({loginScreenOpened : false})}}>
          <Page loginScreen>
            <Navbar title="Login Screen">
              <NavRight>
                <Link onClick={()=>this.setState({loginScreenOpened: false})}>Close</Link>
              </NavRight>
            </Navbar>
            <LoginScreenTitle>Framework7</LoginScreenTitle>
            <List form>
              <ListInput
                label="Username"
                type="text"
                placeholder="Your username"
                value={this.state.username}
                onInput={(e) => {
                  this.setState({ username: e.target.value});
                }}
              />
              <ListInput
                label="Password"
                type="password"
                placeholder="Your password"
                value={this.state.password}
                onInput={(e) => {
                  this.setState({ password: e.target.value});
                }}
              />
            </List>
            <List>
              <ListButton onClick={this.signIn.bind(this)}>Sign In</ListButton>
              <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
            </List>
          </Page>
        </LoginScreen> 
      </Page>
    )
  }
  signIn() {
    const self = this;
    const app = self.$f7;
    app.dialog.alert(`Username: ${self.state.username}<br>Password: ${self.state.password}`, () => {
      app.loginScreen.close();
    });
  }
}