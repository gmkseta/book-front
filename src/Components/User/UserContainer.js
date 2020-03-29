import React from "react";

import UserPresenter from "./UserPresenter";
import UserReview from "./UserReview";

import Loader from "../Loader";
import Button from "../../Components/Button"
import { Page, List, Block, BlockTitle } from 'framework7-react';
import { useQuery, useMutation } from "@apollo/react-hooks";

import { LOG_OUT } from "../../Components/Auth/AuthQueries"

import {
  SEE_PROFILE,
  USER_REVIEW
} from "./UserQueries";

export default ({userId}) => {

  const seeProfile = useQuery(SEE_PROFILE, {
    variables: {
      id: "ck8ax1upq03ru080377t9n5i8"
    }
  });
  const userReview = useQuery(USER_REVIEW, {
    variables: {
      id: "ck8ax1upq03ru080377t9n5i8"
    }
  });
  
  const [logUserOut]= useMutation(LOG_OUT, {
    onCompleted: () => { 
      console.log("log_out")
      window.location.href = "/" ;
    }
  });



  return (
    <Page className="page-user">
      <BlockTitle medium className="searchbar-found">My Page</BlockTitle>
      <Block>
        <List medial-list className="my-page">
          <UserPresenter seeProfile={seeProfile} />
          
        </List>
      </Block>
      <BlockTitle medium className="user-review">최고의 도서</BlockTitle>
      {/* <UserReview userReview={userReview} /> */}

      <Button onClick={logUserOut} text="로그아웃" />
    </Page>
  )

}

