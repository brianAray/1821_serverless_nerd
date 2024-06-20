## Exercises

> For exercises that require a user to enter input, you can make use of the following code snippet to help you prompt the user to enter a value
```javascript
const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};

const result = prompt('Input something: ');
console.log('You entered: ' + result);
```

1. Declare variables for your name, age, and favorite color, and assign appropriate values to them. Then, use string concatenation or template literals to print a sentence introducing yourself, such as "Hi, my name is John and I am 30 years old. My favorite color is blue."
2. Write a program that calculates the area of a circle given its radius. Use the formula **`area = pi * radius^2`**, where **`pi`** is approximately equal to **`3.14`**. Print the result to the console.
3. Write a program that keeps track of a running total and asks the user to enter a number. Each time the user enters a number, add it to the total and print the result to the console. Use the **`+=`** operator to update the total.
4. Write a program that asks the user to enter a number and checks whether it is positive, negative, or zero. Use the **`>`**, **`<`**, and **`==`** operators to compare the number to **`0`**.
5. Write a program that asks the user to enter two numbers and checks whether they are equal. Use the **`===`** operator to compare the numbers. If the numbers are equal, print a message saying "The numbers are equal." If the numbers are not equal, print a message saying "The numbers are not equal."
6. Write a program that asks the user to enter their age and whether they are a citizen of the United States. Use the **`&&`** operator to check whether the user is at least 18 years old and a citizen of the United States. If the user is at least 18 years old and a citizen of the United States, print a message saying "You are eligible to vote." If the user is not at least 18 years old or is not a citizen of the United States, print a message saying "You are not eligible to vote." This exercise requires the user to use the **`&&`** operator to check whether two conditions are true: that the user is at least 18 years old and a citizen of the United States.
7. Write a program that asks the user to enter their favorite color. If the user enters "red", "yellow", or "orange", print a message saying "Those are warm colors." If the user enters any other color, print a message saying "That is a cool color." Use the **`||`** operator to check whether the user's favorite color is red, yellow, or orange, else print out “that is a cool color”
8. **Grade calculator**: Write a program that asks the user to enter a percentage grade and prints the corresponding letter grade. Use the following grading scale:
    - 90-100: A
    - 80-89: B
    - 70-79: C
    - 60-69: D
    - Below 60: F
    If the user enters a percentage grade below 0 or above 100, print an error message.
9. **Factorial calculator**: Write a program that asks the user to enter a positive integer and calculates the factorial of that number. The factorial of a number **`n`** is the product of all the positive integers from 1 to **`n`**. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. If the user enters a number that is not positive, print an error message.
10. **State of water**: Write a program that asks the user to enter a temperature in degrees Celsius. Use an **`if`**-**`else if`**-**`else`** statement to print a message indicating the state of water at the entered temperature: "The water is frozen" if the temperature is below freezing (below 0 degrees Celsius), "The water is boiling" if the temperature is above boiling (above 100 degrees Celsius), and "The water is neither frozen nor boiling" otherwise.
11. **Counting loop**: Write a program that uses a loop to count from 1 to 10 and print the numbers to the console. Use a **`for`** loop, a **`while`** loop, and a **`do-while`** loop to solve this exercise.
12. **Summation loop**: Write a program that asks the user to enter a positive integer **`n`** and calculates the sum of the numbers from 1 to **`n`**. Use a loop to solve this exercise.
13. **Factorial loop**: Write a program that asks the user to enter a positive integer **`n`** and calculates the factorial of **`n`**. The factorial of a number **`n`** is the product of all the positive integers from 1 to **`n`**. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. Use a loop to solve this exercise.
14. **Multiplication table**: Write a program that generates a multiplication table for the numbers 1 to 10. The table should have 10 rows, one for each number from 1 to 10, and 10 columns, one for each number from 1 to 10. Use a loop to solve this exercise.
15. **FizzBuzz**: Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz" instead of the number. For multiples of both 3 and 5, print "FizzBuzz" instead of the number. Use a loop to solve this exercise.
16. **Guess the number**: Write a program that generates a random number between 1 and 100 and asks the user to guess the number. The program should give the user feedback on whether their guess is too high, too low, or correct. The user should have unlimited guesses. Use a loop to solve this exercise.
17. **Prime number checker**: Write a program that asks the user to enter a positive integer and checks whether it is a prime number. A prime number is a positive integer greater than 1 that has no positive integer divisors other than 1 and itself. For example, 2, 3, 5, and 7 are prime numbers, but 4, 6, 8, and 9 are not. Use a loop to solve this exercise.
18. **String reversal**: Write a program that asks the user to enter a string and prints the string in reverse. Use a loop to solve this exercise.