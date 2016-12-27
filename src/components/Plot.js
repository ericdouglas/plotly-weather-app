/* global Plotly */
import React from 'react';

class Plot extends React.Component {
  constructor(props) {
    super(props);

    ////////// Private Methods
    this._drawPlot = this._drawPlot.bind(this);
  }
  ////////// Lifecycle methods
  componentDidMount() {
    this._drawPlot();
  }

  componentDidUpdate() {
    this._drawPlot();
  }

  ////////// Private Methods
  _drawPlot() {
    const { xData, yData, type } = this.props;

    Plotly
    .newPlot('plot', [{
      x: xData,
      y: yData,
      type
    }], {
      margin: {
        t:0,
        r: 0,
        l: 30
      },
      xaxis: {
        gridcolor: 'transparent'
      }
    }, {
      displayModeBar: false
    });
  }

  render() {
    return (
      <div id="plot"></div>
    );
  }
}

export default Plot;
