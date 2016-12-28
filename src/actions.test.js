import {
  changeLocation,
  setSelectedDate,
  setSelectedTemp,
  setData,
  setDates,
  setTemps
} from './actions';

describe('actions', () => {
  describe('changeLocation', () => {
    it('should have a type of "CHANGE_LOCATION"', () => {
      expect(changeLocation().type).toEqual('CHANGE_LOCATION');
    });

    it('should pass on the location we pass in', () => {
      const location = 'Vienna, Austria';
      expect(changeLocation(location).location).toEqual(location);
    });
  });

  describe('setSelectedDate', () => {
    it('should have a type of SET_SELECTED_DATE', () => {
      expect(setSelectedDate().type).toEqual('SET_SELECTED_DATE');
    });

    it('should pass on the date we pass in', () => {
      const date = '2016-12-28';
      expect(setSelectedDate(date).date).toEqual(date);
    });
  });

  describe('setSelectedTemp', () => {
    it('should have a type of SET_SELECTED_TEMP', () => {
      expect(setSelectedTemp().type).toEqual('SET_SELECTED_TEMP');
    });

    it('should pass on the temp we pass in', () => {
      const temp = '31';
      expect(setSelectedTemp(temp).temp).toEqual(temp);
    });
  });

  describe('setData', () => {
    it('should have a type of SET_DATA', () => {
      expect(setData().type).toEqual('SET_DATA');
    });

    it('should pass on the data we pass in', () => {
      const data = { some: 'data' };
      expect(setData(data).data).toEqual(data);
    });
  });

  describe('setDates', () => {
    it('should have a type of SET_DATES', () => {
      expect(setDates().type).toEqual('SET_DATES');
    });

    it('should pass on the dates we pass in', () => {
      const dates = ['2016-12-25', '2016-12-28']
      expect(setDates(dates).dates).toEqual(dates);
    });
  });

  describe('setTemps', () => {
    it('should have a type of SET_TEMPS', () => {
      expect(setTemps().type).toEqual('SET_TEMPS');
    });

    it('should pass on the temps we pass in', () => {
      const temps = ['13', '31'];
      expect(setTemps(temps).temps).toEqual(temps);
    });
  });
});
