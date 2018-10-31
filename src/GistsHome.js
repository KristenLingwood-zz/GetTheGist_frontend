import React, { PureComponent } from 'react';
import './gistsHome.css';
import { callAPI } from './services/api';

class GistHome extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      gists: [],
      loading: true
    };
  }
  async componentDidMount() {
    let gistList;
    try {
      gistList = await callAPI('get', 'http://localhost:3000/gists');
      this.setState({ gists: gistList, loading: false });
    } catch (err) {
      console.log('err', err);
    }
  }

  render() {
    console.log(this.state.gists);
    let gistList = this.state.gists.map(g => (
      <div>
        <i className="fas fa-code" />
        <li>
          <a href={g.id}>{g.filename}</a>
          {g.description}
        </li>
      </div>
    ));
    return (
      <div className="gist_list">
        <ul>{gistList}</ul>
      </div>
    );
  }
}
export default GistHome;
