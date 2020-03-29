import { gql } from "apollo-boost";


export const ALL_BOOKS = gql`
    query AllBooks(
      $categoryId: String, $afterId: String
      ){
        allBooks(
          categoryId: $categoryId, afterId: $afterId
        ){
            id
            title
            author
            image
        }
      }
`

export const RANDOM_BOOKS = gql`
  query randomBooks(
    $categoryId: String, $afterId: String
    ){
      randomBooks(
        categoryId: $categoryId, afterId: $afterId
      ){
          id
          title
          author
          image
      }
    }
`

export const ADD_REVIEW = gql`
  mutation AddReview($bookId: String!, $content: String, $rate: Int!){
    addReview(
      bookId: $bookId
      rate: $rate,
      content: $content
    ){
      review{
        id
      }
      reviewCount
    }
  }
`
