console.log('connected');

// FIZZBUZZ
// const fizzBuzz = num => {
//   for (
//       let i = 1; 
//       i <= num;
//       i+=1
//   ) {
//           if ( i % 15 === 0){
//             console.log( "fizzBuzz")
//           }else if (i % 5 === 0 ){
//             console.log( "Buzz")
//           }else if(i % 3 === 0){
//             console.log("fizz")
//           }else{
//             console.log(i)
//           }
//   }
// }
// fizzBuzz(30)



//HARMLESSRANSOMENOTE
// const harmlessRansomeNote = (noteText, magText) => {
//     let noteArr = noteText.split(' ');
//     let magArr = magText.split(' ');
//     let magObj = {};

//     magArr.forEach(word => {
//        if(!magObj[word]){ magObj[word] = 0} 
//         magObj[word] += 1;
//     })

//     var possible = true;
//     noteArr.forEach( word => {
//        if(magObj[word]){
//           magObj[word] -= 1;
//           if(magObj[word] < 0){
//             possible = false;
//           }
//        }else {
//          possible = false
//        }
//     })
//     console.log(possible)
//     return possible;
   
// }
// harmlessRansomeNote("is", "hey this is the first time im doing this")


// PALINDROME

// function is_Palindrome(word) {
  // var wordArr = word.split('');
  // var wordArrRev = word.split('').reverse() 

  // var i = wordArr.length;
  // if(i !== wordArrRev.length){ return false;}
  //  while(i-=1){
  //    if(wordArr[i] !== wordArrRev[i]){ return false}
  //  }
  //  return true;

  // OR
//   var wordStr = word;
//   var reversedWord = word.split('').reverse().join('')
//   if(wordStr === reversedWord){
//     return true;
//   }
//   return false;
// }
// is_Palindrome('noon')



















// Write a program that checks if a word supplied as the argument is an Isogram. An Isogram is a word in which no letter occurs more than once.
// Create a method called is_isogram that takes one argument, a word to test if it's an isogram. This method should return a tuple of the word and a boolean indicating whether it is an isogram.
// If the argument supplied is an empty string, return the argument and False: (argument, False). If the argument supplied is not a string, raise a TypeError with the message 'Argument should be a string'.
// Example:
//     is_isogram("abolishment")
// Expected result:
//     ("abolishment", True)

// function is_isogram (word){
//     if(word === " " ){
//       return  `${word},` + false;
//     }
//     if(typeof word !== "string"){
//        return TypeError('Argument should be a string');
//     }
//     var wordArr = word.toLowerCase().split('')
//     var wordObj = {};
    
//     wordArr.forEach(word => {
//       if(!wordObj[word]){wordObj[word] = 0;}
//         wordObj[word] += 1;
//     });

//     var isPossible = true;
//     for(let key in wordObj) {
//         if(wordObj[key] > 1){
//           isPossible = false;        
//         }
//     }
//     return `${word}` + isPossible

// }

// is_isogram('Davi')






// Create a class called ShoppingCart.
// Create a constructor that takes no arguments and sets the total attribute to zero, and initializes an empty dict attribute named items.
// Create a method add_item that requires item_name, quantity and price arguments. 
// *** This method should add the cost of the added items to the current value of total.
// *** It should also add an entry to the itemsdict such that the key is the item_name and the value is the quantity of the item.

// Create a method remove_item that requires similar arguments as add_item.
// *** It should remove items that have been added to the shopping cart and are not required. 
// *** This method should deduct the cost of the removed items from the current total and also update the items dict accordingly.
// If the quantity of an item to be removed exceeds the current quantity of that item in the cart, assume that all entries of that item are to be removed.

// Create a method checkout that takes in cash_paid and returns the value of balance from the payment. 
// *** If cash_paid is not enough to cover the total, return "Cash paid not enough".

// Create a class called Shop that has a constructor which takes no arguments and initializes an attribute called quantity at 100.
// Make sure Shop inherits from ShoppingCart.
// In the Shop class, override the remove_item method, such that calling Shop's remove_item with no arguments decrements quantity by one.


