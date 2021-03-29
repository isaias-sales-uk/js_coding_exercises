const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  return nums.indexOf(n) >= 0 && nums.indexOf(n) < nums.length - 1 ? nums[nums.indexOf(n) + 1] : null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  return str.split('').reduce((acc, num) => {
    if (num === '0') acc["0"] += 1
    else if (num === '1') acc["1"] += 1
    return acc;
  }, {0:0, 1:0})

};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return Number.parseInt(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.flat().reduce((total, num) => total + num);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // I do not know how to solve this one yet
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  /*for (let idx in haystack ){
    return (typeof haystack[idx] === "string" && haystack[key].toLowerCase().includes(searchTerm.toLowerCase())); 
  }
  return false;
  */
  for (let idx in haystack ){
    if (typeof haystack[idx] === "string" && haystack[idx].toLowerCase().includes(searchTerm.toLowerCase())) 
      return true; 
  }
  return false;
};

function getWordFrequencies(str) {
  if (str === undefined)
    throw new Error("str is required");

  let freqArr = {};
  let arrAux = str.split(" ");

  for (let i = 0; i < arrAux.length; i++) {

    let regex = /(\.|\?|!|:|;|,)/;
    let word = arrAux[i].toLowerCase();

    word = word.charAt(word.length - 1).match(regex) ? word.slice(0, word.length - 1) : word;
    freqArr[word] = (freqArr[word] === undefined) ? freqArr[word] = 1 : freqArr[word] += 1;
  }
  return freqArr;
}

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
