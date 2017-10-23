const from_appjs = require('../app.js'); /*connecting to our app.js that holds our function*/
const assert = require('chai').assert; /*Always keep this line here. It's for Chai Library*/
const rainDrops = require('../app.js'); 

// tests

describe('Function 1: Accept only hello world', () => {
    it('Should accept only letters', () => {
        let resultOfThisTest = from_appjs.our_First_function();
        assert.equal(resultOfThisTest, 'hello world');    
    });    
});

describe('Function 1: Accept only hello world', () => {
    //
    it('String', () =>{		
		assert.typeOf(rainDrops.rainDrops(560), 'String')
    }); 
    it('String', () =>{		
		assert.equal(true, 'boolean');
    });  
    
    it('String', () =>{		
		assert.isNull(err, 'there was no error');
    }); 
    
    
    
});