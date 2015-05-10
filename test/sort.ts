/// <reference path="../Scripts/typings/mocha/mocha.d.ts"/>
/// <reference path="../Scripts/typings/node/node.d.ts" />
/// <reference path="../Scripts/typings/chai/chai.d.ts" />

var expect = require("chai").expect;
import Algo = require("../algo");

describe("Bubble Sort", function() {

    it("should sort an int array", function () {
		var data = [654,42,66,3,12,54,76];
		
		Algo.Sort.Bubble(data,(val1: number, val2: number) => {
			return val1 < val2; 
		});
		
		expect(data[0]).to.equal(3);
		expect(data[data.length-1]).to.equal(654);
    });  
	
	it("should sort a string array", function () {
		var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
		Algo.Sort.Bubble(data,(val1: string, val2: string) => {
			return val1.localeCompare(val2) < 0; 
		}); 
		
		expect(data[0]).to.equal("daffy");
		expect(data[data.length-1]).to.equal("tom"); 
    });
});

describe("Merge Sort", function() {

    it("should sort an int array", function () {
		var data = [654,42,66,3,12,54,76, 44];
		
		Algo.Sort.Merge(data,(val1: number, val2: number) => {
			return val1 < val2; 
		});
		
		expect(data[0]).to.equal(3);
		expect(data[data.length-1]).to.equal(654);
    });  
	
	it("should sort a string array", function () {
		var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
		Algo.Sort.Merge(data,(val1: string, val2: string) => {
			return val1.localeCompare(val2) < 0; 
		});
		
		expect(data[0]).to.equal("daffy");
		expect(data[data.length-1]).to.equal("tom");
    });
});

describe("Insertion Sort", function() {

    it("should sort an int array", function () {
		var data = [654,42,66,3,12,54,76, 44];
		
		Algo.Sort.Insertion(data,(val1: number, val2: number) => {
			return val1 < val2; 
		});
		
		expect(data[0]).to.equal(3);
		expect(data[data.length-1]).to.equal(654);
    });  
	
	it("should sort a string array", function () {
		var data = ["jerry", "tom", "daffy", "micky", "goofey"];
		
		Algo.Sort.Insertion(data,(val1: string, val2: string) => {
			return val1.localeCompare(val2) < 0; 
		});
		
		expect(data[0]).to.equal("daffy");
		expect(data[data.length-1]).to.equal("tom");
    });
});

describe("Selection Sort", function () {

    it("should sort an int array", function () {
        var data = [654, 42, 66, 3, 12, 54, 76, 44];

        Algo.Sort.Selection(data,(val1: number, val2: number) => {
            return val1 < val2;
        });

        expect(data[0]).to.equal(3);
        expect(data[data.length - 1]).to.equal(654);
    });

    it("should sort a string array", function () {
        var data = ["jerry", "tom", "daffy", "micky", "goofey"];

        Algo.Sort.Selection(data,(val1: string, val2: string) => {
            return val1.localeCompare(val2) < 0;
        });

        expect(data[0]).to.equal("daffy");
        expect(data[data.length - 1]).to.equal("tom");
    });
});
