import React from "react";
import UserPresenter from "./UserPresenter";
import LoadingHeader from "./LoadingHeader";
import Loader from "../Loader";
import { Page, List, Block, BlockTitle, ListItem, f7 } from 'framework7-react';
import { useQuery } from "react-apollo-hooks";
import {
  SEE_PROFILE
} from "./UserQueries";

export default ({userId}) => {
  
  const {loading, error, data} = useQuery(SEE_PROFILE, {
    variables: {
      id: "ck87cquoj023v08031a7dlgbz"
    }
  });
  

  return (
    <Page className="page-rating" >
      <BlockTitle medium className="searchbar-found">My Page</BlockTitle>
      <Block>
        <List medial-list className="my-page">
          
          {
            loading && 
            <LoadingHeader />
          }{
            !loading &&
            <UserPresenter username={data.seeProfile.username} id={data.seeProfile.id} />
          }

        </List>
        

      </Block>
    </Page>
  )

}

