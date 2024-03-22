# Grocery Shopping Tracker
This is a simple console-based program that helps users keep track of their grocery shopping. 
The program allows users to add new items to a list, along with their names, quantities, and prices.
Once they are happy with their list, they can save their list of grocery items to a text file. They can
then keep the list on a subsequent run of the program and continue updating their list.

1. The application should have a simple text-based user interface. All input and output should be done through
the console
2. The application should be able to store a list of grocery items, including their names, quantities, and prices
3. The application should allow the user to save the list to a file before exiting the application
4. The application should read the saved file when it starts (if it exists) in order to keep the list of previously
added groceries and keep adding to that list

## Hints
- JSON.stringify(...)
- JSON.parse(...)
- Arrays!
- Built-in `fs` Node module
- You can use the snippet of code for the previous exercises for reading input from the console, or you can research
npm packages that you might be able to use instead