const fs = require('fs');

function findName(el) {
  if (el === 'firstname') {
    return true;
  }
  return false;
}

function findField(el) {
  if (el === 'field') {
    return true;
  }
  return false;
}

function countStudents(myPath) {
  try {
    const theStr = fs.readFileSync(myPath, { encoding: 'utf-8' });
    const str = theStr.trim();
    const array = str.split('\n');
    const cols = array[0].split(',');
    const myArray = array.slice(1);
    const nameIdx = cols.findIndex(findName);
    const fieldIdx = cols.findIndex(findField);
    const lenStuds = myArray.length;

    const listMajor = new Set();
    for (const myItem of myArray) {
      const params = myItem.split(',');
      listMajor.add(params[fieldIdx]);
    }
    console.log(`Number of students: ${lenStuds}`);

    for (const major of listMajor) {
      let noStuds = 0;
      const names = [];
      for (const item of myArray) {
        const infoList = item.split(',');
        if (major === infoList[fieldIdx]) {
          names.push(infoList[nameIdx]);
          noStuds += 1;
        }
      }
      const studs = names.join(', ');
      console.log(`Number of students in ${major}: ${noStuds}. List: ${studs}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database\n');
  }
}

module.exports = countStudents;
