function removeDuplicates(arr){

    const count = {};
    const res = []

    for(let val of arr){
        count[val] = (count[val] || 0) + 1;
    }

    for(let val in count){
        res.push(val)
    }

    console.log(res)




}

removeDuplicates([1,2,3,3,4,5,6,7,7])