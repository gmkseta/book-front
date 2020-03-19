import React from 'react';
import { Page, Swiper, SwiperSlide, Button, LoginScreen, View, Row, Col } from 'framework7-react';
import styled from "styled-components";
import LoginPage from '../Components/Auth'


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
  };
  this.closeHandler = this.closeHandler.bind(this);
  
}
closeHandler(e) {
  this.setState({loginScreenOpened: false})
}

render() {
  return(
    <Page className="page-intro">
      <FullSwiper pagination>
        <SwiperSlide><IntroImage src="https://insomenia.com/svgs/couple"/></SwiperSlide>
        <SwiperSlide><IntroImage src="https://insomenia.com/svgs/couple"/></SwiperSlide>
        <SwiperSlide>
          <IntroImage src="https://insomenia.com/svgs/couple"/>
          <br/>
          <Row>
            <Col/>
            <Col>
              <Button raised large fill onClick={() => {this.setState({loginScreenOpened : true})}}>시작하기</Button>
            </Col>
            <Col/>
          </Row>
        </SwiperSlide>
      </FullSwiper>
      <LoginScreen opened={this.state.loginScreenOpened} onLoginScreenClosed={() => {this.setState({loginScreenOpened : false})}}>
        <LoginPage loginClose={this.closeHandler}/>
      </LoginScreen> 
    </Page>
  )
}

}