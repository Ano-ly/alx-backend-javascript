const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 1245;

const args = process.argv;
const file = args[2];

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
        resolve(`${intro}\n${fieldsStr}`);
      }
    });
  });
  return myPromise;
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const myurl = url.parse(req.url).pathname;
  if (myurl === '/') {
    res.end('Hello Holberton School!');
  } else if (myurl === '/students') {
    countStudents(file)
      .then((str) => {
        res.end(str);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(err.message);
      });
  }
});

app.listen(port, () => {
  console.log('Server listening on port');
});

module.exports = app;
