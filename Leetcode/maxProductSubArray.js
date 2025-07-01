function maxProductSubArray(numbers) {

    if(numbers.length === 1) return numbers[0]

    let preSum = [];
    preSum[0] = numbers[0]

    for(let i = 1; i < numbers.length; i++){
        preSum[i] = preSum[i - 1] * numbers[i]
        console.log(preSum)

    }





}


maxProductSubArray([1,2,-3,5,1])