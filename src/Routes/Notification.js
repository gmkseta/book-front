import React from 'react';
import { Page, ListItem, List, Icon, BlockTitle } from 'framework7-react';


export default class extends React.Component{
  render() {
    return(
      <Page className="page-notification">
        <BlockTitle medium className="searchbar-found">Components</BlockTitle>
        <List className="components-list searchbar-found">
          <ListItem link="/virtual-list/" title="Virtual List">
            <Icon slot="media" icon="icon-f7" />
          </ListItem>
        </List>
      </Page>
    )
  }
}