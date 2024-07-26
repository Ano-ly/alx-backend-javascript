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
  it('fifth test', () => {
    assert.equal(calc(Infinity, -Infinity), NaN);
  });
  it('sixth test', () => {
    assert.equal(calc(Infinity, NaN), NaN);
  });
  it('seventh test', () => {
    assert.equal(calc(Infinity, Infinity), Infinity);
  });
  it('eighth test', () => {
    assert.equal(calc(1e10 + 0.4, 0.6), 10000000001);
  });
  it('ninth test', () => {
    assert.equal(calc(-1e10 + 0.4, 0.6), -9999999999);
  });
  it('tenth test', () => {
    assert.equal(calc(1.4999999, 2.5000001), 4);
  });
  it('eleventh test', () => {
    assert.equal(calc(-2.3, 3.7), 2);
  });
  it('twelfth test', () => {
    assert.equal(calc(2.5, 3.5), 7);
  });
  it('thirteenth test', () => {
    assert.equal(calc(1e10 + 0.4, 1e10 + 0.6), 20000000001);
  });
  it('thirteenth test', () => {
    assert.equal(calc(1, 2), 3);
  });
});
