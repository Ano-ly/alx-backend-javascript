export default function getListStudentIds(arr) {
  if (Array.isArray(arr) === false) {
    return [];
  }
  return arr.map((obj) => obj.id);
}
