'use strict'
const divJuice = require('./div_juice');

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
  console.log(divJuice(Number(input_lines[0]),Number(input_lines[1])));
});
