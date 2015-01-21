

// create a function that doesn't take any parameters
var sayHello = function () {
  console.log('Hello!');
};
// sayHello();


// create a function that takes 1 parameter

var sayHi = function (str) {
  console.log('Hi ' + str);
};
// sayHi('Vivien');
// var myName = 'Paul';
// sayHi(myName);


// create a function that takes 2 parameters (1 string and 1 number)
// I want to console log "May name is ......, I am ..... years old"

var greeting = function (name, age){
  console.log('My name is ' + name + ', I am ' + age + ' years old');
}
// greeting('Vivien', 12);



/////////////////////////////////////////////////////

//Challenge 1

console.log('>>>>>>>>>>>>>>>>>>>>>Challenge 1')

var challenge1 = function(num){
  console.log("you are trying to run the 1st challenge function for num = " + num);
   for (var i=1; i<=num; i++){
    console.log(i);
  }  
}
// to run the function directly from the js console on Chrome, do:
// challenge1(100);



