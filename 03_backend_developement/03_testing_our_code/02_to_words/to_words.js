function toWords(sentence) {
  const allWords = sentence.split(/[.?!, ':]+/);

  return allWords.filter(word => word !== "");
}

console.log(toWords("hello my friend"))

module.exports = toWords;
