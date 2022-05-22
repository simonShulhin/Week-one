function calculate (expected) {
    let array = expected.split(' ')
  
    if (array[1] == '+') {
      return array[0] + array[2]
    }
    else if (array[1] == '-') {
      return('.'.repeat(array[0].length - array[2].length)) 
    }
    else if (array[1] == '*') {
      return ('.'.repeat(array[0].length * array[2].length)) 
    }
    else if (array[1] == '//') {
      return ('.'.repeat(array[0].length / array[2].length)) 
    }
  }