function factorialNAndFactorialN_1(n) {
    let result = 1;
    for (let i = 1; i < n; i ++) {
        result *= i;
    }
    return {
        n: result * n,
        n_1: result
    };
}

function getDraw(factorial) {
    return Math.floor(Math.random() * factorial);
}

function JADShuffleOptimisedVersion(array, factorial) {
    let tempArray = [...array];
    const draw = getDraw(factorial.n);
    let temporaryValue;
    let result = new Array(initialLength);
    let randomIndex = Math.trunc(draw / (factorial.n_1));
    let currentIndex = 0;
    while (currentIndex < initialLength) {
        result[currentIndex] = tempArray[randomIndex];
        temporaryValue = tempArray[randomIndex];
        tempArray[randomIndex] = tempArray[currentIndex];
        tempArray[currentIndex] = temporaryValue;
        randomIndex = draw % (initialLength - currentIndex) + currentIndex;
        currentIndex ++;
    }
    return result;
}

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i ++) {
        result *= i;
    }
    return result;
}

function JADShuffleSimpleVersion(array) {
    let tempArray = [...array];
    let result = [];
    const draw = Math.floor(Math.random() * factorial(array.length));
    let index = Math.trunc(draw / factorial(tempArray.length - 1));
    for (let i = 1; i < initialLength; i ++) {
        result.push(tempArray[index]);
        tempArray.splice(index, 1);
        index = draw % (initialLength - i);
    }
    return result;
}

function FisherYatesShuffle(array) {
    let tempArray = [...array];
    let currentIndex = tempArray.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = tempArray[currentIndex];
        tempArray[currentIndex] = tempArray[randomIndex];
        tempArray[randomIndex] = temporaryValue;
    }
    return tempArray;
}

let array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L','M','N','O','P','Q','R'];
let initialLength = array.length;
const nbTests = 5;

let t0 = new Date().getTime();
const fact = factorialNAndFactorialN_1(initialLength);
if (Number.isSafeInteger(fact.n)) {
    for(let i = 0; i < nbTests; i++) {
        JADShuffleOptimisedVersion(array, fact);
    }
} else {
    console.log("Array too big");
}
let t1 = new Date().getTime();
console.log("My shuffle " + (t1 - t0) + " ms.");

t0 = new Date().getTime();
for(let i = 0; i < nbTests; i++) {
    FisherYatesShuffle(array);
}
t1 = new Date().getTime();
console.log("Fisher-Yates shuffle " + (t1 - t0) + " ms.");
