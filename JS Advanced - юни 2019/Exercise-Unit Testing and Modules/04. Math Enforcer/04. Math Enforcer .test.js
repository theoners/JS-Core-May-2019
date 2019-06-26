let expect = require("chai").expect;
let mathEnforcer = require("./04. Math Enforcer");

describe("MathEnforcer Tests", () => {
    it("mathEnforcer have ownProperty addFive", () => {

        let actual=mathEnforcer.hasOwnProperty("addFive");
        expect(actual).to.be.true;
    });
    it("mathEnforcer have ownProperty addFive", () => {

        let actual=mathEnforcer.hasOwnProperty("subtractTen");
        expect(actual).to.be.true;
    });
    it("mathEnforcer have ownProperty addFive", () => {

        let actual=mathEnforcer.hasOwnProperty("sum");
        expect(actual).to.be.true;
    });

    it("add function return true result with positive number", () => {
        let expected = 15;
        let actual=mathEnforcer.addFive(10);
        expect(actual).to.be.equal(expected);
    });
    it("add function return true result with double", () => {
        let expected = 10.5;
        let actual=mathEnforcer.addFive(5.5);
        expect(actual).to.be.equal(expected);
    });
    it("add function return true result with negative number", () => {
        let expected = -5;
        let actual=mathEnforcer.addFive(-10);
        expect(actual).to.be.equal(expected);
    });
    it("add function return true result with 0", () => {
        let expected = 5;
        let actual=mathEnforcer.addFive(0);
        expect(actual).to.be.equal(expected);
    });
    it("addFive function return undefined", () => {

        let actual=mathEnforcer.addFive("a");
        expect(actual).to.be.undefined;
    });
    it("subtractTen function return true result", () => {
        let expected = 5;
        let actual=mathEnforcer.subtractTen(15);
        expect(actual).to.be.equal(expected);
    });
    it("subtractTen function return true result", () => {
        let expected = 5.5;
        let actual=mathEnforcer.subtractTen(15.5);
        expect(actual).to.be.equal(expected);
    });
    it("subtractTen function return true result with negative number", () => {
        let expected = -20;
        let actual=mathEnforcer.subtractTen(-10);
        expect(actual).to.be.equal(expected);
    });
    it("subtractTen function return true result with 0", () => {
        let expected = -10;
        let actual=mathEnforcer.subtractTen(0);
        expect(actual).to.be.equal(expected);
    });
    it("subtractTen function return undefined", () => {

        let actual=mathEnforcer.subtractTen("a");
        expect(actual).to.be.undefined;
    });
    it("sum function return true result", () => {
        let expected = 12;
        let actual=mathEnforcer.sum(5,7);
        expect(actual).to.be.equal(expected);
    });
    it("sum function return true result with double", () => {
        let expected = 13;
        let actual=mathEnforcer.sum(5.5,7.5);
        expect(actual).to.be.equal(expected);
    });
    it("sum function return true result with 0", () => {
        let expected = 0;
        let actual=mathEnforcer.sum(0,0);
        expect(actual).to.be.equal(expected);
    });
    it("sum function return true result with negative number", () => {
        let expected = 2;
        let actual=mathEnforcer.sum(-5,7);
        expect(actual).to.be.equal(expected);
    });
    it("sum function return true result with negative numbers", () => {
        let expected = -12;
        let actual=mathEnforcer.sum(-5,-7);
        expect(actual).to.be.equal(expected);
    });
    it("sum function return undefined with invalid first number", () => {

        let actual=mathEnforcer.sum("a",1);
        expect(actual).to.be.undefined;
    });
    it("sum function return undefined with invalid second number", () => {

        let actual=mathEnforcer.sum(1,"z");
        expect(actual).to.be.undefined;
    });
    it("sum function return undefined with invalid numbers", () => {

        let actual=mathEnforcer.sum("a","z");
        expect(actual).to.be.undefined;
    });

});