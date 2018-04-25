const orangeTree = require("./03_orange_tree");


test('should be able to pick an orange', function() {
  tree.seed();
  tree.oranges = 43;

  expect(tree.pickAnOrange()).toEqual(true);
  expect(tree.oranges).toEqual(42);
});
