const express = require('express');
const fs = require('fs')

const app = express();
const port = 1245;
const myPath = process.argv[2];

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
  const myPromise = new Promise((resolve, reject) => {
    const fieldsInfo = [];
    fs.readFile(myPath, { encoding: 'utf-8' }, (err, theStr) => {
      if (err) {
        reject(new Error('Cannot load the database\n'));
      } else {
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
        const intro = `Number of students: ${lenStuds}`;

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
          fieldsInfo.push(`Number of students in ${major}: ${noStuds}. List: ${studs}`);
        }
        const fieldsStr = fieldsInfo.join('\n');
        resolve(`This is the list of our students\n${intro}\n${fieldsStr}`);
      }
    });
  });
  return myPromise;
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(myPath)
    .then((str) => {
      res.send(str);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

app.listen(port);

module.exports = app;
