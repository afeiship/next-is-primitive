var nx = require('next-js-core2');
require('../src/next-is-primitive');

test('nx.isPrimitive', function() {
  var v1 = null;
  var v2 = undefined;
  var v3 = NaN;
  var v4 = 1.4;
  var v5 = 5;
  var v6 = '124';
  var v7 = 'str1';
  var v8 = new Date();
  var v9 = function() {};
  var v10 = { name: 'fei' };
  var v11 = /test/g;


  expect(nx.isPrimitive(v1)).toBe(true);
  expect(nx.isPrimitive(v2)).toBe(true);
  expect(nx.isPrimitive(v3)).toBe(true);
  expect(nx.isPrimitive(v4)).toBe(true);
  expect(nx.isPrimitive(v5)).toBe(true);
  expect(nx.isPrimitive(v6)).toBe(true);
  expect(nx.isPrimitive(v7)).toBe(true);
  expect(nx.isPrimitive(v8)).toBe(false);
  expect(nx.isPrimitive(v9)).toBe(false);
  expect(nx.isPrimitive(v10)).toBe(false);
  expect(nx.isPrimitive(v11)).toBe(false);

});
