var findWordsContaining = function (words, x) {
  let index = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      index.push(i);
    }
  }
  console.log(index);
  return index;
};

findWordsContaining(["carrot", "apple", "litchi", "orange"], "a");
