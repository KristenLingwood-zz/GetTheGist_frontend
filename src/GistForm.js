import React, { PureComponent } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import { callAPI } from './services/api';

class GistForm extends PureComponent {
  state = {
    description: '',
    filename: '',
    content: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // take state of form and send post to /gists
  handleSubmit = async e => {
    let payload = {
      description: this.state.description,
      filename: this.state.filename,
      content: this.state.content,
      extension: ''
    };
    console.log(payload);
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

  render() {
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
        <Button bsStyle="primary" onClick={this.handleSubmit}>
          Create public gist
        </Button>
      </form>
    );
  }
}

export default GistForm;
