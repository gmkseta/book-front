import {gql} from "apollo-boost";

export const ADD_REVIEW = gql`
  mutation addReview($bookId: String!, $content: String, $rate: Int){
    addReview(bookId: $bookId, content: $content, rate: $rate){
      review {
        id
        rate
        content
      }
      review_count
      
    }
  }
`

export const SEE_FULL_BOOK = gql `
  query seeFullBook($id: String!){
    seeFullBook(id: $id){
      id
      title
      image
      author
      barcode
      price
      content
      pub_date
      color
      
      category {
        id
        name
      }
      keywords {
        id
        name
      }
      
      reviews {
        id
        rate
        content
      }
    }
  }
`

export const RECOMMEND_BOOKS = gql`
  query {
    recommendBooks {
      id
      title
      reviews_count
      review_average
      price
      pub_date
      image
      color
      category {
        name
      }
      keywords {
        name
      }
    }
  }
`