'use strict'
const divJuice = require('./div_juice');

test('あまりあり', () => {
  expect(divJuice(500, 180)).toBe(2);
});

test('あまりなし', () => {
  expect(divJuice(295, 295)).toBe(1);
});

test('上限ok', () => {
  expect(divJuice(2000, 300)).toBe(6);
});

test('上限ng', () => {
  expect(divJuice(3000, 300)).toBe(undefined);
});

test('下限ok', () => {
  expect(divJuice(1500, 100)).toBe(15);
});

test('下限ng', () => {
  expect(divJuice(1500, 50)).toBe(undefined);
});
