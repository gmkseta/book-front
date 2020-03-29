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
      <img alt="" slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg" width="60" height="80" />
    </ListItem>
  )
}