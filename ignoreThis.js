
const assert = require('chai').assert; /*Always keep this line here. It's for Chai Library*/
const from_appjs = require('../app.js'); /*connecting to our app.js that holds our function*/




// tests

describe('Accept Only Hello world', ()=>{
    it('Should return only Hello-world', ()=>{
        let resultOfThisTest = from_appjs();
        assert.equal(resultOfThisTest, "hello world");
    })

    it('Should return only Hello-world', ()=>{
        let resultOfThisTest = from_appjs();
        assert.typeOf(resultOfThisTest, 'string');
    })
});



//describe statement in one line
	// describe(testName, (it('itName', itFunction), it2('it2Name', it2Function), ....and more it statements);


//1. describe(testName, testfunctions);
//2. testfunctions('it' statement1, 'it' statement2, ... as many more);
//3. it statment('what it should do', specificFunctionTest);


