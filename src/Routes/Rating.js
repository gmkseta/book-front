import React from 'react';
import { Page, Card, CardContent, BlockTitle } from 'framework7-react';
import Rating from '../Components/Rate';
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";

const BOOKS_QUERY = gql`
  {
    allBooks {
      id
      title
    }
  }
`


export default () =>{
  const { data, loading } = useQuery(BOOKS_QUERY)
  console.log(data)
    return(
      <Page className="page-rating">
        <BlockTitle medium className="searchbar-found">Components</BlockTitle>
        {loading && <Loader/>}
        {!loading &&
          data &&
          data.allBooks &&
          data.allBooks.map(book => (
            <Card key={book.id}>
              <CardContent padding={false}>
                <Rating key={book.id} rate={0} title={book.title} id={book.id}/>
              </CardContent>
            </Card>
          ))
        }
        
      </Page>
    )
 
}