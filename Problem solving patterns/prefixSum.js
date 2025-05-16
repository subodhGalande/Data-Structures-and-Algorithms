function prefixSum(arr){

    let preSum = [];
    preSum[0] = arr[0]
    for(let i = 1; i < arr.length; i++){
        preSum[i] = preSum[i-1] + arr[i]
    }

    console.log(preSum)

}

prefixSum([2,4,5,6,7])