import React from "react";
import { ListItem } from 'framework7-react';


export default ({
  username, id
}) => (
    <ListItem>
      <div className="item-title">
        <div className="item-header">{username}</div>
        <div className="item-header item-author">{id}</div>
        
      </div>
      
    </ListItem>
  );
