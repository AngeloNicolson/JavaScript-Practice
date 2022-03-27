<button class="event-button">Callback button</button>

    const button = document.querySector('.event-button');
    button.addEventListener('click',function () {alert("Hey there!");
});

// Simple synchronous Callback
function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);
  