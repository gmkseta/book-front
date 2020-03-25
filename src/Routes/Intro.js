import React, { useState } from 'react';
import { Page, Swiper, SwiperSlide, Button, LoginScreen, Row, Col } from 'framework7-react';
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

export default ()=> {
  const [ loginScreenOpened, setLoginScreenOpened ] = useState(false);
  const closeHandler = (e) => {
    setLoginScreenOpened(false);
  }

  return(
    <Page className="page-intro">
      <FullSwiper pagination>
        <SwiperSlide><IntroImage src="images/books.jpg"/></SwiperSlide>
        <SwiperSlide><IntroImage src="images/books.jpg"/></SwiperSlide>
        <SwiperSlide>
          <IntroImage src="images/books.jpg"/>
          <br/>
          <Row>
            <Col/>
            <Col>
              <Button raised large fill onClick={() => {setLoginScreenOpened(true)}}>시작하기</Button>
            </Col>
            <Col/>
          </Row>
        </SwiperSlide>
      </FullSwiper>
      <LoginScreen opened={loginScreenOpened} onLoginScreenClosed={() => {setLoginScreenOpened(false)}}>
        <LoginPage loginClose={closeHandler}/>
      </LoginScreen> 
    </Page>
  )
}