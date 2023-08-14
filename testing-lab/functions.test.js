let theFunctions = require('./function')

test("Return Two test", () => {
    expect(theFunctions.returnTwo()).toBe(2)
})

test("Greeting Test", () => {
    expect(theFunctions.greeting('Dre')).toBe('Hello Dre.')
})

test("Addition Test", () => {
    expect(theFunctions.add(13, 2)).toBe(15)
})

describe("Math Challenge!", () => {
    test("Add", () => {
        expect(theFunctions.add(14, 6)).toBe(20)
    })
    test("Subtract", () => {
        expect(theFunctions.subtract(11, 3)).toBe(8)
    })
    test("Multiply", () => {
        expect(theFunctions.multiply(12, 3)).toBe(36)
    })
    test("Divide", () => {
        expect(theFunctions.divide(15, 5)).toBe(3)
    })
})