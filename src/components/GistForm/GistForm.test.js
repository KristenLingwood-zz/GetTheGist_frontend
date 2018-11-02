import React from 'react';
import GistForm from '.';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('<GistForm />', () => {
  it('matches the snapshot', () => {
    var tree = renderer.create(<GistForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GistForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
