let testList = ["aabb", "abcd", "bbaa", "dada"];
function anagrams(originalWord, wordsInArray) {
  anagramList = [];
  const sortedOriginalWord = originalWord
    .split("")
    .sort()
    .join("")
    .toLowerCase();
  for (let arrayWord of wordsInArray) {
    anagramVerifier = 0;
    if (arrayWord.length == sortedOriginalWord.length) {
      sortedArrayWord = arrayWord.split("").sort().join("").toLowerCase();
      for (let i = 0; i < sortedOriginalWord.length; i++) {
        if (sortedArrayWord[i] == sortedOriginalWord[i]) {
          anagramVerifier++;
        }
      }
      if (anagramVerifier == sortedOriginalWord.length) {
        anagramList.push(arrayWord);
      }
    } else {
      console.log(
        `word length of ${arrayWord}(${arrayWord.length}) does not match length of the original word, ${originalWord}(${originalWord.length}) `
      );
    }
  }
  return anagramList;
}
