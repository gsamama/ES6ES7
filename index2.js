var sayHello = name => `Hello ${name}`;

var getSiblings = n => ({ previous: n - 1, next: n + 1 });

/*
function sayHello(){
  return 'Hello';
}
*/
console.log(sayHello('Gilbert'));
console.log(getSiblings(10));