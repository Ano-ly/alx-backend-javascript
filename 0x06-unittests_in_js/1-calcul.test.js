const assert = require('assert');
const calc = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('first test', () => {
    assert.equal(calc(3.5, 4.7), 9);
  });
  it('second test', () => {
    assert.equal(calc(0, 0), 0);
  });
  it('third test', () => {
    assert.equal(calc(NaN, 4.7), NaN);
  });
  it('fourth test', () => {
    assert.equal(calc(3.5), NaN);
  });
});
