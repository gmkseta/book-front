import React from "react";
import { ListItem, List } from 'framework7-react';
import Star from "./Star";

export default ({
  rate, title, id
}) => (
  <List medial-list>
    <ListItem>
      <div className="item-title">
        <div className="item-header">{title}</div>
        <Star rate={rate} id={id}/>
      </div>
      <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg" width="44" height="60" /> 
    </ListItem>
  </List>
);