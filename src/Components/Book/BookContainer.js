import React from "react";
import { useQuery } from "react-apollo-hooks"
import { SEE_FULL_BOOK } from "./BookQueries"
import { Page, Navbar } from 'framework7-react';
import BookPresenter from "./BookPresenter";
import Rating from "../../Components/Rate";
export default ({id}) => {
  const seeFullBook = useQuery(SEE_FULL_BOOK, {
    variables: {
      id: id
    }
  });
  console.log(`seeFullBook=====`)
  console.log(id);
  console.log(seeFullBook)
  return (
    <Page className="page-book">
      <Navbar title="도서" backLink=" "></Navbar>
      <BookPresenter seeFullBook={seeFullBook}/>
      
      

    </Page>
  )
}