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
        let resultOfThisTest = rainDrops.rainDrops(3);
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
    
    it('Not true', () =>{	
        let resultOfThisTest = rainDrops.rainDrops(7);
		assert.notEqual(resultOfThisTest, true);
    }); 

    it('Should not be an Array', () =>{	
        let resultOfThisTest = rainDrops.rainDrops(7);
		assert.notTypeOf(resultOfThisTest, 'Array');
    }); 

    it('Should not be a numner', () =>{	
        let resultOfThisTest = rainDrops.rainDrops(7);
		assert.notTypeOf(resultOfThisTest, 'number');
    }); 
    it('Should not be boolean', () =>{	
        let resultOfThisTest = rainDrops.rainDrops(7);
		assert.notTypeOf(resultOfThisTest, 'boolean');
    }); 
    it('Should return plingplang', () =>{	
        let resultOfThisTest = rainDrops.rainDrops(15);
		assert.notTypeOf(resultOfThisTest, 'plingplang');
    }); 
    it('Should return plangplong', () =>{	
        let resultOfThisTest = rainDrops.rainDrops(35);
		assert.notTypeOf(resultOfThisTest, 'plingplang');
    }); 
    it('Should return plingplangplong', () =>{	
        let resultOfThisTest = rainDrops.rainDrops(105);
		assert.notTypeOf(resultOfThisTest, 'plingplangplong');
    }); 

});