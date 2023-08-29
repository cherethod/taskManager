import React from 'react';
import { useState } from 'react';

// * LOGIN - LOGOUT BUTTONS

let red = 0;
let green = 200;
let blue = 150;

// ? Loged User styles
const logoutBtnStyle = {
  backgroundColor: `rgb(${red},${green},${blue})`,
  color: 'white',
  fontWeight: 'bold'
}

// ? Guest user styles
const loginBtnStyle = {
  backgroundColor: `rgb(${red+250},${green-180},${blue-80})`,
  color: 'white',
  fontWeight: 'bold'
}

const LoginButton = ({loginAction, propStyle}) => {
  return (
    <button style={propStyle} onClick={loginAction}>Login</button>
  )
}

const LogoutButton = ({logoutAction, propStyle}) => {
  return (
    <button style={propStyle} onClick={logoutAction}>Logout</button>
  )
}

// ? (Expresión true) && expresión => se renderiza la expresión.
// ? (Expresión false) && expresión => NO se renderiza la expresión.


const OptionalRender = () => {

  const [access, setAccess] = useState(false);
  const [nMessages, setNMessages] = useState(0);

  // const updateAccess = ()=> {
  //   setAccess(!access);
  // }

  const loginAction = ()=> {
    setAccess(true);
  }
  
  const logoutAction = ()=> {
    setAccess(false);
  }

  let optionalButton = (access) ? 
    <LogoutButton propStyle={loginBtnStyle} logoutAction={logoutAction}></LogoutButton> 
    : <LoginButton propStyle={logoutBtnStyle} loginAction={loginAction}></LoginButton>

  let addMessages = () => {
    setNMessages(nMessages + 1)
  }
  
  // return (
  //   <div>
  //       {/* Optional Button  */}
  //       { optionalButton }
  //      <br />
  //      <br />      
  //       {/* N Messages unread */}
  //       { nMessages > 0 && <p>You have {nMessages} messages unread...</p> }
  //       { nMessages === 0 && <p>Ther aren't unread messages</p>}
  //       <button onClick={addMessages}>Add new message</button>
  //   </div>
  // );

  // * USE DIFERENT COMPONENT FOR LOGGED AND UNLOGGED USER

  // const UserContent = () => {
  //   return (
  //     <div>
  //       {nMessages > 0 && <p>You have {nMessages} new message{nMessages > 1 ? 's' : null} unread...</p>}
  //       {/* {nMessages > 1 && <p>You have {nMessages} new messages unread...</p>} */}
  //       {nMessages === 0 && <p>Ther aren't unread messages</p>}
  //       <button onClick={addMessages}>{nMessages === 0 ? 'Add your first message' : 'Add new message'}</button>
  //     </div>
      
  //   )
  // }

  // const GuestContent = () => {
  //   return (      
  //     <p>Please login to access your messages</p>
  //   )
  // }

  return (
    <div>
        {/* Optional Button  */}
        { optionalButton }
       <br />
       <br />      
      {/* { access ? <UserContent></UserContent> : <GuestContent></GuestContent> } */}
      {/* //* USE TERNARY CONDITIONAL TO SPLIT LOGGED AND UNLOGGED USER CONTENT */}
      { access ? (
        <div>
          {nMessages > 0 && <p>You have {nMessages} new message{nMessages > 1 ? 's' : null} unread...</p>}
          {/* {nMessages > 1 && <p>You have {nMessages} new messages unread...</p>} */}
          {nMessages === 0 && <p>Ther aren't unread messages</p>}
          <button onClick={addMessages}>{nMessages === 0 ? 'Add your first message' : 'Add new message'}</button>
        </div>
      ) : ( <p>Please login to access your messages</p> )
      }
    </div>
  );


  /*
  * IF ELSE CONDITIONAL RENDER

  let optionalButton;

  if (access) optionalButton = <button onClick={updateAccess}>Logout</button>
  else optionalButton = <button onClick={updateAccess}>Login</button>

   return (
    <div>
        { optionalButton }
    </div>
  );

  */


/* 
* TERNARY OPERATOR RENDER

  let optionalButton = <button onClick={updateAccess}>{(access) ? 'Logout' : 'Login'}</button>

   return (
    <div>
        { optionalButton }
    </div>
  );

*/ 

}

export default OptionalRender;
