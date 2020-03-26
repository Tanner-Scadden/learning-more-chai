
// Assert library you pass arguments into a function that will run a test against each other
const assert = require('chai').assert;

// Expect will take a first argument with chained methods afterwards to create tests
const expect = require('chai').expect;

// Need to pass in the file you will be testing if you are testing functions. 
const app = require('../app');


/* 
  I can use all that I have learned from testing and going through mocha and chai's API documentation to write better test, instead of being lazy and just checking the status that comes back from the api, I will now be able to go more in depth and have strict testing to really see if things break when the code changes.
*/

describe('App', function() {
  it('addTwoNumbers should return arg1 + arg2', function() {
    assert.equal(app.addTwoNumbers(1, 2), 3);
  })
  it('subtractTwoNumbers should return arg1 - arg2', function() {
    assert.equal(app.subtractTwoNumbers(1, 2), -1);
  })
  it('subtractTwoNumbers should return a number', function() {
    assert.typeOf(app.subtractTwoNumbers(1, 2), 'number');
  })
  it('multiplyTwoNumbers should return arg1 * arg2', function() {
    assert.equal(app.multiplyTwoNumbers(1, 2), 2);
  })
  it('divideTwoNumbers should return arg1 / arg2', function() {
    assert.equal(app.divideTwoNumbers(1, 2), .5);
  })
  it('powerOfNumber should return arg1 ** arg2', function() {
    // equal test to see if the first argument matches the 2nd
    assert.equal(app.powerOfNumber(1, 2), 1);
  })
  it('powerOfNumber with arguments 1 and 2 should be less than 2', function() {
    // isBelow makes sure the 1st argument is lesser than the 2nd
    assert.isBelow(app.powerOfNumber(1, 2), 2);

    // above checks if it is above
    expect(app.powerOfNumber(1, 2)).to.not.be.above(2)
  })
  it('powerOfNumber with arguments 2 and 6 should be greater than 34', function() {
    // is Above takes the first argument and makes sure it is greater
    assert.isAbove(app.powerOfNumber(2, 6), 34);
    // above checks if it is above
    expect(app.powerOfNumber(2, 6)).to.be.above(1)
  })
  it('isGreaterThan should be truthy with 4 and 2 as arguments', function() {
    // isOk checks for truthy
    assert.isOk(app.isGreaterThan(4, 2));
  })
  it('isGreaterThan should be falsy with 2 and 4 as arguments', function() {
    // isNotOk checks for falsy
    assert.isNotOk(app.isGreaterThan(2, 4));
  })
  it('isGreaterThan should not return an array and be a boolean', function() {
    const response = app.isGreaterThan(3, 4)

    // with expect you can see the type of value or what type of value it isn't suppose to be.
    expect(response).to.be.a('boolean');
    expect(response).to.not.be.an('array');
  })
  // It is bad practice to have a lot of test in one it. It would be better to break them up so if it fails, you get more info on what the failure was from.
  it('sortMyNumbers should be an array be sorted and a lot of other things', function() {
    const data = [4, 10, 1, 3]
    const correctOrder = [1, 3, 4, 10];
    const response = app.sortMyNumbers([...data])
    expect(response).to.be.an('array');

    // eql is a deep equal.
    expect(response).to.not.eql(data);
    expect(response).to.eql([1, 3, 4, 10]);

    // ordered makes all .members values be in the same order
    expect(response).to.have.ordered.members(correctOrder).but.not.have.ordered.members([4, 10, 1, 3]);

    // .include makes sure it has the val
    expect(response).to.include(1);
    expect(response).to.not.include(2);

    // .ok is bad and shouldn't be used according to their own docs. Checks for truthy.
    expect(response).to.be.ok;
    // It is better to say
    expect(response).to.eql(correctOrder);


    // you can do .null, .undefined, .true, .false. These tests for ===. 
    expect(response).to.not.be.true;
    expect(response).to.not.be.undefined;
    expect(response).to.not.be.null;
    expect(response).to.not.be.false;

    // You can check if it is .NaN. It is not recommended for use.

    // .empty sees if it is empty
    expect([]).to.be.empty;
    expect('').to.be.empty;

    // It is great to chain the test together.
    expect(response).to.be.an('array').and.not.be.empty;
  })
  it('addToObject should have a nested value', function() {
    const data = {
      a: {
        b: [1, 2],
      }
    }
    const response = app.addToObject({...data}, 'myVal', 2);
    expect(response).to.be.an('object'); 
    expect(response).to.not.eql(data);

    // can use dot or bracket-notation when you do .nested or .property
    expect(response).to.have.nested.property('a.b[0]')
    expect(response).to.not.have.nested.property('a.b[2]')
    expect(response).to.have.nested.property('a.b[1]')
    expect(response).to.nested.include({'a.b[1]': 2})

    // .any makes all .key values in the chain to only have 1 of the key
    expect(response).to.not.have.any.keys('c', 'd');
    expect(response).to.have.any.keys('a');

    // .all makes .keys require it has all the keys
    expect(response).to.have.all.keys('a', 'myVal');

    // .own makes all .property and .include assertions that follow to ignore inherited properties
    expect({a: 1}).to.own.include({a: 1})
  })
});