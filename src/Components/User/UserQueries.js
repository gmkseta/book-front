import {gql} from "apollo-boost";

export const SEE_PROFILE = gql`
  query seeProfile($id: String!){
    seeProfile(id: $id) {
      id
      username
    }
  }
`
