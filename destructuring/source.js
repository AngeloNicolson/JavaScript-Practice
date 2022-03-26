
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
    object5: {
    object1: {
      object2: {
        master: 'Chief',
        harry: 'Potter',
      },
      object3: {
        han: 'solo'
      }
    }
}
  };

  /* Function for renaming variables as I destructure them*/
  //const { twitter: tweet, facebook: fb } = object.links.social;


  /* Destructuring several layers deep. Remember to call Layers like so: object.links.social; */
  const { master,harry,} = object.object5.object1.object2;
  const { han } = object.object5.object1.object3;

// logs the variables
  console.log(master, harry, han); 
