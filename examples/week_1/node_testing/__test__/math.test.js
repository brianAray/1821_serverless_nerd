const mathOperations = require('../math');


/*
    Describe    
    The describe block is an outer description for the test suite

    Individual Tests
    These test blocks represetn a single test, the string in quotes is the description of the test

    Expect Block
    Expect is an assertion of some kind of verification

*/


// Version 1 - Basic
describe('Calculator Tests', () => {
    test('Adding 1 + 2 should return 3', () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    })
})

// Version 2 - Cleaner

describe("Cleaner Calculator Tests", () => {
    test('Adding 4 + 5 should return 9', () => {
        // Arrange
        let result = 0;
        let a = 4;
        let b = 5;
        let expectedAnswer = 9;

        // Act
        result = mathOperations.sum(a, b);

        // Assert
        expect(result).toBe(expectedAnswer)
    })
})

// More examples

describe("Real Calculator Tests", () => {
    test("Adding 1 + 2 shoudl return 3", () => {
        // arrange and act
        let result = mathOperations.sum(1, 2);

        // assert
        expect(result).toBe(3);
    });
    test("Subtracting 2 from 10 should return 8", () => {
        // arrange and act
        let result = mathOperations.diff(10, 2);

        // assert
        expect(result).toBe(8);
    });
    test("Multiplying 2 and 8 should return 16", () => {
        // arrange and act
        let result = mathOperations.product(2, 8);

        // assert
        expect(result).toBe(16);
    });
});


