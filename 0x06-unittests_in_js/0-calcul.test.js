const assert = require('assert');
const calc = require('./0-calcul1.js');

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
  it('fifth test', () => {
    assert.equal(calc(Infinity, -Infinity), NaN);
  });
  it('sixth test', () => {
    assert.equal(calc(Infinity, NaN), NaN);
  });
  it('seventh test', () => {
    assert.equal(calc(Infinity, Infinity), Infinity);
  });
  it('eleventh test', () => {
    assert.equal(calc(-2.3, 3.7), 2);
  });
  it('twelfth test', () => {
    assert.equal(calc(2.5, 3.5), 7);
  });
});
