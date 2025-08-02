
export function getFirstCard(deck) {
  return deck[0]
}

export function getSecondCard(deck) {
  return deck[1]
  
}


export function swapTopTwoCards(deck) {
    let deck1= deck.shift();
    let dec2 = deck.shift();
 deck.unshift(deck1);
 deck.unshift(dec2);
return deck 
}

export function discardTopCard(deck) {
    let p1 = [];
 
    p1.push(deck.shift());
    p1.push([...deck]);

    return p1



}


export function insertFaceCards(deck) {
 let u1 =  deck.shift();
  deck.unshift('jack', 'queen', 'king')
  deck.unshift(u1)
  return deck

}
