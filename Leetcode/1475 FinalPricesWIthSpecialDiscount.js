function finalDiscount(prices) {

    let stack = [];
    let res = Array(prices.length).fill(0)

    for(let i = 0; i < prices.length; i++){
        while(stack.length && prices[i] < prices[stack[stack.length - 1]] ){
            let idx = stack.pop()
            res[idx] = prices[idx] - prices[i]
        }
        stack.push(i)

    }

    return res;

}

finalDiscount([8,4,6,2,3])