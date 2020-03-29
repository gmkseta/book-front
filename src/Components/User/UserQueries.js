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