var chai = require("chai");
var assert = chai.assert;

var calculator = require("../calc.js");
var lastNums = require("../lastNums")

describe("Last Nums", function() {
    it("should have same last numbers", function() {
        assert.isTrue(lastNums(10, 20));
        assert.isFalse(lastNums(23, 11));
        assert.isTruel(lastNums(11, 21));
        assert.isTrue(lastNums(0, 10));
        
    });
 
});