
//Simple object
const person = {
    first: 'Angelo',
    last: 'Nicolson',
  };
  // Single object destructure
    const{first,last} = person;
  /*


  */
   // Nested Object data
  const object = {
    firstName: 'Angelo',
    lastName: 'Nicolson',
    object1: {
    object2: {
      object3: {
        master: 'Chief',
        harry: 'Potter',
      },
      object4: {
        han: 'Solo'
      }
    }
}
  };

  /* Function for renaming variables as I destructure them*/
  //const { twitter: tweet, facebook: fb } = object.links.social;


  /* Destructuring several layers deep. Remember to call Layers like so: object.links.social; */
  const { master,harry,} = object.object1.object2.object3;
  const { han } = object.object1.object2.object4;

// logs the variables
  console.log(master, harry, han); 
