import React, { useEffect, useState } from 'react';
import { getAllUsers, getUserDetails, getUsers, login } from '../../services/FetchService';
import "../../styles/users.scss";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [usersPerPage, setUsersPerPage] = useState(6);
  const [pages, setPages] = useState(2);
  const [totalUsers, setTotalUsers] = useState(12);
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
   
    obtainUsers();

  }, []);

  const obtainUsers = () => {
    getUsers()
    .then((response) => {
      console.log('Users', response.data);
      setUsers(response.data);
      setUsersPerPage(response.per_page);
      setPages(response.pages);
      setTotalUsers(response.total);
    })
    .catch((error) => alert(`Something went wrong: ${error}`))
    .finally(() => {
      console.log('Finished obtaining users:');
      console.table(users);
    })
  }

  const obtainAllUsers = (page) => {
    getAllUsers(page)
      .then((response) => {
        console.log('All paged users', response.data);
        setUsers(response.data);
        setUsersPerPage(response.per_page);
        setPages(response.pages);
        setTotalUsers(response.total);
      })
      .catch((error) => alert(`Something went wrong: ${error}`))
      .finally(() => {
        console.log('Finished obtaining users:');
        console.table(users);
      })
  }

  const obtainUserDetails = (id) => {
    getUserDetails(id).then((response) => {
      console.log('All paged users', response.data);
      setSelectedUser(response.data);
    })
    .catch((error) => alert(`Something went wrong: ${error}`))
    .finally(() => {
      console.log('Finished obtaining user details:');
      console.table(selectedUser);
    })
  }

  const authUser = () => {
    login('eve.holt@reqres.in', 'cityslicka')
      .then((response) => {
        console.log('Authentication user token:', response.token);
        sessionStorage.setItem('token', response.token)
      })
      .catch((error) => alert(`Something went wrong login user: ${error}`))
      .finally(() => {
        console.log('Finished authenticating user:');
      })
  }

  // const obtainUsers = () => {
  //   getAllUsers()
  //   .then((response) => {

  //     if (response.status >= 200 && response.status < 300 && response.ok) {
  //       response.json().then((body) => {          
  //               // console.log('All users', body.data);
  //               setUsers(body.data);
  //       }).catch((error) => console.log(`Something went wrong: ${error}`))
  //     }
  //   })
  //   .catch((error) => alert(`Something went wrong: ${error}`))
  //   .finally(() => {
  //     console.log('Finished obtaining users:');
  //     console.table(users);
  //   })
  // }

   
  return (
    <div style={{display: 'flex', gap: '50px', userSelect: 'none'}}>
      <div>
      <button onClick={authUser}>Auth user</button>
        <h2>Users:</h2>
        {
          users.map((user, index) => 
            (<p 
              key={index} 
              className='user--name'
              onClick={() => obtainUserDetails(user.id)}
            >
              {user.first_name} {user.last_name}
            </p>),
            console.log(selectedUser)
          )
        }
        <p>Showing {usersPerPage} users of {totalUsers} in total</p>
        <button onClick={() => obtainAllUsers(1)}>
            1
        </button>
        <button onClick={() => obtainAllUsers(2)}>
            2
        </button>
      </div>
        { 
          selectedUser != null ?
          (
            <div className='user--details-container'>
              <h3>User Details</h3>
              <p>Name: {selectedUser.first_name}</p>
              <p>Last name: {selectedUser.last_name}</p>
              <p>Email: {selectedUser.email}</p>
              <img src={selectedUser.avatar} alt={`Avatar of ${selectedUser.first_name} ${selectedUser.last_name}`} />
            </div>
          ) : (
            <div>
              <h6>Please click on a User to see its details.</h6>
            </div>
          )
        }
   
    </div>
  );
}

export default FetchExample;
