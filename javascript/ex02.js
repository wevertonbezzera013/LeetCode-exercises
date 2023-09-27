var expect = function (val) {
  return {
    toBe: (val2) => {
      if (val !== val2) throw new Error("Not Equal");
      else console.log(true);
    },
    notToBe: (val2) => {
      if (val === val2) throw new Error("Equal");
      else console.log(true);
    },
  };
};

expect(5).toBe(5);
