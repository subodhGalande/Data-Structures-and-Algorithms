function firstNonRepeatingChar(str){

    let count = {}

    for(let val of str) {
        count[val] = (count[val] || 0) + 1;

    }

    for (let val in count){
      if(count[val] === 1 ){
          console.log(val)
          break;
      }

    }



}


// firstNonRepeatingChar("leetcode")
firstNonRepeatingChar("eetcode")