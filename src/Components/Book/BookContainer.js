import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks"
import { SEE_FULL_BOOK, ADD_REVIEW } from "./BookQueries"
import { Page, Navbar } from 'framework7-react';
import BookPresenter from "./BookPresenter";
import AddReview from "./AddReview";
import Rating from "../../Components/Rate";

export default ({id}) => {
  const { loading, error, data }= useQuery(SEE_FULL_BOOK, {
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
      <div className="navbar navbar-transparent">
        <div className="navbar-inner">
          <div className="left">
            <a className="link back" href="#">
              <i className="icon icon-back"></i>
              <span className="">
              </span>
            </a>
          </div>
        </div>
      </div>
      {!loading &&
        data &&
        <BookPresenter book={data.seeFullBook}/>
      }
      <AddReview addReview={addReview} />
    </Page>
  )
}