const expect = (value) => {
  return {
    toBe: function (val) {
      if (value === val) {
        return true;
      } else {
        throw "Not Equal";
      }
    },
    notToBe: function (val) {
      if (value !== val) {
        return true;
      } else {
        throw "Equal";
      }
    }
  };
};

// // Test cases
// const func1 = () => {
//   try {
//     expect(5).toBe(5);
//     return true;
//   } catch (error) {
//     return false;
//   }
// };

// const func2 = () => {
//   try {
//     expect(5).toBe(null);
//     return { "error": "Not Equal" };
//   } catch (error) {
//     return { "error": error };
//   }
// };

// const func3 = () => {
//   try {
//     expect(5).notToBe(null);
//     return true;
//   } catch (error) {
//     return false;
//   }
// };

// console.log(JSON.stringify(func1())); // Output: true
// console.log(JSON.stringify(func2())); // Output: {"error":"Not Equal"}
// console.log(JSON.stringify(func3())); // Output: true

module.exports = expect;