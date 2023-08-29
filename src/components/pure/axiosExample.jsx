import React, { useState, useEffect } from 'react';
import  {getRandomUser}  from '../../services/AxiosService';

const AxiosExample = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    obtainUser()
  }, []);

  const obtainUser = () => {
    getRandomUser()
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          // console.log(response.data.results[0].picture.large);
          setUsers(response.data.results[0])
        }
      })
      .catch((error) => {
        console.log(`Something went wrong: ${error}`)
      })    
  }

  return (
    <div>
      <h1>Axios Example</h1>
      { users !== null ?
        (          
            <div>
              <div> 
                <img src={users.picture.large} alt="avatar" />
                <h2>{users.name.title} {users.name.first} {users.name.last}</h2>
                <h3>{users.email}</h3><br />
              <button onClick={obtainUser}>Get new user</button>
              </div>
            </div>         
        ) : (
          <div>            
            <p>Generate a new User</p>
            <button onClick={obtainUser}>Get an user</button>
          </div>
        )
      }
    </div>
  )
}

export default AxiosExample;
