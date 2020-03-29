import React from "react";
import { BlockTitle ,Card, CardFooter, CardContent, Chip } from "framework7-react"
import RadarChart from 'react-svg-radar-chart';
import PropTypes from "prop-types";
import { ThumbImage } from "./BookImage";
import styled from "styled-components";


const BookFeed = ({book}) => {
  const ColorCardContent = styled(CardContent)`
    background-color: ${book.color}BF !important;
  `
  const ColorChip =  styled(Chip)`
    background-color: ${book.color}BF !important;
  `
  const data = [
    {
     "data": {
      "rate": book.review_average/10,
      "reviews_count": book.reviews_count/40 ,
      "price": (1-book.price/30000) < 0 ? 0 : (1-book.price/30000),
      "pubDate": (new Date(book.pub_date)*1 || (new Date()*1)/2)/(new Date()*1),
      "weight": 0.7
     },
     "meta": {
        "color": `#F9665E`
     }
    }
   ]
  const captions = {
    // columns
    rate: '평점',
    reviews_count: '리뷰 수',
    price: '가성비',
    pubDate: '트랜디',
    weight: 'Weight'
  };
  const options = {
    scaleProps: () => ({
      fill: `${book.color}59`,
      stroke: '#000',
      strokeWidth: '.2'
      }),
      axisProps: () => (
      { 
        stroke: '#000',
        strokeWidth: '.2'
      })
    }
  const getSize = ()=>{
    let width;
    if (window.innerWidth > 500){
      width = document.getElementById("app").offsetWidth;
    } else {
      width = window.innerWidth;

    }
    return (width-40-width*0.3)*0.65 ;
  }
  return (
    <>
    <BlockTitle>{book.title}</BlockTitle>
      <Card className="book-card">
        <ColorCardContent padding={false} className="book-container">
          <a href={"/books/"+book.id}>
            <div className="book-content">
              <div className="book-img">
              <ThumbImage id={book.id} image={book.image}/>
              </div>
              <div className="book-inner">
                <RadarChart
                  captions={captions}
                  data={data}
                  size={getSize()}
                  options={options}
                />
              </div>
            
            </div>
            <CardFooter className="no-hairline">
              <ColorChip text={"#"+book.category.name} />
              {book.keywords.slice(-1).map((keyword, i)=>(
                <ColorChip text={"#"+keyword.name} key={i} />
              ))}
            </CardFooter>
          </a>
        </ColorCardContent>
      </Card>
    </>
  );
}
//
BookFeed.propTypes = {
  // title: PropTypes.string.isRequired,
  book: PropTypes.object.isRequired
};
export default BookFeed;