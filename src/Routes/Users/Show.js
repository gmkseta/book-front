import React from 'react';
import UserContainer from '../../Components/User/UserContainer';



export default ({userId}) => {

  console.log(userId)
  
  return(<UserContainer userId={userId}/>);
}