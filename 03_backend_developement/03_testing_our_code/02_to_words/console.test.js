const HelloSailor = require("./console");


test("it should write smth", function() {
  console.log = jest.fn();

  helloSailor("Matt");

  expect(console.log).toHaveBeenCalledWith("Howdy Matt!");
  expect(console.log).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
});
