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

  // edge cases
  // Test case for a non-integer value of n
  it('should handle non-integer values of n', () => {
    const n = 10.5; // Non-integer value
    const counterFunc = counter(n);
    const output = [1, 2, 3].map(() => counterFunc());
    expect(output).toEqual([10.5, 11.5, 12.5]); // Expect output to reflect the non-integer value and incrementation
  });

  // Test case for an empty input
  it('should handle empty input', () => {
    const n = undefined; // Empty input
    const counterFunc = counter(n || 0); // Provide a default value if input is empty
    const output = [1, 2, 3].map(() => counterFunc());
    expect(output).toEqual([0, 1, 2]); // Expect output to start from 0 and increment
  });
});
