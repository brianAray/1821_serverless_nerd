// Jest Matchers
// These are how we improve our expect or assertions

// equality
test('Equality matchers', () => {
    expect(2 * 2).toBe(4);
    expect(4 -2 ).not.toBe(1);
})

// Truthiness
test("Truthy Operators", () => {
    let name = "Revature";
    let n = null;

    expect(n).toBeNull();
    expect(name).not.toBeNull();

    // Name has a valid value
    expect(name).toBeTruthy();

    // n is null so it is not truthy
    // this will fail
    // expect(n).toBeTruthy();

    expect(n).toBeFalsy();

    expect(0).toBeFalsy();
});

// Number matchers
test("Numeric Operators", () => {
    let num1 = 100;
    let num2 = -20;
    let num3 = 0;

    // Greater than
    expect(num1).toBeGreaterThan(10);

    // less than or equal
    expect(num2).toBeLessThanOrEqual(0);

    // Greater than or equal
    expect(num3).toBeGreaterThanOrEqual(0);
})

// String Matchers
test("String Matchers", () => {
    let string1 = "Revature";

    // Test for success match
    expect(string1).toMatch(/Revature/);
    
    // Test for failure match
    expect(string1).not.toMatch(/abc/);
})