function grid(N) {
    let sum = '';
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    let repeated = abc.repeat(10);
    if (N < 0){
      return null;
    } else if(N == 0){
      return '';
    } else if(N == 1){
      return 'a';
    }
    for (let i=0; i<N; i++){
      sum += repeated.slice(i,((i==0) ? N : N+i)).split("").join(' ') + '\n'
    } 
    // ти маєш повертати масив масивів, наприклад grid(3) --> [['a','b','c'],['b','c','d'],['c','d','e']]
    // треба переробити
    return sum.slice(0,sum.length-1)
  }
