export default function getStudentIdsSum(students) {
  const sumOfIds = students.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    0,
  );
  return sumOfIds;
}
