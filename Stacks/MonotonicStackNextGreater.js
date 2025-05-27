function nextGreater(arr){
    let res = new Array(arr.length).fill(-1)
   let stack = [];

    for(let i = 0; i < arr.length; i++){
        while(stack.length && arr[i] > arr[stack[stack.length-1]]){
            let idx = stack.pop();
            res[idx] = arr[i]

        }
        stack.push(i)
    }

    return res;

}

nextGreater([2,1,5,3])