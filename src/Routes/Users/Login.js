import React from 'react';
import { Page, Navbar, List, LoginScreenTitle, ListButton, BlockFooter, NavRight, Link, ListInput } from 'framework7-react';


export default class extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.signIn = this.signIn.bind(this);
  }
  signIn() {
    const self = this;
    const app = self.$f7;
    app.dialog.alert(`Username: ${self.state.username}<br>Password: ${self.state.password}`, () => {
      app.loginScreen.close();
      
    });
  }
  render() {
    return(
      <Page loginScreen>
        <Navbar title="Login Screen">
          <NavRight>
            <Link onClick={this.props.closeClick}>Close</Link>
          </NavRight>
        </Navbar>
        <LoginScreenTitle>Framework7</LoginScreenTitle>
        <List form>
          <ListInput
            label="Username"
            type="text"
            placeholder="Your username"
            onInput={(e) => {
              this.setState({ username: e.target.value});
            }}
          />
          <ListInput
            label="Password"
            type="password"
            placeholder="Your password"
            onInput={(e) => {
              this.setState({ password: e.target.value});
            }}
          />
        </List>
        <List>
          <ListButton onClick={this.signIn.bind(this)}>Sign In</ListButton>
          <BlockFooter>Some text about login information.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlockFooter>
        </List>
      </Page>
    )
  }
}