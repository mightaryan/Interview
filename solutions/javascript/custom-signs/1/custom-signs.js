

export function buildSign(occasion, name) {
   return `Happy ${occasion} ${name}!`
}



export function buildBirthdaySign(age) {
  if(age >= 50) {
return "Happy Birthday! What a mature fellow you are."
  }
  else {
    return "Happy Birthday! What a young fellow you are."
  }
}


export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`
  
}

export function costOf(sign, currency) {
     let num = (sign.length *2) + 20
    

    return `Your sign costs ${num.toFixed(2)} ${currency}.`;
  
}
