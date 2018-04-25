const toWords = require("./to_words");

test("return my sentence ", function() {
  const result = toWords("hello my friend");
  expect(result).toEqual(["hello", "my", "friend"]);
});



test("return my sentence ", function() {
  const result = toWords("hello I'm Matt");
  expect(result).toEqual(["hello", "I", "'", "m", "Matt"]);
});
