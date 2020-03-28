import {gql} from "apollo-boost";

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