const index = require('./caluclation_fee');

test('運賃計算', () => {
  expect(index(3)).toBe(130);
});