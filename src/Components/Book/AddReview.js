import React from "react";
import { ListItem } from 'framework7-react';
import Star from "../Rate/Star";



export default (
  {addReview}
) => {
  console.log(addReview)
  return (
    <ListItem>
      <div className="item-title">
        <div className="item-header"></div>
        <div className="item-header item-author"></div>
        {/* <Star rate={rate} id={id} /> */}
      </div>
      
    </ListItem>
  )
}