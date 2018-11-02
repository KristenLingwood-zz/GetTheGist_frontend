import React, { PureComponent } from 'react';
import './gistsHome.css';
import { callAPI } from '../../services/api';
import GistForm from '../GistForm';

class GistHome extends PureComponent {
  state = {
    gists: [],
    loading: true
  };

  async componentDidMount() {
    let gistList;
    try {
      gistList = await callAPI('get', 'http://localhost:3000/gists');
      this.setState({ ...this.state, gists: gistList });
    } catch (err) {
      console.log('err', err);
    }
    this.setState({ ...this.state, loading: false });
  }

  render() {
    let gistList = this.state.gists.map(g => (
      <div className="gist_link" key={g.id}>
        <i className="fas fa-code code_icon" />
        <div>
          <a className="gisthome_link" href={`/gists/${g.id}`}>
            {g.filename}
          </a>
          <p>{g.description}</p>
        </div>
      </div>
    ));
    if (gistList.length > 4) {
      gistList = gistList.slice(0, 4);
    }
    return this.state.loading ? (
      <h4 id="loading_msg">Getting the gist of it...</h4>
    ) : (
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
