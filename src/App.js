import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as CONST from './constants';
import {
  changeLocation,
  setSelectedTemp,
  setSelectedDate,
  fetchData
} from './actions';

import Plot from './components/Plot';

import './App.css';

export class App extends Component {
  constructor() {
    super();

    ////////// Callbacks
    this.changeLocation = this.changeLocation.bind(this);
    this.fetchData      = this.fetchData.bind(this);
    this.onPlotClick    = this.onPlotClick.bind(this);

    ////////// Private Methods
    this._renderForecastInfo = this._renderForecastInfo.bind(this);
  }

  ////////// Callbacks
  changeLocation(evt) {
    this.props.dispatch(changeLocation(evt.target.value));
  }

  fetchData(evt) {
    evt.preventDefault();

    const location = encodeURIComponent(this.props.redux.get('location'));
    const URL      = CONST.URL_PREFIX + location + CONST.URL_SUFFIX;

    this.props.dispatch(fetchData(URL));
  }

  onPlotClick(data) {
    if (data.points) {
      // const number = data.points[0].pointNumber;

      this.props.dispatch(setSelectedTemp(data.points[0].y));
      this.props.dispatch(setSelectedDate(data.points[0].x));
    }
  }

  ////////// Private Methods
  _renderForecastInfo(list) {
    let currentTemp = 'not loaded yet';
    const temp      = this.props.redux.getIn(['selected', 'temp']);
    const date      = this.props.redux.getIn(['selected', 'date']);

    if (list) {
      currentTemp = list.getIn(['0', 'main', 'temp']);

      return (
        <div className="wrapper">
          <p className="temp-wrapper">
            <span className="temp">
              {temp ? temp : currentTemp}
            </span>
            <span className="temp-symbol">°C</span>
            <span className="temp-date">
              {temp ? date : ''}
            </span>
          </p>

          <h2>Forecast</h2>

          <Plot
            xData={this.props.redux.get('dates')}
            yData={this.props.redux.get('temps')}
            onPlotClick={this.onPlotClick}
            type="scatter"
          />
        </div>
      );
    }

    return null;
  }

  render() {
    return (
      <div>
        <h1>Weather</h1>

        <form onSubmit={this.fetchData}>
          <label>I want to know the weather for
            <input
              type="text"
              placeholder={"City, Country"}
              onChange={this.changeLocation}
            />
          </label>
        </form>

        {this._renderForecastInfo(this.props.redux.getIn(['data', 'list']))}
      </div>
    );
  }
}

function mapStateProps(state) {
  return {
    redux: state
  };
}

export default connect(mapStateProps)(App);
