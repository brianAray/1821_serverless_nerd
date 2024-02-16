const mathOperations = require('../math');
// Hooks
// Setups and teardown

/**
 * 
 * There are 4 hooks
 * 
 * beforeEach and afterEach
 *  - Executed before and after each test in the test suite
 * 
 * beforeAll and afterAll
 *  - Executed just once for each test suite
 */

describe("Calculator with hooks", () => {
    let input1 = 0;
    let input2 = 0;

    beforeAll(() => {
        console.log("beforeAll Called");
    });

    afterAll(() => {
        console.log("afterAll called");
    });

    beforeEach(() => {
        console.log("beforeEach called");
        input1 = 1;
        input2 = 2;
    });

    afterEach(() => {
        console.log("afterEach called");
    });

    test("Adding 1 + 2 shoudl return 3", () => {
        // arrange and act
        let result = mathOperations.sum(input1, input2);

        // assert
        expect(result).toBe(3);
    });
    test("Subtracting 2 from 10 should return 8", () => {
        // arrange and act
        input1 = 10;
        input2 = 2;
        let result = mathOperations.diff(input1, input2);

        // assert
        expect(result).toBe(8);
    });
    test("Multiplying 2 and 8 should return 16", () => {
        // arrange and act
        input1 = 2;
        input2 = 8;
        let result = mathOperations.product(input1, input2);

        // assert
        expect(result).toBe(16);
    });
})