export const getUsers = async () => {
  let response = await fetch('https://reqres.in/api/users');
  console.log(response)
  // We return the json
  return response.json();
}

export const getAllUsers = async (page) => {
  let response = await fetch(`https://reqres.in/api/users?page=${page}`);
  return response.json();
}

export const getUserDetails = async (id) => {
  let response = await fetch(`https://reqres.in/api/users/${id}`);
  return response.json();
}

export const login = async (email, password) => {
  let body = {
    email, // It's the same as typing 'email: email,' but we would have redundancy if we did it.
    password
  }

  let response = await fetch('https://reqres.in/api/login',{
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(body)
  });
  console.log('Response:', response)
  console.log('Status:', response.status)
  console.log('OK?', response.ok)
  return response.json();
}