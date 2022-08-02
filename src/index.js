module.exports = function check(str, bracketsConfig) {

  const OPEN_BRACKETS = ['[', '{', '|', '1', '(', '3', '5'];
  const PALINDROM = ['|', '7', '8'];
  const BRACKET_PAIR = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
  };

    let stack = [];

    for (let i = 0; i < str.length; i++){
      let currentSymbol = str[i];
      let topElement = stack[stack.length - 1];
      
      if (PALINDROM.includes(currentSymbol)){
        if (topElement === currentSymbol){
          stack.pop()
        }
        else {
          stack.push(currentSymbol);
        }
      } 
      
      else {

      if (OPEN_BRACKETS.includes(currentSymbol)){
            stack.push(currentSymbol);
          }
      else {
       
        if (stack.length === 0){
        return false;
      }
    
      if (BRACKET_PAIR[currentSymbol] === topElement){
        stack.pop();
      }
      else {
        return false;
      }
    }
  }
}
    return stack.length === 0;
  }

