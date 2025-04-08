//task link
//https://www.codewars.com/kata/59b401e24f98a813f9000026/train/javascript

function computeDepth(x) {
  const digitsArr = [];
  let multiplier = 1;
  while (digitsArr.length !== 10) {
    let value = x * multiplier + '';
    value.split('').map((digit) => {
      if (!digitsArr.includes(digit)) {
        digitsArr.push(digit);
      }
    });
    multiplier += 1;
  }
  return multiplier - 1;
}
