
export function canExecuteFastAttack(knightIsAwake) {
  if(knightIsAwake === true) {
    return false;
  }
  else {
    return true;
  }
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake === false && archerIsAwake === false &&  prisonerIsAwake === false) {
    return false;
  }
    
  else {
    return true;
  }
  
}


export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake
}


export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
    return !knightIsAwake && !archerIsAwake && prisonerIsAwake || !archerIsAwake && petDogIsPresent 
  
}
