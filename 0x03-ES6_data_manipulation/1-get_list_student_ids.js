export default function getListStudentsIds(arr) {
  if (!(arr instanceof Array)) return [];
  return arr.map((item) => item.id);
}
