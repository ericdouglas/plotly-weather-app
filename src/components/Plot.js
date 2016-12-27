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

  shouldComponentUpdate(nextProps) {
    const xDataChanged = !this.props.xData.equals(nextProps.xData);
    const yDataChanged = !this.props.yData.equals(nextProps.yData);

    return xDataChanged || yDataChanged;
  }

  ////////// Private Methods
  _drawPlot() {
    const { xData, yData, type, onPlotClick } = this.props;

    Plotly
    .newPlot('plot', [{
      x: xData.toJS(),
      y: yData.toJS(),
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

    document
      .getElementById('plot')
      .on('plotly_click', onPlotClick);
  }

  render() {
    return (
      <div id="plot"></div>
    );
  }
}

export default Plot;
