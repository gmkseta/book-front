import React from 'react';
import { Page, Card, CardContent, BlockTitle } from 'framework7-react';
import Rating from '../Components/Rate';
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";

const BOOKS_QUERY = gql`
  {
    seeFullBook {
      id
      title
      content
      rate
    }
  }
`


export default () =>{
  const { data, loading } = useQuery(BOOKS_QUERY)
    return(
      <Page className="page-rating">
        

        <BlockTitle medium className="searchbar-found">Components</BlockTitle>
        <Card
            outline
            content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
        ></Card>
        {loading && <Loader/>}
        {!loading &&
          data &&
          data.seeFullBook &&
          data.seeFullBook.map(book => (
            <Card>
              <CardContent padding={false}>
                <Rating rate={book.rate} title={book.title} id={book.id}/>
              </CardContent>
            </Card>
          ))
        }
        
      </Page>
    )
 
}