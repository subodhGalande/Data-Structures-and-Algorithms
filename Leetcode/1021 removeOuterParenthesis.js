var removeOuterParentheses = function(s) {
    let res = "";
    let depth = 0;

    for (let ch of s) {
        if (ch === '(') {
            if (depth > 0) res += ch;
            depth++;
        } else {
            depth--;
            if (depth > 0) res += ch;
        }
    }

    return res;

}

removeOuterParentheses("(()())(())")