import React from "react";
import { ListItem } from 'framework7-react';

export default (
  seeProfile
) => {
  
  const loading = seeProfile.seeProfile.loading;
  const data = seeProfile.seeProfile.data;
  const error = seeProfile.seeProfile.error;
  if (loading){
    return (
      <div></div>
    )

  } else if(!loading && data && data.seeProfile){
    const username = data.seeProfile.username;
    const email = data.seeProfile.email;

    return (
      <ListItem>
        <div className="item-title">
          <div className="item-header">{username}</div>
          <div className="item-header item-author">{email}</div>
        </div>
      </ListItem>
    );
  } else {
    return (
      <div></div>
    )
  }

  
}
