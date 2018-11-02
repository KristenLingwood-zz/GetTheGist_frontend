import React, { PureComponent } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import './header.css';

const DEFAULT_STATE = {
  searchText: ''
};

class Header extends PureComponent {
  state = DEFAULT_STATE;

  handleSearch = async e => {
    e.preventDefault();
    try {
      await this.props.getSearchResults(this.state.searchText);
      this.setState(DEFAULT_STATE);
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <Navbar inverse defaultExpanded fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/gists">
              <i className="fas fa-cat" />
              {'  '}
              GetTheGist
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl
                type="text"
                value={this.state.searchText}
                placeholder="Search"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button type="submit" onSubmit={this.handleSearch}>
              Submit
            </Button>
          </Navbar.Form>
          <Nav>
            <NavItem eventKey={1} href="/gists">
              All gists
            </NavItem>
            <NavItem eventKey={2} href="https://github.com">
              GitHub
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/new">
              New gist
            </NavItem>
            <NavItem eventKey={2} href="#">
              User info
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
