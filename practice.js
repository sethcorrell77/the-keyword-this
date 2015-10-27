//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
The purpose of the keyword this is to refer to an object within the scope it is being used.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
1.  Implicit Binding: Scope related.  this refers to a containing object.
2.  Explicit Binding: within an object.
3.  new Binding: binding to a function, not an object directly.
4.  Default binding: standalone function invocation.

  // 3) What is the difference between call and apply?

      //Answer
call refers to using parameters
apply refers to using arrayed arguments.


  // 4) What does .bind do?

      //Answer
where you have a function this is bound to the first argument of .bind.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here

var person = {
  username: "Seth",
  email: "sethcorrell77@gmail.com",
  getUsername: function() {
    return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

person.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.


function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 40;
  this.moveCar = function() {
    this.move = this.move + 10;
    return this.move;
  }
}



  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);



prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here

getYear.call(prius);

//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
undefined
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
nothing.
//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
var fix = getUsername.bind(user);
setTimeout(fix, 5000);