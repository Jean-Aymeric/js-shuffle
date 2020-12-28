function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i ++) {
        result *= i;
    }
    return result;
}

function getDraw(factorial) {
    const fact = factorial;
    return {
        value: (Math.floor(Math.random() * fact)),
        factorial: fact
    };
}

function drawToCombination(draw, array) {
    let tempArray = [...array];
    let temporaryValue;
    let result = new Array(initialLength);
    let randomIndex = Math.trunc(draw.value / (draw.factorial / initialLength));
    let currentIndex = 0;
    while (currentIndex < initialLength) {
        result[currentIndex] = tempArray[randomIndex];
        temporaryValue = tempArray[randomIndex];
        tempArray[randomIndex] = tempArray[currentIndex];
        tempArray[currentIndex] = temporaryValue;
        randomIndex = draw.value % (initialLength - currentIndex) + currentIndex;
        currentIndex ++;
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
const nbTests = 100000000;

let t0 = new Date().getTime();
let draw = getDraw(initialLength);
if (Number.isSafeInteger(draw.value)) {
    const fact = factorial(initialLength);
    for(let i = 0; i < nbTests; i++) {
        drawToCombination(getDraw(fact), array);
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
