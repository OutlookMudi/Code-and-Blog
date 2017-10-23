const from_appjs = require('../app.js'); /*connecting to our app.js that holds our function*/
const assert = require('chai').assert; /*Always keep this line here. It's for Chai Library*/
const rainDrops = require('../app.js'); 

// tests

describe('Rain Drops', () => {
    //
    it('Should be string', () =>{		
		assert.typeOf(rainDrops.rainDrops(560), 'String')
    }); 
    it('Should return pling', () =>{	
        let resultOfThisTest = rainDrops.rainDrops(5);
		assert.equal(resultOfThisTest, 'pling');
    });
    it('Should return plang', () =>{	
        let resultOfThisTest = rainDrops.rainDrops(5);
		assert.equal(resultOfThisTest, 'plang');
    });  
    it('Should return plong', () =>{	
        let resultOfThisTest = rainDrops.rainDrops(7);
		assert.equal(resultOfThisTest, 'plong');
    });    
});