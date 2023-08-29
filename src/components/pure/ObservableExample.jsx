import React, { useState } from 'react';
import { getNumbers } from '../../services/ObservableService';
const ObservableExample = () => {

  const [number, setNumber] = useState(0)

  console.log('Subscription to Observable')

  const obtainNewNumbers = () => {
    getNumbers.subscribe(
      {
        next(newNumber){
          console.log(`New number:`, newNumber);
          setNumber(newNumber)
        },
        error(error){
          alert(`Something went wrong: ${error}`)
          console.log('Error with the Observable');
        },
        complete(){
          alert(`Finished with: ${number}`)
          console.log('Done with the Observable')
        }
      }
    )
    // How this console is being outside the 'complete()' while alert stops the process and wait for us click, it shows anyway. 
    // We should remove or move to complete state.
    console.log('Finished receiving numbers') 
  }

  return (
    <div>
      <h2>Number: {number}</h2>
      <button onClick={obtainNewNumbers}>Obtain new numbers</button>
    </div>
  );
}

export default ObservableExample;
