'use strict'
const StockTrade = require('./trade');

test('test case1', () => {
  const input_lines = [];
  input_lines.push('5 110 120');
  input_lines.push('110');
  input_lines.push('100');
  input_lines.push('120');
  input_lines.push('130');
  const expected = '30';
  const stockTrade = new StockTrade(...input_lines[0].split(' '));
  const result = stockTrade.trade(input_lines.slice(1));
  expect(result.toString()).toBe(expected);
});

test('test case2', () => {
  const input_lines = [];
  input_lines.push('3 100 200');
  input_lines.push('80');
  input_lines.push('80');
  input_lines.push('30');
  const expected = '-100';
  const stockTrade = new StockTrade(...input_lines[0].split(' '));
  const result = stockTrade.trade(input_lines.slice(1));
  expect(result.toString()).toBe(expected);
});