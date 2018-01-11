console.log("Connected!!!!");

//Complex types: When you access a complex type you work on a reference to its value.
/* const foo = [1, 2];
    const bar = foo;  //this reference foo to have the value of bar 
    bar[0] = 9;
    console.log(foo[0], bar[0]);  // 9, 9  // so when we reasign values in a complex data type, we in essence refrence the new state value to the initial value of the first variable being mutated
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
/*const newObj = { a: 12, b: 19, c: 20}
  let a,b,c,d,e;
  ({
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