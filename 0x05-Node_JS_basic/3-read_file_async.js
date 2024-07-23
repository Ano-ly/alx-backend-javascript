const fs = require('fs');

function countStudents(myPath) {
  fs.readFile(myPath, { encoding: 'utf-8' }, (err, mystr) => {
    if (err) {
      process.stderr.write('Cannot load the database\n');
    } else {
      const str = mystr.trim();
      const myArray = str.split('\n').slice(1);
      const lenStuds = myArray.length;
      console.log(`Number of students: ${lenStuds}`);

      const listMajor = new Set();
      for (const myItem of myArray) {
        const params = myItem.split(',');
        listMajor.add(params.slice(-1)[0]);
      }

      for (const major of listMajor) {
        let noStuds = 0;
        const names = [];
        for (const item of myArray) {
          const infoList = item.split(',');
          if (major === infoList.slice(-1)[0]) {
            names.push(infoList[0]);
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