// class ShoppingCart {
//   constructor() {
//       this.total = 0;
//       this.items = {};
//   }

//   add_Item(item_name, quantity, price) {
//       this.total += quantity * price;
//       if (!this.items[item_name]) {
//           this.items[item_name] = 0;
//       }
//       this.items[item_name] += quantity;
//   }

//   remove_item(item_name, quantity, price) {
//       this.total -= quantity * price;
//       if (this.items[item_name]) {
//           this.items[item_name] -= quantity;
//       }

//       if (this.items[item_name] < 0 || !this.items[item_name]) {
//           this.items[item_name] = 0;
//       }
//   }



//   checkout(cash_paid) {
//       if (cash_paid < this.total) {
//           return "Cash paid not enough";
//       } else {
//           return cash_paid - this.total;
//       }
//   }
// }

// class Shop extends ShoppingCart {
//   constructor() {
//       super();
//       this.quantity = 100;
//   }

//   remove_item() {
//       --this.quantity
//   }
// }


//var shop = new Shop();
//shop.removeItem();
//console.log(shop.quantity);












// Write a function called remove_duplicates which will take one argument called string. This string input will only have characters between a-z.
// The function should remove all repeated characters in the string and return a tuple with two values:
// A new string with only unique, sorted characters.
// The total number of duplicates dropped.
// For example:
// remove_duplicates('aaabbbac') => ('abc', 5)

// remove_duplicates('a') => ('a', 0)

// remove_duplicates('thelexash') => ('aehlstx', 2)


// (function remove_duplicates(string){
//   let stringArr = string.split('');
//   let strObj = {};
//   let newArr = [];
//   let result; 

//   stringArr.forEach(letter => {
//     if(!strObj[letter]){
//       strObj[letter] = 0;
//     }
//     strObj[letter] += 1;
//   });

//   for(let i in strObj){
//     newArr.push(i);
//   };

//   result = newArr.sort().join('');

//   return (`('${result}', ${stringArr.length - newArr.length})`)

// }('hello'));












// Write a function my_sort which takes in a list of numbers (positive integers).
// The function should return a list of sorted numbers such that odd numbers come first and even numbers come last.
// For example:
// my_sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [1, 3, 5, 7, 9, 2, 4, 6, 8]
// my_sort([1, 2]) => [1, 2]
// my_sort([2, 1]) => [1, 2]
// my_sort([3, 3, 4]) => [3, 3, 4]
// my_sort([90, 45, 66]) => [45, 66, 90]

// function my_sort (array) {
//   let oddArray = [];
//   let evenArray = [];

//   array.forEach(num => {
//     if(num % 2 === 0) {
//       evenArray.push(num)
//     }else{
//       oddArray.push(num)
//     }
//   })
//   oddArray.sort()
//   evenArray.sort()
//   return oddArray.concat(evenArray);
// }
// my_sort([3,5,6,1,7])




// Write a function power that accepts two arguments, a and b and calculates a raised to the power b.
// Example:
// power(2,3) = 8
// Raise a TypeError with the message Argument must be integer or float if the inputs are anything other that ints or floats.

// function power(a, b) {
//   if(typeof a === 'number' &&  typeof b === 'number'){
//     let result = a;
//     for(let i = 1; i < b; i +=1){
//          result *= a;
//     }
//     return result;
//   }
//   return TypeError('Argument must be integer')
// }
// power(2,3)





// Write a function called longest which will take a string of space-separated words and will return the longest one.
// For example:
// longest("This is Andela") => "Andela"

// longest("A") => "A"

// function longest(word) {
//     var wordArr = word.split(' ');
//     var longest= 0;
//     var longestWord = '';

//     for(var i = 0; i < wordArr.length; i += 1){
//       if(longest < wordArr[i].length){
//         longest = wordArr[i].length;
//         longestWord = wordArr[i]
//       }
//     }
//     return longestWord;
// }
// longest("hello from the other side")
