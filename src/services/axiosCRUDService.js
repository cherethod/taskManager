import axios from "axios";
/*
* Login Method to Reqres endpoint
? @param { string } email
? @param { string } password
*/

export const login = (email, password) => {

  let body = {
    email: email,
    password: password
  }

  // Returns the response with a Promise
  return axios.post('https://reqres.in/api/login', body)
}

// TODO: Obtain All users
// TODO: Obtain users by ID
// TODO: Create User
// TODO: Update User
// TODO: Delete User
