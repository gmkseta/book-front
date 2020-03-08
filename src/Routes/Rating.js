import React from 'react';
import { Page, Card, CardContent, BlockTitle } from 'framework7-react';
import Rating from '../Components/Rate';



export default class extends React.Component{
  render() {
    return(
      <Page className="page-rating">
        <BlockTitle medium className="searchbar-found">Components</BlockTitle>
        <Card
            outline
            content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
        ></Card>

        <Card>
          <CardContent padding={false}>
            <Rating rate={2.5}/>
          </CardContent>

        </Card>
      </Page>
    )
  }
}