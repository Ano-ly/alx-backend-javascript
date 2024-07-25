function calculateNumber(type, a, b) {
  const rA = Math.round(a);
  const rB = Math.round(b);
  if (type === 'DIVIDE') {
    if (rB === 0) {
      return 'Error';
    }
    return (rA / rB);
  } else if (type === 'SUM') {
    return (rA + rB);
  } else if (type === 'SUBTRACT') {
    return (rA - rB);
  }
}
module.exports = calculateNumber;
