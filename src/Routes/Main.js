import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from "@apollo/react-hooks"
import { RECOMMEND_BOOKS } from "../Components/Book/BookQueries"
import { Link, withRouter } from "react-router-dom";
import useInput from "../Hooks/useInput";
import { f7 } from 'framework7-react';
import Loader from "../Components/Loader";
import BookFeed from '../Components/Book/BookFeed';
import { Page, List, ListInput, BlockTitle, Swiper, SwiperSlide } from 'framework7-react';

export default () => {
  const {loading, error, data} = useQuery(RECOMMEND_BOOKS);
  const search = useInput("");

  const onSearch = e => {
    e.preventDefault();
  };



  return(
    <Page className="page-home">
      <List form onSubmit={onSearch} inset>
        <ListInput
          type="text"
          placeholder="찾고싶은 책 제목, 저자, 키워드를 검색하세요"
          />
      </List>
      <BlockTitle>북챠 추천 책</BlockTitle>
        {loading && <Loader />}
        
        <Swiper params={{speed:500, slidesPerView: 1.3, spaceBetween: 10, centeredSlides: true}}>
          {!loading &&
            data &&
            data.recommendBooks &&
            data.recommendBooks.map((book, index) => (
              <SwiperSlide key={index} className="book-swiper-slide">
                <BookFeed book={book}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
        
    </Page>
  )
};