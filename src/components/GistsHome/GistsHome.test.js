import React from 'react';
import GistsHome from '.';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('<GistsHome />', () => {
  it('matches the snapshot', () => {
    var tree = renderer.create(<GistsHome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GistsHome />, div);
  ReactDOM.unmountComponentAtNode(div);
});
