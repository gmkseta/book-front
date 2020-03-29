import {gql} from "apollo-boost";

export const SEE_PROFILE = gql`
  query seeProfile($id: String!){
    seeProfile(id: $id) {
      id
      email
      username
    }
  }
`
export const USER_REVIEW = gql`
  query userReview($id: String!){
    userReview(id: $id){
      id
      rate
      content
      book {
        title
        image
      }
    }
  }
`

export const USER_REVIEW_BOOKS = gql`
  query userReviewBooks($categoryId: String, $afterId: String){
    userReviewBooks(categoryId: $categoryId, afterId: $afterId){
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