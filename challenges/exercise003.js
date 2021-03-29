function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(function (value) {
    return Math.pow(value, 2);
  })
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelWord = words.map((word, ind) => {
    return ind === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
  });
  return camelWord.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return people.reduce((acc, curr) => {
    return acc + curr.subjects.length;
  }, 0);
} 

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {
      return true;
    }
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  /*let numDuplicate = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let a = 0; a < arr2.length; a++) {
      if (arr1[i] === arr2[a]) && (!numDuplicate.includes(arr1[i])) 
        numDuplicate.push(arr1[i]);
    }
  }
  return numDuplicate.sort();
  */
  let numDuplicate = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let a = 0; a < arr2.length; a++) {

      if (arr1[i] === arr2[a]) {
        if (!numDuplicate.includes(arr1[i])) {
          numDuplicate.push(arr1[i]);
        }
      }
    }
  }
  return numDuplicate.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
