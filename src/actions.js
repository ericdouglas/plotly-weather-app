import axios from 'axios';

export function changeLocation(location) {
  return {
    type: 'CHANGE_LOCATION',
    location
  };
}

export function setSelectedDate(date) {
  return {
    type: 'SET_SELECTED_DATE',
    date
  };
}

export function setSelectedTemp(temp) {
  return {
    type: 'SET_SELECTED_TEMP',
    temp
  };
}

export function setData(data) {
  return {
    type: 'SET_DATA',
    data
  };
}

export function setDates(dates) {
  return {
    type: 'SET_DATES',
    dates
  };
}

export function setTemps(temps) {
  return {
    type: 'SET_TEMPS',
    temps
  };
}

export function fetchData(url) {
  return function thunk(dispatch) {
    axios
      .get(url)
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

        dispatch(setData(data));
        dispatch(setDates(dates));
        dispatch(setTemps(temps));
        dispatch(setSelectedTemp(null));
        dispatch(setSelectedDate(''));
      });
  };
}
