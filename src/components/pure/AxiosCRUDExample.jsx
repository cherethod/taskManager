import React from 'react';
import { login } from '../../services/axiosCRUDService';

const AxiosCRUDExample = () => {

  const authUser = () => {
    login('eve.holt@reqres.in','cityslicka')
      .then((response) => {
        if (response.data.token) {
          alert(JSON.stringify(response.data.token))
          sessionStorage.setItem('session-token', response.data.token)
        } else {
          throw new Error('Login failure')
          (sessionStorage.getItem('session-storage')) ? sessionStorage.removeItem('session-token') : null
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`)
        sessionStorage.removeItem('session-token')        
      })
      .finally(() => console.log('Login done'))
  }

  return (
    <div>
      <button onClick={authUser} >
        Login
      </button>
    </div>
  );
}

export default AxiosCRUDExample;
