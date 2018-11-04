import React, { PureComponent } from 'react';
import { callAPI } from '../../services/api';
import './gist.css';
import GistForm from '../GistForm';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class Gist extends PureComponent {
  state = {
    foundGist: {},
    edit: false,
    loading: true
  };
  async componentDidMount() {
    const { gistID } = this.props.match.params;
    let foundGist;
    try {
      foundGist = await callAPI('get', `http://localhost:3000/gists/${gistID}`);
      this.setState({ ...this.state, foundGist: foundGist });
    } catch (err) {
      console.log(err);
    }
    this.setState({ ...this.state, loading: false });
  }

  toggleEdit = () => {
    this.setState(prevState => ({ ...this.state, edit: !prevState.edit }));
  };

  // bitly does not support non-hosted urls, so a dummy link is used here.
  createSlug = async () => {
    try {
      let currentURL = this.props.history.location.pathname;
      let response = await axios({
        method: 'post',
        url: 'https://api-ssl.bitly.com/v4/bitlinks',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
          'Content-Type': 'application/json'
        },
        // data: { long_url: `http://localhost:3001${currentURL}`}
        data: { long_url: 'http://kristenlingwood.com' }
      });
      console.log(response);
      window.alert(`Your url slug is ${response.data.link}`);
    } catch (err) {
      console.log(err);
    }
  };

  handleDelete = async e => {
    window.alert(
      `Are you sure you want to delete ${this.state.foundGist.filename}?`
    );
    const { gistID } = this.props.match.params;
    try {
      await callAPI('DELETE', `http://localhost:3000/gists/${gistID}`);
      window.alert(`${this.state.foundGist.filename} deleted.`);
      this.props.history.push('/gists');
      // ideally we shouldn't need to use a reload
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    let fileName = this.state.foundGist.filename;
    let description = this.state.foundGist.description;
    let content = this.state.foundGist.content;
    let editForm;
    if (this.state.edit) {
      editForm = (
        <div className="edit_form">
          <GistForm
            update={true}
            foundGist={this.state.foundGist}
            gistID={this.props.match.params.gistID}
          />
        </div>
      );
    } else {
      editForm = <div />;
    }
    return this.state.loading ? (
      <h4 id="loading_msg">Getting the gist of it...</h4>
    ) : (
      <div>
        <div className="found_gist">
          <p id="gist_description">{description}</p>
          <div className="gist_info">
            <h6>{fileName}</h6>
            <h6>{content}</h6>
            <Button
              id="delete_button"
              onClick={this.handleDelete}
              bsStyle="danger"
              bsSize="small"
            >
              DELETE
            </Button>
            <Button
              id="slug_button"
              onClick={this.createSlug}
              bsStyle="primary"
              bsSize="small"
            >
              Get custom url
            </Button>
            <Button
              id="edit_button"
              onClick={this.toggleEdit}
              bsStyle="info"
              bsSize="small"
            >
              Edit Gist
            </Button>
          </div>
        </div>
        {editForm}
      </div>
    );
  }
}
export default Gist;
