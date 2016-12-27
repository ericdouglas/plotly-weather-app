import React, { Component } from 'react';
import axios from 'axios';

import * as CONST from './constants';

import Plot from './components/Plot';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      location: '',
      data: {},
      dates: [],
      temps: []
    }

    ////////// Callbacks
    this.changeLocation = this.changeLocation.bind(this);
    this.fetchData      = this.fetchData.bind(this);

    ////////// Private Methods
    this._renderForecastInfo = this._renderForecastInfo.bind(this);
  }

  ////////// Callbacks
  changeLocation(evt) {
    this.setState({
      location: evt.target.value
    });
  }

  fetchData(evt) {
    evt.preventDefault();

    const location = encodeURIComponent(this.state.location);
    const URL      = CONST.URL_PREFIX + location + CONST.URL_SUFFIX;

    axios
      .get(URL)
      .then(response => {
        const data  = response.data;
        const list  = data.list;
        const dates = [];
        const temps = [];

        list
          .forEach(item => {
            dates.push(item.dt_txt);
            temps.push(item.main.temp);
          });

        this.setState({
          data,
          dates,
          temps
        });
      });
  }

  ////////// Private Methods
  _renderForecastInfo(list) {
    let currentTemp = 'not loaded yet';

    if (list) {
      currentTemp = list[0].main.temp;

      return (
        <div className="wrapper">
          <p className="temp-wrapper">
            <span className="temp">{currentTemp}</span>
            <span className="temp-symbol">°C</span>
          </p>

          <h2>Forecast</h2>

          <Plot
            xData={this.state.dates}
            yData={this.state.temps}
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

        {this._renderForecastInfo(this.state.data.list)}
      </div>
    );
  }
}

export default App;
