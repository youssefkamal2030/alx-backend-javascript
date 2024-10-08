export default function cleanSet(set, startString) {
  const ans = [];
  for (const e of set.values()) {
    const valuesubstt = e.substring(startString.length);
    if (valuesubstt && valuesubstt !== e) ans.push(valuesubstt);
  }
  return ans.join('-');
}
