
export function twoSum(array1, array2) {
   return parseInt(array1.join('')) + parseInt(array2.join(""))
}


export function luckyNumber(value) {
    let rev = Number(value.toString().split("").reverse().join(""))
  if(value == rev) {
      return true
  }
  else {
      return false
  }
}


export function errorMessage(input) {
      if (!input) {
        return 'Required field';
    }
    

    const number = Number(input);

    if (isNaN(number) || number === 0) {
        return 'Must be a number besides 0';
    }

    return '';
  
}
