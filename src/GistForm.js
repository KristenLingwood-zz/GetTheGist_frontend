import React, { PureComponent } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import { callAPI } from './services/api';

class GistForm extends PureComponent {
  state = {
    description: '',
    filename: '',
    content: '',
    loading: false
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleNewSubmit = async e => {
    let payload = {
      description: this.state.description,
      filename: this.state.filename,
      content: this.state.content,
      extension: ''
    };
    try {
      await callAPI('post', 'http://localhost:3000/gists', payload);
      window.alert('Thanks for creating a new gist. We got the gist of it!');
      this.setState({
        description: '',
        filename: '',
        content: ''
      });
    } catch (err) {
      console.log(err);
    }
  };
  handleUpdateSubmit = async e => {
    console.log('update clicked');

    let payload = {
      description: this.state.description || this.props.foundGist.description,
      filename: this.state.filename || this.props.foundGist.filename,
      content: this.state.content || this.props.foundGist.content,
      extension: ''
    };
    try {
      let gistID = this.props.gistID;
      console.log(gistID);
      await callAPI('patch', `http://localhost:3000/gists/${gistID}`, payload);
      window.alert('Your gist has been updated!');
      this.setState({
        description: '',
        filename: '',
        content: ''
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    let buttonText;
    let handleSubmit;
    if (this.props.update) {
      buttonText = 'Update gist';
      handleSubmit = this.handleUpdateSubmit;
    } else {
      buttonText = 'Create a public gist';
      handleSubmit = this.handleNewSubmit;
    }

    return (
      <form>
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            value={this.state.description}
            name="description"
            placeholder="Gist description"
            onChange={this.handleChange}
          />
          <FormControl
            type="text"
            value={this.state.filename}
            name="filename"
            placeholder="Filename including extension"
            onChange={this.handleChange}
          />
          <FormControl
            type="textarea"
            value={this.state.content}
            name="content"
            placeholder="Gist content"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button bsStyle="primary" onClick={handleSubmit}>
          {buttonText}
        </Button>
      </form>
    );
  }
}

export default GistForm;
