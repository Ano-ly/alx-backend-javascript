const fs = require('fs');

function countStudents(myPath) {
  fs.readFile(myPath, { encoding: 'utf-8' }, (err, mystr) => {
    if (err) {
      throw new Error('Cannot load the database\n');
    } else {
      const str = mystr.trim();
      const array = str.split('\n');
      const cols = array[0].split(',')
      const myArray = array.slice(1);
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
      nameIdx = cols.findIndex(findName);
      fieldIdx = cols.findIndex(findField);
      const lenStuds = myArray.length;
      console.log(`Number of students: ${lenStuds}`);

      const listMajor = new Set();
      for (const myItem of myArray) {
        const params = myItem.split(',');
        listMajor.add(params[fieldIdx]);
      }

      for (const major of listMajor) {
        let noStuds = 0;
        const names = [];
        for (const item of myArray) {
          const infoList = item.split(',');
          if (major === infoList[fieldIdx]) {
            names.push(infoList[nameIdx]);
            noStuds++;
          }
        }
        const studs = names.join(', ');
        console.log(`Number of students in ${major}: ${noStuds}. List: ${studs}`);
      }
    }
  });
}

module.exports = countStudents;
