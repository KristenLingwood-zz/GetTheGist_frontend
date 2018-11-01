import React, { PureComponent } from 'react';
import { callAPI } from './services/api';
import './gist.css';
import GistForm from './GistForm';

class Gist extends PureComponent {
  state = {
    foundGist: {},
    loading: true
  };
  async componentDidMount() {
    const { gistID } = this.props.match.params;
    let foundGist;
    try {
      foundGist = await callAPI('get', `http://localhost:3000/gists/${gistID}`);
      this.setState({ foundGist: foundGist, loading: false });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    let fileName = this.state.foundGist.filename;
    let description = this.state.foundGist.description;
    let content = this.state.foundGist.content;

    return (
      <div>
        <div className="found_gist">
          <p id="gist_description">{description}</p>
          <div className="gist_info">
            <h6>{fileName}</h6>
            <p>{content}</p>
          </div>
        </div>
        <GistForm
          update={true}
          foundGist={this.state.foundGist}
          gistID={this.props.match.params.gistID}
        />
      </div>
    );
  }
}
export default Gist;
