import React from 'react';
import Header from '.';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('<Header />', () => {
  it('matches the snapshot', () => {
    var tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
