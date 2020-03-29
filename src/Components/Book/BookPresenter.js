import React from "react";
import { ListItem, Block, Row, Col, Chip } from 'framework7-react';
import { ThumbImage } from "./BookImage";
export default(
  seeFullBook
) => {
  const loading = seeFullBook.seeFullBook.loading;
  const data = seeFullBook.seeFullBook.data;
  const error = seeFullBook.seeFullBook.error;
  
  if (loading) {
    return (
      <div></div>
    )
  } else if (!loading && data){
    return (
        <>
        <div className="book-show">
          <Row className="book-main">
            <Col className="book-img" width="20">
              <ThumbImage id={data.seeFullBook.id} image={data.seeFullBook.image} />
              
            </Col>
            <Col width="80">
              <h2 className="book-title">
                {data.seeFullBook.title}
              </h2>
              <div className="book-info">
                {
                  data.seeFullBook.price
                }원
              </div>
              <div className="book-info">
                {
                  data.seeFullBook.author
                }
              </div>

            </Col>

          </Row>
          

          <div className="book-info">
            {data.seeFullBook &&
              data.seeFullBook.keywords &&
              data.seeFullBook.keywords[0] &&
              <Block strong>
                {
                  data.seeFullBook.keywords.map((kw, index) => (
                    <Chip outline text={kw.name} key={index} />
                  ))
                }
              </Block>

            }


            <Block className="wrap-title">
              내용
          </Block>
            <div>
              {
                data.seeFullBook.content
              }
            </div>


          </div>

        </div>
      </>
      
    )
  } else {
    return (
      <div>
        {error}
      </div>
    )
  }
  
}