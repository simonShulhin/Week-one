function isValidParentheses(parens){
    while (parens.includes('()')) { 
      parens = parens.replace('()', '');
    }
    return (parens === '');
  }