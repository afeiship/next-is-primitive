var nx = require('next-js-core2');
require('../src/next-is-primitive-value');

test('nx.isPrimitiveValue', function() {
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


  expect(nx.isPrimitiveValue(v1)).toBe(true);
  expect(nx.isPrimitiveValue(v2)).toBe(true);
  expect(nx.isPrimitiveValue(v3)).toBe(true);
  expect(nx.isPrimitiveValue(v4)).toBe(true);
  expect(nx.isPrimitiveValue(v5)).toBe(true);
  expect(nx.isPrimitiveValue(v6)).toBe(true);
  expect(nx.isPrimitiveValue(v7)).toBe(true);
  expect(nx.isPrimitiveValue(v8)).toBe(false);
  expect(nx.isPrimitiveValue(v9)).toBe(false);
  expect(nx.isPrimitiveValue(v10)).toBe(false);
  expect(nx.isPrimitiveValue(v11)).toBe(false);

});
