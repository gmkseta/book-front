import React from "react";
import { ListItem, Block, Row, Col, Chip } from 'framework7-react';
import { ThumbImage } from "./BookImage";
export default(
  { book }
) => {
  return (
      <>
        <div className="book-show">
          <Row className="book-main">
            <Col className="book-img" width="20">
              <ThumbImage id={book.id} image={book.image} />
            </Col>
            <Col width="80">
              <h2 className="book-title">
                {book.title}
              </h2>
              <div className="book-info">
                {
                  book.price
                }원
              </div>
              <div className="book-info">
                {
                  book.author
                }
              </div>
              <div className="book-subinfo">
                {
                  book.pub_date
                }
              </div>

            </Col>

          </Row>
          

          <div className="book-info">
            {book &&
              book.keywords &&
              book.keywords[0] &&
              <Block strong>
                {
                  book.keywords.map((kw, index) => (
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
                book.content
              }
            </div>


          </div>

        </div>
      </>
      
    )
}
  
