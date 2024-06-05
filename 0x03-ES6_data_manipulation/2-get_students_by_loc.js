export default function getStudentsByLocation(students, city) {
  const filteredArray = students.filter((obj) => obj.location === city);
  return filteredArray;
}
