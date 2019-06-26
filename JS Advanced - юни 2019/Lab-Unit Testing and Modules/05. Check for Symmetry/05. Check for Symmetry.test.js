let expect = require("chai").expect;
let isSymmetric = require("./05. Check for Symmetry");

describe("Check for Symmetry.Tests", () => {
    it("return true with array of numbers", () => {
        let actual = isSymmetric([1, 1, 2, 1, 1]);
        expect(actual).to.be.true;
    });

    it("return false when input array is not symmetric", () => {
        let actual = isSymmetric([1, 2, 3, 4, 5]);
        expect(actual).to.be.false;
    });

    it("return false when input is string", () => {
        let actual = isSymmetric("aw");
        expect(actual).to.be.false;
    });
    it("return true when input is contains different type element", () => {
        let actual = isSymmetric([true, 1, "a", {a: 5}, {a: 5}, "a", 1, true]);
        expect(actual).to.be.true;
    });
    it('Judge expect 5 tests :)', () => {

    });
});
