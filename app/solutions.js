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

// function isIsogram(word){
//   if(word === "" ){
//   return  false;
// }
// if(typeof word !== "string"){
//    return false;
// }
// var wordArr = word.toLowerCase().split('')
// var wordObj = {};

// wordArr.forEach(word => {
//   if(!wordObj[word]){wordObj[word] = 0;}
//     wordObj[word] += 1;
// });

// var isPossible = true;
// for(let key in wordObj) {
//     if(wordObj[key] > 1){
//       isPossible = false;        
//     }
// }
// return isPossible

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












// Write a function called remove_duplicates which will take one argument called string. This string input will only have characters between a-z. REGEX
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



// Test Results:
// Data Structures
// removeDuplicates('th#elex_ash?')
// Should return type 'object'
// expected '#?_aehlstx' to be an object

// Return object should have a 'uniques' string property
// expected undefined to be a string

// Return object should have a 'duplicates' number property
// expected undefined to be a number


// 'uniques' should be 'aehlstx'
// expected undefined to equal 'aehlstx'
// 'duplicates' should be 2
// expected undefined to equal 2





















// ==========================================================

// JavaScript

// The function should be called removeDuplicates and return an object literal containing a 'uniques' property, which should be the sorted input string but without any duplicates or special characters.
// The returned object should also have a 'duplicates' propoerty which should represent the total number of duplicate characters dropped

// For example

// removeDuplicates('th#elex_ash?')

// Returns

//  {uniques: 'aehlstx', duplicates: 2}


// function removeDuplicates(string) {
//   let validStr = string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
//   let stringArr = validStr.split('');
//   let strObj = {};
//   let newArr = [];
//   let sortedWord;
//   let numDropped = 0;
//   let resultObj = {};


//   //filter characters
//   stringArr.forEach(letter => {
//     if(!strObj[letter]){
//       strObj[letter] = 0;
//     }
//     strObj[letter] += 1;
//   });

//   // push characters to be sorted
//   for(let i in strObj){
//     newArr.push(i);
//   };

//   //sort characters into string
//   sortedWord = newArr.sort().join('');

//   //difference
//   numDropped = stringArr.length - newArr.length;

//   resultObj['uniques'] = sortedWord;
//   resultObj['duplicates'] = numDropped;


//   return resultObj;
// }





























// JavaScript

// Write a mySort function which takes in an array integers, and should return an array of the inputed integers sorted such that the odd numbers come first and even numbers come last.

// For exampl1e:

// mySort( [90, 45, 66, 'bye', 100.5] )

// should return

// [45, 66, 90, 100]


// mySort( [90, 45, 66] )
// [90, 45, 66, 'bye', 100.5] should ignore random strings, treat input as integers, and return [45, 66, 90, 100]
// expected [ 100.5, 45, 'bye', 66, 90 ] to deeply equal [ 45, 66, 90, 100 ]
// mySort( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] )
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] should return [1, 3, 5, 7, 9, 2, 4, 6, 8]
// expected [ 1, 3, 5, 7, 9, 10, 2, 4, 6, 8 ] to deeply equal [ 1, 3, 5, 7, 9, 2, 4, 6, 8, 10 ]




// function mySort (array) {
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



// function mySort(nums) {
// 	nums = nums.filter(isNumber);
// 	for (let x = 0; x < nums.length; x++) {
// 		nums[x] = parseInt(nums[x]);
// 	}
// 	let odd = nums.filter(isOdd);
// 	let even = nums.filter(isEven);
// 	return [].concat(odd.sort(sortNumber), even.sort(sortNumber));
// }

// function isNumber(element, index, array) {
// 	return !isNaN(element);
// }

// function isOdd(element, index, array) {
// 	return element % 2 !== 0 && typeof element === 'number';
// }

// function isEven(element, index, array) {
// 	return element % 2 === 0 && typeof element === 'number';
// }

// function sortNumber(x, y) {
// 	return x - y;
// }


















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

function longest(word) {
    var wordArr = word.split(' ');
    var longest= 0;
    var longestWord = '';

    for(var i = 0; i < wordArr.length; i += 1){
      if(longest < wordArr[i].length){
        longest = wordArr[i].length;
        longestWord = wordArr[i]
      }
    }
    return longestWord;
}
// longest("hello from the other side")
