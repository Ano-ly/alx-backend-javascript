export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredArray = students.filter((obj) => obj.location === city);
  return filteredArray;
}
