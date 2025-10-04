import sum from "./sum.js";

describe("test for sum fn",()=>{
    test("adds 5 and 2 to equal to 7",()=>{
        expect(sum(2,5)).toBe(7);
    });
    test("adds -5 and -3 to equal to -8",()=>{
        expect(sum(-5,-3)).toBe(-8);
    });
})
