import React from 'react';
import Footer from '.';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('<Footer />', () => {
  it('matches the snapshot', () => {
    var tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
