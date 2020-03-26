import React from "react";
import { ListItem } from 'framework7-react';


export default () => (
    <ListItem>
      <div className="item-title">
        <div className="item-header">title</div>
        <div className="item-header item-author">author</div>
        
      </div>
      <img alt="" slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg" width="44" height="60" />
    </ListItem>
  );
