import React, { PureComponent } from 'react';
import './gistsHome.css';
import { callAPI } from './services/api';
import GistForm from './GistForm';

class GistHome extends PureComponent {
  state = {
    gists: [],
    loading: true
  };

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
          <a href={`/gists/${g.id}`}>{g.filename}</a>
          <p>{g.description}</p>
        </div>
      </div>
    ));
    return (
      <div>
        <div className="gist_list">{gistList}</div>
        <div>
          <GistForm update={false} foundGist={null} />
        </div>
      </div>
    );
  }
}
export default GistHome;
