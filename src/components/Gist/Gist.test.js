import React from 'react';
import Gist from '.';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gist />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<Gist />', () => {
  it('matches the snapshot', () => {
    var tree = renderer.create(<Gist match="{params: {gistID: 1}}" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
