function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word[0].toUpperCase() + word.slice(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName[0] + "." + lastName[0];
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return parseFloat((originalPrice * (1 + vatRate / 100)).toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return parseFloat((originalPrice * (1 - reduction / 100)).toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  return (str.length % 2 == 0) ? str.substr(str.length / 2 - 1, 2) : str.substr(parseInt(str.length / 2), 1);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split('').reverse().join('');
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  /*for (let index = 0; index < sentence.length; index++) {
    sentence[index] = sentence[index].split('').reverse().join('');
  } 
  return sentence;*/
  //refactored code
  return words.map(reverseWord);
}

function countLinuxUsers(users) {
  let totLinuxUsers = 0;
  if (users === undefined) throw new Error("users is required");
  users.forEach(element => {
    if (element.type === "Linux") totLinuxUsers++;
  });
  return totLinuxUsers;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  return parseFloat((scores.reduce((a, b) => (a + b)) / scores.length).toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  return (n % 3 !== 0 && n % 5 !== 0) ? n : (n % 3 === 0 && n % 5 === 0) ? "fizzbuzz" : (n % 3 === 0) ? "fizz" : "buzz";
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
