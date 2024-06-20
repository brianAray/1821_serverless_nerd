# Interview Coding Questions Bank

## Questions

<ol>
<li>Reverse a string in JavaScript</li>
<li>Check if a given string is a palindrome or not</li>
<li>Implement a function to remove duplicates from an array</li>
<li>Implement a function that calculates the Fibonacci sequence up to a given number of terms</li>
<li>Implement a function that takes an array of integers and returns the sum of the two largest numbers</li>
<li>Write a function to reverse the order of words in a given string</li>
<li>Write a function to count the number of occurrences of a given character in a given string</li>
<li>Write a function to determine whether a given year is a leap year or not. A year is a leap year if it is divisible by 4, however if it is divisible by 100 it is not a leap year, unless it is also divisible by 400.</li>
<li>Write a function to find the sum of all even numbers up to a given number.</li>
<li>Implement a function to calculate the sum of all numbers up to a given number.</li>
<li>Write a function to find the largest number in a given array of numbers.</li>
<li>Implement a function to find the smallest number in a given array of numbers.</li>
<li>Write a function to calculate the average of a given array of numbers.</li>
</ol>

## Solutions

1. ```javascript
    function reverseString(str) {
        let reversedStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }
        return reversedStr;
    }   
   ```
2. ```javascript
    function isPalindrome(str) {
        let reversedStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }
        return str === reversedStr;
    }
   ```
3. ```javascript
    function removeDuplicates(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (result.indexOf(arr[i]) === -1) {
                result.push(arr[i]);
            }
        }
        return result;
    }

   ```
4. ```javascript
    function fibonacci(num) {
        let sequence = [0, 1];
        for (let i = 2; i < num; i++) {
            let next = sequence[i - 1] + sequence[i - 2];
            sequence.push(next);
        }
        return sequence;
    }
   ```
5. ```javascript
    function sumOfTwoLargest(arr) {
        let largest = -Infinity;
        let secondLargest = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i];
            if (current > largest) {
                secondLargest = largest;
                largest = current;
            } else if (current > secondLargest) {
                secondLargest = current;
            }
        }
        return largest + secondLargest;
    }
   ```
6. ```javascript
    function reverseWords(str) {
        let words = str.split(' ');
        let reversedWords = [];
        for (let i = words.length - 1; i >= 0; i--) {
            reversedWords.push(words[i]);
        }
        return reversedWords.join(' ');
    }
   ```
7. ```javascript
    function countChar(str, char) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
                count++;
            }
        }
        return count;
    }
   ```
8. ```javascript
    function isLeapYear(year) {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            return true;
        } else {
            return false;
        }
    }
   ```
9. ```javascript
    function sumOfEvenNumbers(n) {
        let sum = 0;
        for (let i = 2; i <= n; i += 2) {
            sum += i;
        }
        return sum;
    }  
   ```
10. ```javascript
    function sumUpTo(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }   
    ```
11. ```javascript
    function findLargestNumber(arr) {
        let largest = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }
        return largest;
    }   
    ```
12. ```javascript
    function findSmallestNumber(arr) {
        let smallest = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < smallest) {
                smallest = arr[i];
            }
        }
        return smallest;
    }   
    ```
13. ```javascript
    function findAverage(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    }   
    ```
