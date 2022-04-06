const highlightEL = (myParam) => {
    myParam = "hello";
}
console.log(myParam);



// // Simple synchronous Callback
// const greeting(name) {
//     alert('Hello ' + name);
//   }
  
//   const processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);
  
// // this is anothe examle of a Callback
//   const fullName(firstName, lastName, callback){
//     console.log("My name is " + firstName + " " + lastName);
//     callback(lastName);
//   }
  
//   let greetings = function(ln){
//     console.log('Welcome Mr. ' + ln);
//   };
  
//   fullName("Jackie", "Chan", greeting);

//   //Anonymous function
//   setTimeout(function() {  
//     console.log("This message is shown after 3 seconds");
// }, 3000);

// //callback as an arrow function
// setTimeout(() => { 
//     console.log("This message is shown after 3 seconds");
// }, 3000);

// // Callback button
//  <button id="callback-btn">Click here</button>

//  document.queryselector("#callback-btn")
//    .addEventListener("click", function() {    
//      console.log("User has clicked on the button!");
// });