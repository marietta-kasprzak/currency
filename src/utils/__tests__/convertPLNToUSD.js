import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('abc')).toBeNaN();
    expect(convertPLNToUSD('-543')).toBeNaN();
  });
  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });

  it('should return Error when input is array', () => {
      expect(convertPLNToUSD([])).toBe('Error');
      expect(convertPLNToUSD([1,2,3])).toBe('Error');
    }); 

    it ('should return error when input is not string or number', () => {
        expect(convertPLNToUSD({name: 'Anna'})).toBe('Error');
    });

    it ('should return $0.00 when number is less than 0', () => {
        expect(convertPLNToUSD(-5)).toBe('$0.00');
        expect(convertPLNToUSD(0)).toBe('$0.00');
    })

});