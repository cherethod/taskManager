/* 
* Ejemplo de uso del Hook useState
*
* Crear un componente de tipo función y acceder a su estado privado a través de un hook y, además, poder modificarlo.
*
*/

import React, { useState } from 'react';

const Ejemplo1 = () => {
  
  // Valor inicial para un contador

  const valorInicial = 0;

  // Valor inicial para una persona

  const personaInicial = {
    nombre:  'Javi',
    email: 'cherethod.dev@gmail.com'
  }

  /* 
  * Queremos que el VALORINICIAL Y PERSONAINICIAL sean parte del estado del componente, para así poder gestionar su cambio
  * y que éste se vea reflejado en la vista del componente.
  * 
  * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
  */

 const [contador, setContador] = useState(valorInicial);
 const [persona, setPersona] = useState(personaInicial);

 /*
  * Función para actualizar el estado privado que contiene el contador
  */

 function incrementarContador() {
    // ? funcionParaCambiar(nuevoValor)
    setContador(contador + 1);
 }

 /* 
  * Función para actualizar el estado privado de persona mediante solicitudes prompt al usuario
  */

 function actualizarPersona() {
    setPersona(
      {
        nombre: prompt('Introduce el nuevo nombre'),
        email: prompt('Introduce el nuevo correo electrónico')
      }
    )
 }
  
  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2>CONTADOR: {contador}</h2>
      <button onClick={incrementarContador}>Incrementar valor</button>
      <hr />
      <h2>DATOS DE LA PERSONA:</h2>          
      <h3>Nombre: {persona.nombre}</h3>
      <h3>Email: {persona.email}</h3>
      <button onClick={actualizarPersona}>Editar persona</button>

    </div>
  );
}

export default Ejemplo1;
