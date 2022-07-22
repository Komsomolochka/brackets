module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let pairBrackets = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    pairBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  let stack = [];
  let num = 0;

  for (let i = 0; i < str.length; i++) {
    let currentItem = str[i];
    if (openBrackets.includes(currentItem)) {
      if (
        stack[stack.length - 1] === currentItem &&
        pairBrackets[currentItem] === currentItem
      ) {
        stack.pop();
      } else {
        stack.push(currentItem);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      let lastBracket = stack[stack.length - 1];
      if (pairBrackets[currentItem] === lastBracket) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
