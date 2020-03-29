import React from 'react';
import { Button } from "framework7-react"
import UserContainer from '../../Components/User/UserContainer';

export default ({userId}) => {

  return(
      <UserContainer userId={userId}/>
    )
}