import React from "react";
import { ListItem, Block } from 'framework7-react';

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
        <h2>
          {data.seeFullBook.title}
        </h2>
        <Block>
          키워드
        </Block>
        <div>
          {
            data.seeFullBook.keywords.map((kw, index) => (
              <ListItem key={index}>
                {kw.name}
              </ListItem>
            ))
          }
        </div>
        <Block>
          내용
        </Block>
        <div>
          {
            data.seeFullBook.content
          }
        </div>
        <Block>
          가격
        </Block>
        <div>
          {
            data.seeFullBook.price
          }원
        </div>

        <Block>
          출판일
        </Block>
        <div>
          {
            data.seeFullBook.pub_date
          }
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