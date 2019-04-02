//const divide = require('../index');
const indexMethods = require('../index');
const sort = indexMethods.sort;
const chai = require('chai');
const expect = chai.expect;

describe('Sort function', () => {
  it.only('It should sort an out of order array', () => {
    // define inputs
    // the point of this exercise was to demonstrate a test case failing
    expect(sort([4,1,3,2,0])).to.deep.equal([0,1,2,3,4]);
  });

  it('', () => {
    // define inputs
   
    expect(fn).to.throw();
  });
});