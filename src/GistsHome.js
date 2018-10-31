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
    let gistList = this.state.gists.map(g => (
      <div className="gist_link" key={g.id}>
        <i className="fas fa-code code_icon" />
        <div className="gist_info">
          <a href={g.id}>{g.filename}</a>
          <p>{g.description}</p>
        </div>
      </div>
    ));
    return <div className="gist_list">{gistList}</div>;
  }
}
export default GistHome;
