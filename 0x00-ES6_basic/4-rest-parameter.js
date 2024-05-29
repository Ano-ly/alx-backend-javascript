export default function returnHowManyArguments(...myArgs) {
  let counter = 0;
  for (const item of myArgs) { // eslint-disable-line no-unused-vars
    counter += 1;
  }
  return counter;
}
