
  function  evalRPN(tokens) {

        let stack = [];
        let res = 0;
        if(tokens.length === 1) return parseInt(tokens[0]);
        for(let val of tokens){
            if( val !== '+' && val !== '-' && val !== '/' &&val !== '*' ){
                stack.push(parseInt(val))
            }
            if( val === '+' ){
                let num1 = stack.pop();
                let num2 = stack.pop();
                res = num2 + num1;
                stack.push(res)
            } else if ( val === '-'){
                let num1 = stack.pop();
                let num2 = stack.pop();
                res = num2 - num1;
                stack.push(res);
            }
            else if ( val === '*'){
                let num1 = stack.pop();
                let num2 = stack.pop();
                res = num2 * num1;
                stack.push(res);}
            else if ( val === '/'){
                let num1 = stack.pop();
                let num2 = stack.pop();
                res = num2 / num1;
                stack.push(Math.trunc(res));}
        }

        return stack.pop()


}



// evalRPN(["1","2",'+',"3","*","4", "-"])
// evalRPN(['2','1','+','3','*'])
evalRPN(["4","13","5","/","+"])

//_________________________________________________________________________________________________
//   cleaner way to write the above code


  // class Solution {
  //     evalRPN(tokens) {
  //         let stack = [];        // Stack to hold numbers
  //         let res = 0;           // Result variable (optional)
  //         if (tokens.length === 1) return parseInt(tokens[0]); // Handle single number edge case
  //
  //         for (let val of tokens) {
  //             if (val !== '+' && val !== '-' && val !== '/' && val !== '*') {
  //                 stack.push(parseInt(val)); // If it's a number, push to stack
  //             } else {
  //                 // Pop last two numbers (num2 operator num1)
  //                 let num1 = stack.pop();
  //                 let num2 = stack.pop();
  //
  //                 if (val === '+') res = num2 + num1;
  //                 else if (val === '-') res = num2 - num1;
  //                 else if (val === '*') res = num2 * num1;
  //                 else if (val === '/') res = Math.trunc(num2 / num1); // Truncate towards zero
  //
  //                 stack.push(res); // Push result back to stack
  //             }
  //         }
  //         return stack.pop(); // Final result
  //     }
  // }