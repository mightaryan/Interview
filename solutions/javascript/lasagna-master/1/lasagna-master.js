/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(num) {
if(num === 0) {
  return 'Lasagna is done.'
}
  else if (num > 0) {
  return  'Not done, please wait.'
    
}
  else {
    return 'You forgot to set the timer.'
  }
  }
export function preparationTime (arr , anyNum) {
  if(!anyNum) {
    return arr.length * 2
  }
  else {
    return  anyNum* arr.length
}
}

export function quantities(someArray) {
   let noodlesQuantities =  someArray.filter((item) => item === 'noodles').length;
      let sauceQuantities =  someArray.filter((item) => item === 'sauce').length;


   return {
       noodles: noodlesQuantities * 50,
       sauce: sauceQuantities * 0.2
   };
}

export function addSecretIngredient(friendsList, myList) {
    const secretIngredient = friendsList[friendsList.length - 1];
    myList.push(secretIngredient);
}

export function scaleRecipe(recipe, portions) {
    const scaledRecipe = {};
    const scaleFactor = portions / 2;
    
    Object.keys(recipe).forEach(ingredient => {
        scaledRecipe[ingredient] = recipe[ingredient] * scaleFactor;
    });
    
    return scaledRecipe;
}