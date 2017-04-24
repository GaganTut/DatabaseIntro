/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;
const dbFuncs = require('../app.js');

const males = [
  { name: 'Bob', age: 21, gender: 'm', jobType: 'dv' },
  { name: 'David', age: 9, gender: 'm', jobType: 'na' },
  { name: 'Eric', age: 61, gender: 'm', jobType: 'dv' },
  { name: 'Fred', age: 45, gender: 'm', jobType: 'dv' },
  { name: 'George', age: 38, gender: 'm', jobType: 'dv' },
  { name: 'Jake', age: 27, gender: 'm', jobType: 'dv' },
  { name: 'Liam', age: 20, gender: 'm', jobType: 'st' }
];

const females = [
  { name: 'Alice', age: 12, gender: 'f', jobType: 'st' },
  { name: 'Claire', age: 56, gender: 'f', jobType: 'dv' },
  { name: 'Hannah', age: 15, gender: 'f', jobType: 'na' },
  { name: 'Ilona', age: 17, gender: 'f', jobType: 'st' },
  { name: 'Kathy', age: 8, gender: 'f', jobType: 'na' }
];

const naList = [
  { name: 'David', age: 9, gender: 'm', jobType: 'N/A' },
  { name: 'Hannah', age: 15, gender: 'f', jobType: 'N/A' },
  { name: 'Kathy', age: 8, gender: 'f', jobType: 'N/A' }
];



describe('byId', () => {
  it('should return an object when given a key', () => {
    expect(dbFuncs.byId('4')).to.deep.equal({ name: 'David', age: 9, gender: 'm', jobType: 'na' });
    expect(dbFuncs.byId('none')).to.deep.equal(false);
  });
});

describe('youngest', () => {
  it('should return an object with the lowest age', () => {
    expect(dbFuncs.youngest()).to.deep.equal({ name: 'Kathy', age: 8, gender: 'f', jobType: 'na' });
  });
});

describe('oldest', () => {
  it('should return an object with the oldest age', () => {
    expect(dbFuncs.oldest()).to.deep.equal({ name: 'Eric', age: 61, gender: 'm', jobType: 'dv' });
  });
});

describe('malesList', () => {
  it('should return a list of all male employees', () => {
    expect(dbFuncs.males()).to.deep.equal(males);
  });
});

describe('femalesList', () => {
  it('should return a list of all female employees', () => {
    expect(dbFuncs.females()).to.deep.equal(females);
  });
});

describe('employees', () => {
  it('should return a list of all employees that work for given employer', () => {
    expect(dbFuncs.employees('na')).to.deep.equal(naList);
    expect(dbFuncs.employees('none')).to.deep.equal([]);
  });
});