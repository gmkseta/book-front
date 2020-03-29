import React from "react";

import UserPresenter from "./UserPresenter";
import UserReview from "./UserReview";

import Loader from "../Loader";
import { Page, Swiper, SwiperSlide, List, Block, BlockTitle, Button, Row, Col } from 'framework7-react';
import { useQuery, useMutation } from "@apollo/react-hooks";
import BookFeed from '../Book/BookFeed';
import { LOG_OUT } from "../../Components/Auth/AuthQueries"

import {
  SEE_PROFILE,
  USER_REVIEW,
  USER_REVIEW_BOOKS
} from "./UserQueries";

export default ({userId}) => {

  const seeProfile = useQuery(SEE_PROFILE, {
    variables: {
      id: "ck8ax1upq03ru080377t9n5i8"
    }
  });
  const {loading, data} = useQuery(USER_REVIEW_BOOKS, {
    variables: {
      id: "ck8ax1upq03ru080377t9n5i8"
    }
  });
  
  const [logUserOut]= useMutation(LOG_OUT, {
    onCompleted: () => { 
      window.location.href = "/" ;
    }
  });



  return (
    <Page className="page-user">
      <BlockTitle medium className="searchbar-found">My Page</BlockTitle>
      <Block>
        <List medial-list className="my-page">
          <UserPresenter seeProfile={seeProfile} />
        </List>
      </Block>
      <BlockTitle medium className="user-review">최고의 도서</BlockTitle>
      {/* <UserReview userReview={userReview} /> */}

      <BlockTitle medium className="user-review">내가 리뷰한 도서</BlockTitle>
        {loading && <Loader />}
        <Swiper params={{speed:500, slidesPerView: 1.3, spaceBetween: 10, centeredSlides: true}}>
          {!loading &&
            data &&
            data.userReviewBooks &&
            data.userReviewBooks.map((book, index) => (
              <SwiperSlide key={index} className="book-swiper-slide">
                <BookFeed book={book}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      <Row>
        <Col/>
        <Col>
          <Button fill onClick={logUserOut} text="로그아웃" />
        </Col>
        <Col/>
      </Row>
    </Page>
  )

}

