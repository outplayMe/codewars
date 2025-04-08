function zipWith(fn, a0, a1) {
  const resArr = [];
  const length = Math.min(a0.length, a1.length);
  for (let i = 0; i < length; i += 1) {
    resArr[i] = fn(a0[i], a1[i]);
  }
  return resArr;
}
