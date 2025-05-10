//https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

function solution(roman) {
  const romanValues = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let result = 0;

  for (let i = 0; i < roman.length - 1; i += 1) {
    const current = romanValues[roman[i]];
    const next = romanValues[roman[i + 1]];

    if (next > current) {
      result -= current;
    } else {
      result += current;
    }
  }

  result += romanValues[roman[roman.length - 1]];

  return result;
}
