'use strict'
const StockTrade = require('./trade');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var input_lines = []; // 標準入力から与えられた各行を保存する変数：input_lines
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  input_lines.push(line);
});
reader.on('close', () => {
  // 取得した値を標準出力するために"XXXXXX"をどう書き換える？
  // ヒント: input_lines[0]に1行目の値が保存されている
  const stockTrade = new StockTrade(...input_lines[0].split(' '));
  const result = stockTrade.trade(input_lines.slice(1));
  console.log('execute logic by using user_logic');
});
