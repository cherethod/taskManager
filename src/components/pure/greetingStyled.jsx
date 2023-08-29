import React, { useState } from 'react';

// Definiendo estilos en constantes

// ? Estilo para usuario logueado

const loggedStyle = {
  color: 'white'
}

// ? Estilo para usuario NO logueado

const unloggedStyle = {
  color: 'tomato',
  fontWeight: 'bold'
}

const GreetingStyled = (props) => {
  // * Generamos un estado para el componente y así controlar si el usuario está o no logueado

  const [logged, setLogged] = useState(false);

  const greetingUser = () => (<p>Wellcome, {props.name}</p>);
  const pleaseLogin = () => (<p>Please login</p>);

  return (
    <div style={ logged ? loggedStyle : unloggedStyle }>
    {/* Método directo */}
    {/* { logged ? (
      <p>Wellcome, {props.name}</p>
    ) : (
      <p>Please login</p>
    )} */}
    {/*  Método mediante constantes */}
    { logged ? greetingUser() : pleaseLogin() }
      <button onClick={() => {
        console.log('Botón pulsado');
        setLogged(!logged);
      }}>
        { logged ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default GreetingStyled;
