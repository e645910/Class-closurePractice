//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){  // outer function 
  var name = 'Tyler';
  return function(){  // inner function
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
  var inner = function(){ //change return function() to var inner = function(){
   

//Once you do that, invoke inner.

  //Code Here
var inner = outer(); // changes the scope to now look at the outer function
inner();  // invokes the outer function


//Next problem



var callFriend = function(){ // outer function 
  var friend = 'Jake';

  function callF(number){ // inner function
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here

var result = callFriend('435-215-9248');
result(); // now will show 'Calling Jake at 435-215-9248' in console


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
  var count = makeCounter();

  var counter = 0;
  function count() {
    return counter += 1;
  }

  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem


/*
  Write a function that accepts another function as it's only argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second arguments that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

var sumNum = function(num1) { 
  function addNum () {      
    return num1 + 2;
  }
return addNum ();
};
sumNum (1);


















