import React from 'react';
import { Page, List, Block, BlockTitle } from 'framework7-react';
import Rating from '../Components/Rate';
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";

const BOOKS_QUERY = gql`
  {
    allBooks {
      id
      title
      author
      rate
    }
  }
`

export default () =>{
  const { data, loading } = useQuery(BOOKS_QUERY)
    return(
      <Page className="page-rating">
        <BlockTitle medium className="searchbar-found">Components</BlockTitle>
        <Block>
          <List medial-list className="rate-list">
            {loading && <Loader/>}
            {!loading &&
              data &&
              data.allBooks &&
              data.allBooks.map(book => (
                <Rating key={book.id} rate={book.rate || 0 } title={book.title} id={book.id} author={book.author} />
              ))
            }
          </List>
        </Block>
      </Page>
    )
 
}