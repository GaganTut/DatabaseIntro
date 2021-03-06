/*jshint esversion: 6*/
const users = {
  '1': { name: 'Alice', age: 12, gender: 'f', jobType: 'st' },
  '2': { name: 'Bob', age: 21, gender: 'm', jobType: 'dv' },
  '3': { name: 'Claire', age: 56, gender: 'f', jobType: 'dv' },
  '4': { name: 'David', age: 9, gender: 'm', jobType: 'na' },
  '5': { name: 'Eric', age: 61, gender: 'm', jobType: 'dv' },
  '6': { name: 'Fred', age: 45, gender: 'm', jobType: 'dv' },
  '7': { name: 'George', age: 38, gender: 'm', jobType: 'dv' },
  '8': { name: 'Hannah', age: 15, gender: 'f', jobType: 'na' },
  '9': { name: 'Ilona', age: 17, gender: 'f', jobType: 'st' },
  '10': { name: 'Jake', age: 27, gender: 'm', jobType: 'dv' },
  '11': { name: 'Kathy', age: 8, gender: 'f', jobType: 'na' },
  '12': { name: 'Liam', age: 20, gender: 'm', jobType: 'st' }
};

const employer = {
  dv: 'DevLeague',
  st: 'Student',
  na: 'N/A'
};

function byId(id) {
  if (users.hasOwnProperty(id)) {
    return users[id];
  } else {
    return false;
  }
}

function youngest() {
  let youngest = users['1'];
  for (let k in users) {
    if (users[k].age < youngest.age) {
      youngest = users[k];
    }
  }
  return youngest;
}

function oldest() {
  let oldest = users['1'];
  for (let k in users) {
    if (users[k].age > oldest.age) {
      oldest = users[k];
    }
  }
  return oldest;
}

function males () {
  let malesList = [];
  for (let k in users) {
    if (users[k].gender === 'm') {
      malesList.push(users[k]);
    }
  }
  return malesList;
}

function females() {
  let femalesList = [];
  for (let k in users) {
    if (users[k].gender === 'f') {
      femalesList.push(users[k]);
    }
  }
  return femalesList;
}

function employees(employ) {
  let employeesList = [];
  for (let k in users) {
    if (users[k].jobType === employ) {
      users[k].jobType = employer[employ];
      employeesList.push(users[k]);
    }
  }
  return employeesList;
}

function canDrink() {
  let drinkList = [];
  for (let k in users) {
    if (users[k].age >= 21) {
      drinkList.push(users[k]);
    }
  }
  return drinkList;
}


const functions = {
  byId: byId,
  youngest: youngest,
  oldest: oldest,
  males: males,
  females: females,
  employees: employees,
  canDrink: canDrink
};

module.exports = functions;