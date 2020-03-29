import React from "react";
import { ListItem } from 'framework7-react';
import Star from "./Star";
import { ThumbImage } from "../Book/BookImage"

export default ({
  book
}) => (
    <li>
      <div className="item-content">
        <div className="item-media">  
          <ThumbImage id={book.id} image={book.image} width="60" height="80" />
        </div>
        <div className="item-inner">
          <div className="item-title">
            <div className="item-header">{book.title}</div>
            <div className="item-header item-author">{book.author}</div>
            <Star rate={book.rate} id={book.id}/>
          </div>
        </div>
        
      </div>
      {/* <img alt="" slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg" width="60" height="80" />  */}
      </li>
);
