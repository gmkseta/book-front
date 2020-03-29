import {gql} from "apollo-boost";

export const ADD_REVIEW = gql`
  query addReview($bookId: String!, $content: String, $rate: Int){
    addReview(bookId: $bookId, content: $content, rate: $rate){
      review {
        id
        rate
        content

      }
      reviewCount
      
    }
  }
`

export const SEE_FULL_BOOK = gql `
  query seeFullBook($id: String!){
    seeFullBook(id: $id){
      id

      category {
        id
        name
      }
      keywords {
        id
        name
      }
      title
      author
      barcode
      price
      
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
      reviewsCount
    }
  }
`