import React from 'react';

const AsyncExample = () => {

  // An ordinary function handled as a promise
  
  async function generateNumber() {
    return Math.round(Math.random()*10)
  }

  function obtainNumber() {
    generateNumber()
      .then((response) => alert(`Response: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`));

  }

  // Function returning a promise


  async function generatePromisedNumber() {
    return Promise.resolve(
      Math.round(Math.random()*100)
    )
  }

  function obtainPromisedNumber() {
    generatePromisedNumber()
      .then((response) => alert(`Promise response: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`));
  }

  // Basic example of a function that saves a value in sessionStorage and them returns it as a promise

  async function saveSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    return Promise.resolve(sessionStorage.getItem(key))
  }


  function showStorage() {
    saveSessionStorage('name', 'Javi')
    .then((response) => {
      let value = response;
      console.log('WORKING: Saving name in session storage');
      alert(`Saved Name: ${value}`);
    })
    .catch((error) => alert(`Something went wrong: ${error}`))
    .finally(() => console.log('SUCCES: Name saved and retrieved'));
  }

  // Example of a delayed promise that returns a message

  async function obtainMessage() {
    
    let promise = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve('Hello world')      
      }, 3000);
    })

    let message = await promise;

    alert(`Message received: ${message}`)

  }

  // Example of forced rejected promise 
  
  const returnError = async () => {
    // When I use AI to check gramatical errors it tell me about use 'throw' also 'await' for the promise rejection
    // await Promise.reject(new Error(`Oooooops!, something's wrong`))
    throw Promise.reject(new Error(`Oooooops!, something's wrong`))
  }

  const consumeError = () => {
    returnError()
      .then((response) => alert(`Everything is OK: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`))
      .finally(() => alert('Script ends'))
  }

  // Example of script that simulates URL request that is rejected becouse the URL is incorrect

  const urlNotFound = async () => {
    try {
      let response = await fetch('https://invalidURL.es')
      alert(`Response: ${JSON.stringify(response)}`)
    } catch (error) {
      alert(`Something went wrong with your URL: ${error}. (Check your console).`)
      console.log(error)
    }
  }

  // Example of function that handles multiple fetchs requests

  const multiplePromise = async () => {
    let results = await Promise.all(
      [
        fetch('https://reqres.in/api/users'),
        fetch('https://reqres.in/api/users?page=2')
      ]
    )
    .catch((error) => alert(`Something went wrong with your URL: ${error}. (Check your console).`))
  }

  return ( 
    <div style={{display: 'flex', gap: '15px'}}>
      <button onClick={obtainNumber}>Obtain number</button>
      <button onClick={obtainPromisedNumber}>Obtain Promise number</button>
      <button onClick={showStorage}>Save name and show</button>
      <button onClick={obtainMessage}>Receive delayed message</button>
      <button onClick={consumeError}>Force error</button>
      <button onClick={urlNotFound}>Force error URL fetch</button>
      <button onClick={multiplePromise}>Multiple promises</button>
    </div>
  );
}

export default AsyncExample;
