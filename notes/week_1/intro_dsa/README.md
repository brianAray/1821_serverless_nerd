# Intro to Data structures and Algorithms

## Data Structures
Data structures are fundamental to any application because they provide ways to store data temporarily in different ways.
- Array: a collection of data that is ordered in a sequential manner
    - Indexed from 0 to length - 1
    - Arrays are fixed in size (except for in JavaScript)
        - Arrays in JS (dense arrays) behave more like ArrayLists in Java rather than arrays
- Stack: LIFO (last-in-first-out)
- Queue: FIFO (first-in-first-out)
- Maps: key-value pairs
- LinkedList: a collection of data nodes that are connected together
- Binary Tree
- Red Black Trees
- Graph
- etc.

There's many different ways of structuring and storing data and each way of doing so has certain use-cases that are more optimal than using the other data structures.

## Algorithms
Programming is really just giving instructions step by step to a computer to run. In other words, whenever we write a computer program, we are actually writing algorithms.

An algorithm is a set of steps that are followed in order to solve a problem or accomplish a task. Algorithms are usually written in a specific programming language, and can be implemented on a computer or any electronic device. The steps in an algorithm can include performing calculations, making decisions based on certain criteria, and repeating steps until a certain condition is met. Algorithms are an essential part of computer science, and are used to perform a wide variety of tasks in many different fields.

An algorithm for making a peanut butter and jelly sandwich:
```
1. Gather the ingredients: 2 slices of bread, peanut butter, jelly, and a knife

2. Lay one slice of bread on a clean, flat surface

3. Using the knife, spread a layer of peanut butter on the slice of bread

4. Take the second slice of bread and spread a layer of jelly on one side

5. Place the slice of bread with the jelly side down on top of the slice with the peanut butter, so that the peanut butter and jelly are touching

6. Using the knife, cut the sandwich diagonally to create two triangular pieces

7. Repeat back to step 1 if other sandwiches are desired
```

### Efficiency of an algorithm
How do we describe how fast and space efficient an algorithm is? **Time and space complexity**

Time and space complexity are measures of a performance of an algorithm. Time complexity is a measure of how long an algorithm takes to run, based on the size of the input data. Space complexity is a measure of how much memory an algorithm uses, also based on the size of the input data.

Once upon a time, space was very limited on computers, so it was a big factor in designing efficient algorithms. However, nowadays, memory has become exponentially cheaper, and therefore space complexity has become less of a concern in general. Also, there are hardly any cases where the space complexity will be more than O(n), and often it is even O(1).

When analyzing the time complexity of an algorithm, we generally want to know how the running time of the algorithm increases as the size of the input data increases. For example, if an algorithm has a time complexity of O(n), this means that the running time of the algorithm is directly proportional to the size of the input data. An algorithm with a time complexity of O(n) will take longer to run on a large input than on a small input, but it is at least linear.

Understanding time and space complexity is important when designing algorithms, because it allows us to choose algorithms that are efficient and perform well on large inputs.

```
6 steps to create a single sandwich

10 sandwiches -> 60 operations
20 sandwiches -> 120 operations
30 sandwiches -> 180 operations

n = # of sandwiches to create
# of operations = 6 * n
-> 6n -> O(6n) -> **O(n)**

What is the big O notation for time complexity of that algorithm?
O(1), O(log n), O(n), O(n log n), O(n^2), ...

n = # of sandwiches we would like to create
```

In a simplified explanation, big O notation is where you drop constants as well as coefficients, and you also drop the "less powerful terms".

### Search Algorithms
A search algorithm is a type of algorithm that is designed to find a specific item in a data structure (such as an array, for example).

Common search algorithms:
- Used with arrays
    - Binary Search O(log n)
    - Linear Search O(n)
- Used with hashtables/maps
    - Hashtable (aka Map) Search O(1)
- n = how many elements we have in the data structure

Code snippet for Linear Search
```javascript
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;  // return the index of the target element
    }
  }
  return -1;  // return -1 if the target element is not found
}

let array = [10, 20, 30, 40, 50];
let index = linearSearch(array, 30);  // index will be 2
```

Code snippet for Binary Search
```javascript
function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = array[mid];
    if (guess === target) {
      return mid;  // return the index of the target element
    }
    if (guess < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  
  return -1;  // return -1 if the target element is not found
}

let array = [10, 20, 30, 40, 50];
let index = binarySearch(array, 40);  // index will be 3
```

### Sorting algorithms
Sorting algorithms are algorithms that are designed to rearrange a list of items in a specific order. Sorting algorithms are used in many different fields, including software engineering, data analysis, and finance. There are many different types of sorting algorithms, each with their own characteristics and tradeoffs.

Code snippet for bubble sort O(n^2)
```javascript
function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

let array = [10, 5, 7, 3, 1, 9];
bubbleSort(array);  // array is now [1, 3, 5, 7, 9, 10]
```

Code snippet for merge sort
- Time Complexity: O(n log n)
- Space Complexity: O(n)
- There is a mathematical proof that general sorting algorithms can not be more efficient than O(n log n)

```javascript
function mergeSort(array) {
  if (array.length <= 1) return array;
  
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let array = [10, 5, 7, 3, 1, 9];
let sortedArray = mergeSort(array);  // sortedArray is [1, 3, 5, 7, 9, 10]
```