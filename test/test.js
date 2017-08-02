var chai= require('chai');
var assert = chai.assert;
var aritGeo = require('../lab1.js');
  describe("If array implements arithmetic or geomatric progression ", function() {

    describe("Case for empty array", function() {

      it("should return 0 for an empty array", function() {
       assert.equal(aritGeo([]), 0);
      });

    });

    describe("Case for Arithmetic Sequence", function() {

      it("should return 'Arithmetic' for [2, 4, 6, 8, 10]", function() {
        assert(aritGeo([3, 6, 9, 12]), 'Arithmetic');
      });
      it("should return 'Arithmetic' for [1, 2, 3, 4, 5]", function() {
        assert(aritGeo([1,2,3,4,5,6]), 'Arithmetic');
      });

      it("should return 'Arithmetic' for [5, 11, 17, 23, 29, 35, 41]", function() {
        assert(aritGeo([2, 5, 8, 11, 14, 17, 20]), 'Arithmetic');
      });

      
    });

    describe("Case for Geometric Sequence", function() {

      it("should return 'Geometric' for [2, 6, 18, 54, 162]", function() {
        assert(aritGeo([2, 6, 18, 54]), 'Geometric');
      });

      it("should return 'Geometric' for [0.5, 3.5, 24.5, 171.5]", function() {
        assert(aritGeo([3, 9, 27, 81, 243]),'Geometric');
      });

    });

    describe("Case for neither Arithmetic nor Geometric Sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        assert(aritGeo([1, 2, 3, 7, 8]), -1);
      });
      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        assert(aritGeo([2, 4, 7, 14]), -1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        assert(aritGeo([3, 5, 8, 5, 8]), -1);
      });
      
    });
  });
