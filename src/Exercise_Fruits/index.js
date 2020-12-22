let myFruits = Fruits();
console.log(myFruits);


let fruit = choice(myFruits);
console.log(fruit);


console.log(`I'd like one ${fruit}, please\n here you go your ${fruit} \n Delicious! May I have another one?` );

let removedFruit = remove(myFruits, fruit);


console.log(`I'm sorry but there's no more ${fruit}, we have ${removedFruit} left`);
console.log(remove(myFruits, fruit));