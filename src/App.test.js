import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { fromJS } from 'immutable';

import { App } from './App';

describe('<App />', () => {
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  // });

  it('renders correctly', () => {
    const tree = renderer.create(<App redux={fromJS({})} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
