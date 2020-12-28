function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i ++) {
        result *= i;
    }
    return result;
}

function getDraw(arrayLength) {
    return Math.floor(Math.random() * factorial(array.length));
}

function drawToCombination(draw, array) {
    let tempArray = [...array];
    let result = [];
    let index = Math.trunc(draw / factorial(tempArray.length - 1));
    for (let i = 1; i < initialLength; i ++) {
        result.push(tempArray[index]);
        tempArray.splice(index, 1);
        index = draw % (initialLength - i);
    }
    return result;
}

let array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L','M','N','O','P','Q','R'];
let initialLength = array.length;
let draw = getDraw(initialLength);
if (Number.isSafeInteger(draw)) {
    console.log(drawToCombination(draw, array));
}
