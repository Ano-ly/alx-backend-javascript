const assert = require('assert');
const calc = require('./1-calcul.js');

describe('Test add', () => {
  it('first test', () => {
    assert.equal(calc('SUM', 3.5, 4.7), 9);
  });
  it('second test', () => {
    assert.equal(calc('SUM', 0, 0), 0);
  });
  it('third test', () => {
    assert.equal(calc('SUM', NaN, 4.7), NaN);
  });
  it('fourth test', () => {
    assert.equal(calc('SUM', 3.5), NaN);
  });
});

describe('Test subtract', () => {
  it('first test', () => {
    assert.equal(calc('SUBTRACT', 1.4, 4.5), -4);
  });
  it('second test', () => {
    assert.equal(calc('SUBTRACT', 0, 0), 0);
  });
  it('third test', () => {
    assert.equal(calc('SUBTRACT', NaN, NaN), NaN);
  });
  it('fourth test', () => {
    assert.equal(calc('SUBTRACT', 3), NaN);
  });
  it('fifth test', () => {
    assert.equal(calc('SUBTRCT', 3, 3.3), undefined);
  });
  it('sixth test', () => {
    assert.equal(calc('Wrong Type', 3), undefined);
  });
});

describe('Test divide', () => {
  it('first test', () => {
    assert.equal(calc('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('second test', () => {
    assert.equal(calc('DIVIDE', 0, 4.5), 0);
  });
  it('third test', () => {
    assert.equal(calc('DIVIDE', NaN, 4.5), NaN);
  });
  it('fourth test', () => {
    assert.equal(calc('DIVIDE', 5, 0), 'Error');
  });
  it('fifth test', () => {
    assert.equal(calc('DIVIDE', NaN, 0), 'Error');
  });
  it('sixth test', () => {
    assert.equal(calc('Wrong type', 4, 0), undefined);
  });
  it('seventh test', () => {
    assert.equal(calc(), undefined);
  });
  it('eighth test', () => {
    assert.equal(calc(0), undefined);
  });
});
