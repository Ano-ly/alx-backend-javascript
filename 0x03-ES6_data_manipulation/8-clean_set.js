export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  const strLen = startString.length;
  const newArray = [];
  for (const myStr of set) {
    if (typeof(myStr) === 'undefined') {
      continue;
    }
    if (myStr.startsWith(startString) && myStr.length > strLen) {
      newArray.push(myStr.substring(strLen));
    }
  }
  return newArray.join('-');
}
