const greet = require("./greeting");

test("return Hello + WORLD ", function() {
  const result = greet("");
  expect(result).toBe(`Hello WORLD!`);
});


test("return Hello + NAME ", function() {
const result = greet("Matt");
  expect(result).toBe(`Hello MATT!`);
});
