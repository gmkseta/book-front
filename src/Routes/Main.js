import React from 'react';
import { useQuery} from "react-apollo-hooks"
import Loader from "../Components/Loader";
import { Page, ListItem, List, BlockTitle, Swiper, SwiperSlide } from 'framework7-react';
import { BookFeed } from '../Components/Book';
import {RECOMMEND_BOOKS } from "../Components/Book/BookQueries"
export default () => {
  const {loading, error, data} = useQuery(RECOMMEND_BOOKS);

  console.log("==========")
  console.log("data")
  console.log(data)
  console.log("==========")
  
  return(
    <Page className="page-home">
      <List>
        <ListItem title="Page Transitions" link="/page-transitions/"></ListItem>
        <ListItem title="Routable Modals" link="/routable-modals/"></ListItem>
        <ListItem title="Default Route (404)" link="/load-something-that-doesnt-exist/"></ListItem>
        <ListItem title="Master-Detail (Split View)" link="/master-detail/"></ListItem>
      </List>
      <BlockTitle>북챠 추천 책</BlockTitle>
        
        <Swiper params={{speed:500, slidesPerView: 1.3, spaceBetween: 10, centeredSlides: true}}>
          {loading && <Loader />}

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
}