import React from 'react';
import { Page, ListItem, List, Link, Card, BlockTitle, CardContent, CardHeader, CardFooter } from 'framework7-react';

export default class extends React.Component{
  render() {
    return(
      <Page className="page-home">
        <List>
          <ListItem title="Page Transitions" link="/page-transitions/"></ListItem>
          <ListItem title="Routable Modals" link="/routable-modals/"></ListItem>
          <ListItem title="Default Route (404)" link="/load-something-that-doesnt-exist/"></ListItem>
          <ListItem title="Master-Detail (Split View)" link="/master-detail/"></ListItem>
        </List>
        <BlockTitle>Styled Cards</BlockTitle>
          <Card className="demo-card-header-pic">
            <CardHeader
              className="no-border"
              valign="bottom"
              style={{ backgroundImage: 'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)' }}
            >Journey To Mountains</CardHeader>
            <CardContent>
              <p className="date">Posted on January 21, 2015</p>
              <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
            </CardContent>
            <CardFooter>
              <Link>Like</Link>
              <Link>Read more</Link>
            </CardFooter>
          </Card>
      </Page>
    )
  }
}