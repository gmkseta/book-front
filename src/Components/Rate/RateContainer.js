import React from "react";
import { Page, List, Block, BlockTitle } from 'framework7-react';
import RatePresenter from "./RatePresenter";
import Loader from "../Loader";
import { useQuery } from "react-apollo-hooks";
import {
  ALL_BOOKS
} from "./RateQueries";

export default () => {
  const { loading, error, data } = useQuery(ALL_BOOKS, {
    variables: {
      categoryId: "",
      afterId: null
    }
  })
  
  return (
      <Page className="page-rating">
        <BlockTitle medium className="searchbar-found">Components</BlockTitle>
        <Block>
          <List medial-list className="rate-list">
            {loading && <Loader/>}
            {!loading &&
              data &&
              data.allBooks &&
              data.allBooks.map(book => (
                <RatePresenter author={book.author} title={book.title} id={book.id} key={book.id}/>
              ))
            }
            
          </List>
        </Block>
      </Page>
    )
};
    


