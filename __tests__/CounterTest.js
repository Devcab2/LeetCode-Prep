const counter = require('../Counter');

describe('Counter Function', () => {
  it('should return incremented values starting from 10', () => {
    const n = 10;
    const counterFunc = counter(n);
    const output = [1, 2, 3].map(() => counterFunc());
    expect(output).toEqual([10, 11, 12]); 
  });

  it('should return incremented values starting from -2', () => {
    const n = -2;
    const counterFunc = counter(n);
    const output = [1, 2, 3, 4, 5].map(() => counterFunc());
    expect(output).toEqual([-2, -1, 0, 1, 2]);
  });
});
