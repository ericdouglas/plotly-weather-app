import mainReducer from './reducers';
import { fromJS } from 'immutable';

describe('mainReducer', () => {
  it('should return the initial state', () => {
    expect(mainReducer(undefined, {})).toEqual(fromJS({
      location: '',
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      }
    }));
  });

  it('should react to an action with the type CHANGE_LOCATION', () => {
    const location = 'Vienna, Austria';
    expect(mainReducer(undefined, {
      type: 'CHANGE_LOCATION',
      location
    })).toEqual(fromJS({
      location,
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      }
    }));
  });

  it('should react to an action with the type SET_SELECTED_TEMP', () => {
    const temp = '31';
    expect(mainReducer(undefined, {
      type: 'SET_SELECTED_TEMP',
      temp
    })).toEqual(fromJS({
      location: '',
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp
      }
    }));
  });

  it('should react to an action with the type SET_SELECTED_DATE', () => {
    const date = '2016-12-25';
    expect(mainReducer(undefined, {
      type: 'SET_SELECTED_DATE',
      date
    })).toEqual(fromJS({
      location: '',
      data: {},
      dates: [],
      temps: [],
      selected: {
        date,
        temp: null
      }
    }));
  });

  it('should react to an action with the type SET_DATA', () => {
    const data = { some: 'data' };
    expect(mainReducer(undefined, {
      type: 'SET_DATA',
      data
    })).toEqual(fromJS({
      location: '',
      data,
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      }
    }));
  });

  it('should react to an action with the type SET_DATES', () => {
    const dates = ['2016-12-25', '2016-12-28'];
    expect(mainReducer(undefined, {
      type: 'SET_DATES',
      dates
    })).toEqual(fromJS({
      location: '',
      data: {},
      dates,
      temps: [],
      selected: {
        date: '',
        temp: null
      }
    }));
  });

  it('should react to an action with the type SET_TEMPS', () => {
    const temps = ['2016-12-25', '2016-12-28'];
    expect(mainReducer(undefined, {
      type: 'SET_TEMPS',
      temps
    })).toEqual(fromJS({
      location: '',
      data: {},
      dates: [],
      temps,
      selected: {
        date: '',
        temp: null
      }
    }));
  });
});
