const maxFreq = function(s, maxLetters, minSize, maxSize) {

    let map = {};
    let set = new Set();
    let sub = '';
    let left = 0;

    for(let i = 0; i < minSize; i++) {
        sub += s[i];
    }
    set.add(sub)
    if(set.size <= maxLetters){
        map[sub] = (map[sub] || 0) + 1;
    }
    set.clear()
    sub = ''

    for(let right = minSize; right < s.length; right++){
        sub += s[right - left + 1];
        sub += s[right];
        sub += s[right + 1]

        set.add(sub);
        if(set.size<= maxLetters){
            map[sub] = (map[sub] || 0) + 1;
        }
        set.clear()
        sub = ''
    }

    const maxKey = Object.entries(map).reduce((maxpair, currentpair) => {
        return currentpair[1] > maxpair[1] ? currentpair : maxpair
    } )

    console.log(map)




};


maxFreq("aababcaab",2,3,4)