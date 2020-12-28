# An experience of implementing an array shuffle algorithm

Author : [jeanaymeric@gmail.com](mailto:jeanaymeric@gmail.com")

JsDoc : [https://jean-aymeric.github.io/JSGraph/](https://jean-aymeric.github.io/js-shuffle/)

I wanted to try a new algorithm for shuffling an array.
It's not really about making a faster one, but rather to explore a new path.

Usually, the shuffle algorithm applies a random on each array element.
It is the element that decides its own place in the table.
However, we can consider that it is the array which decide where to place its elements.
Thus, the different mix of an array are just the different states that it can have.
That's a lot of different states, exactly n!, n is the size of the array,
If we find a function allowing to transform this state number into a combination of elements,
then it would be possible to call the random function only once.
It turns out that the function exists, it is also not very complicated.

## With an example I think it will be simpler :
array = ['A', 'B', 'C', 'D']

There are 4! distinct anagrams :
|#|0|1|2|3|
|-|-|-|-|-|
| 0|A|B|C|D|
| 1|A|C|D|B|
| 2|A|D|B|C|
| 3|A|B|D|C|
| 4|A|C|B|D|
| 5|A|D|C|B|
| 6|B|A|C|D|
| 7|B|C|D|A|
| 8|B|D|A|C|
| 9|B|A|D|C|
|10|B|C|A|D|
|11|B|D|C|A|
|12|C|A|B|D|
|13|C|B|D|A|
|14|C|D|A|B|
|15|C|A|D|B|
|16|C|B|A|D|
|17|C|D|B|A|
|18|D|A|B|C|
|19|D|B|C|A|
|20|D|C|A|B|
|21|D|A|C|B|
|22|D|B|A|C|
|23|D|C|B|A|

We can notice that the element present in position 0 is the element whose index corresponds to the division of the state number by 6.
6 corresponds to 3!, that is to say the factorial preceding that of the size of the array (4!).
So we can write: `shuffle[0] = draw / factorial (array.length - 1)`

Then the index of the following elements corresponds to the remainder of the Euclidean division of the state number by the number of remaining elements to be placed.

`shuffle[i] = draw % array.length` _each placed element is removed from the array, so the array size decreases._

```javascript
function JADShuffleSimpleVersion(array) {
    let tempArray = [...array]; // the array is copied in a new array to not alter the parameter
    let result = [];
    const draw = Math.floor(Math.random() * factorial(array.length));   // a state is randomly taken
    let randomIndex = Math.trunc(draw / factorial(tempArray.length - 1));   // the first index outside the loop
    for (let currentIndex = 0; currentIndex < array.length; currentIndex ++) {
        result.push(tempArray[randomIndex]);
        tempArray.splice(randomIndex, 1);   // The placed element is removed from the array
        randomIndex = draw % (array.length - (currentIndex + 1));   // calculation of the following index
    }
    return result;
}
```