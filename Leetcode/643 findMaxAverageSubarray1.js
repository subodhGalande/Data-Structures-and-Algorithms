const findMaxAverage = function(nums, k) {

    let left = 0;
    let maxAverage = 0;
    let currSum = 0;

    for(let right = 0; right < nums.length; right++){
        while(right < k){
            currSum += nums[right]
            console.log(currSum)
        }
    }



};


findMaxAverage([1,12,-5,-6,50,3],  4)