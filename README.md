# An experience of implementing an array shuffle algorithm
![Eslint](https://github.com/Jean-Aymeric/js-shuffle/workflows/Eslint/badge.svg)

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
With an example I think it will be simpler :

