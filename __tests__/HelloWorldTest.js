const createHelloWorld = require('../HelloWorld');

describe('createHelloWorld', () => {
  it('should return "Hello World"', () => {
      const f = createHelloWorld();
      expect(f()).toBe("Hello World");
  });

  it('should return "Hello World" regardless of arguments passed', () => {
      const f = createHelloWorld();
      expect(f({}, null, 42)).toBe("Hello World");
      expect(f(1, 'test', [1, 2, 3])).toBe("Hello World");
      expect(f('argument1', 'argument2')).toBe("Hello World");
  });

  it('should return "Hello World" even when no arguments are passed', () => {
      const f = createHelloWorld();
      expect(f()).toBe("Hello World");
  });

  it('should return "Hello World" when passing arguments of different types', () => {
      const f = createHelloWorld();
      expect(f(123, "test", { key: "value" })).toBe("Hello World");
      expect(f(undefined, null)).toBe("Hello World");
  });

  it('should return "Hello World" regardless of the number of arguments passed', () => {
      const f = createHelloWorld();
      expect(f()).toBe("Hello World");
      expect(f(1)).toBe("Hello World");
      expect(f(1, 2, 3, 4, 5)).toBe("Hello World");
  });
});