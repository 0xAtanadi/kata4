// 4.
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs: a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example: 
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
