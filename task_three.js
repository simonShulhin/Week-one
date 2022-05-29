function isValidParentheses(parens){
    while (parens.includes('()')) { 
        // good practice не змінювати аргументи функції
      parens = parens.replace('()', '');
    }
    // використовуй строге порівняння ===
    return (parens == '');
  }
