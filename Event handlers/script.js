const myDisplayer = (something) => {
    console.log(">>" + something + "<<");
  }
  
  const myCalculator = (num1, num2, myCallback) => {
    const sum = num1 + num2;
    myCallback(sum);
    
  }
  
  myCalculator(1, 6, myDisplayer);
  
  myCalculator(8, 16, myDisplayer);

  // Event 
  <button id="callback-btn">Click here</button>

  document.queryselector("#callback-btn")
    .addEventListener("click", function() {    
      console.log("User has clicked on the button!");
});
  