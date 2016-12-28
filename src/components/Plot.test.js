import React from 'react';
import renderer from 'react-test-renderer';
import { fromJS } from 'immutable';

import Plot from './Plot';

describe('<Plot />', () => {
  global.Plotly = {
    newPlot: () => {}
  };

  global.document = {
    getElementById: function() {
      return {
        on: function() {}
      };
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <Plot
        xData={fromJS({})}
        yData={fromJS({})}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
