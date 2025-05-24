function mostCommonElements(numbers, k) {
    let n = numbers.length;
    let bucket = Array.from({length : n + 1}, () => [] )

    let count = {}

    for (let val of numbers) {
        count[val] = (count[val] || 0) + 1;
    }

    for (let key in count) {
        bucket[count[key]].push(parseInt(key))
    }

    const res = []

    for(let i = bucket.length - 1; i > 0; i-- ){
     for(let n of bucket[i]){
         res.push(n);
         if(res.length === k){
             console.log(res)
         }
     }
    }
}

mostCommonElements([4,4,4,6,6,5,5,5], 2)