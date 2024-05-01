const expect = require('../ToBe-NotToBe');

describe('expect function', () => {
  it('toBe method should return true when values are equal', () => {
    expect(5).toBe(5);
  });

  it('toBe method should throw "Not Equal" error when values are not equal', () => {
    try {
      expect(5).toBe(6);
    } catch (error) {
      expect(error).toBe('Not Equal');
    }
  });

  it('notToBe method should return true when values are not equal', () => {
    expect(5).notToBe(6);
  });

  it('notToBe method should throw "Equal" error when values are equal', () => {
    try {
      expect(5).notToBe(5);
    } catch (error) {
      expect(error).toBe('Equal');
    }
  });
});
