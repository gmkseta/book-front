import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks"
import { SEE_FULL_BOOK, ADD_REVIEW } from "./BookQueries"
import { Page, Navbar } from 'framework7-react';
import BookPresenter from "./BookPresenter";
import AddReview from "./AddReview";
import Rating from "../../Components/Rate";

export default ({id}) => {
  const seeFullBook = useQuery(SEE_FULL_BOOK, {
    variables: {
      id: id
    }
  });
  const addReview = useMutation(ADD_REVIEW, {
    variables: {
      bookId: id,
      content: "",
      rate: 10
    }
  })

  return (
    <Page className="page-book">
      <Navbar title="도서" backLink=" "></Navbar>
      <BookPresenter seeFullBook={seeFullBook}/>
      <AddReview addReview={addReview} />
    </Page>
  )
}