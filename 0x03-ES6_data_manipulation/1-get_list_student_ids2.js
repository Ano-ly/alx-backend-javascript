export default function getListStudentIds(arr) {
  const newArray = arr.map((obj) => obj.id);
  return newArray;
}
