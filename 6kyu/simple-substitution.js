// https://www.codewars.com/kata/52eb114b2d55f0e69800078d/train/javascript

function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    let res = '';
    for (let i = 0; i < str.length; i += 1) {
      let index = abc1.indexOf(str[i]);
      if (index === -1) {
        res += str[i];
        continue;
      }
      res += abc2.charAt(index);
    }
    return res;
  };
  this.decode = function (str) {
    let res = '';
    for (let i = 0; i < str.length; i += 1) {
      let index = abc2.indexOf(str[i]);
      if (index === -1) {
        res += str[i];
        continue;
      }
      res += abc1.charAt(index);
    }
    return res;
  };
}
