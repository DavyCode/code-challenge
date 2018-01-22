console.log("Connected!!!!");

//Complex types: When you access a complex type you work on a reference to its value.
/* const foo = [1, 2];
    const bar = foo;  //this reference foo to have the value of bar 
    bar[0] = 9;
    console.log(foo[0], bar[0]);  // 9, 9  // so when we reasign values in a complex data type, we in essence refrence the new state value to  be the value of the initial variable being mutated
*/

// Constant immutability
//Context-1
/*  const arg, args; //throw syntaxerr : constant variables are immutable, not its values, in essence cannot be reassigned and must be initialized during declaration
    arg = 'Hello';
    args = `${arg} world` 
*/

//Context-2
/*  const arg = [2,3,4];
    arg[2] = 20;  // [2,3 20] // constant value can be reassigned
*/


//destructuring
/*const newObj = { a: 12, b: 19, c: 20 }
  let a,b,c,d,e;
  ({  //we start out bu wrapping the our value target in () jst so to avoid issue with block scoping
      a,
      b,
      c,
      d ,  //returns undefined
      e = 10, //assign a new variable e to 10
  } = newObj); //extrats data on objects or arrays into distinct variables
*/
//consuming an Api response with destructuring 

/* var jsonData = {
  favourite: [ 1, 2, 33, 44],
  info: { 
    friends: ['paul','james','vikky'],
    temp: [30],
    edibles: { 
      food: ["rice", "beans"," yam"],
      drinks: ['coke', 'fanta', 'sprite']
    },
    home: { 
      address: '51 iweka road onitsha'
    }
  }
};

var { favourite, info} = jsonData;
console.log({
  favourite,
  'friend 3':info.friends[2],
  address: info.home.address
}
);
*/


// Use object method shorthand. 
// bad
/*const atom = {
  value: 1,
  addValue: function (value) {
    return atom.value + value;
  },
};
// good
const atom = {
  value: 1,
  addValue(value) {
    return atom.value + value;
  },
};
*/


// Use property value shorthand. 
// Why? It is shorter to write and descriptive.

/*const lukeSkywalker = 'Luke Skywalker';
// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};
// good
const obj = {
  lukeSkywalker,
};
*/


// Group your shorthand properties at the beginning of your object declaration.
// Why? It's easier to tell which properties are using the shorthand.
/*
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';
// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};
// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
*/



// Only quote properties that are invalid identifiers. 
// Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.
// Introduction

/*
const newObject = {
  foo: 3,
  bar: 4,
  'data-blah': 5,  //quote the invalid identifier
};
*/

//Scoping es5
/* 
function outer() {
  var a = 1;
  function inner() {
    var b = 2;
  // we can access both `a` and `b` here
    console.log( a + b ); // 3
  }
  inner();
  // we can only access `a` here
  console.log( a ); // 1
}
outer();   // 1 //3
*/  