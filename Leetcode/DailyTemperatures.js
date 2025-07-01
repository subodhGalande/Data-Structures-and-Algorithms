function   dailyTemperatures(temperatures) {

    let n = temperatures.length;
    let res = Array(n).fill(0)
    let stack = []


    for(let i = 0; i < n; i++){
        while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]] )
        {
            let idx = stack.pop()
            res[idx] = i - idx

        }
        stack.push(i)

    }

    return res
}

dailyTemperatures([30,38,30,36,35,40,28])