/**
 * Ejemplo de uso del método de ciclo de vida en componente clase.
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
  componentDidMount(){
    console.log('Comportamiento de que el componente sea añadido al DOM (renderizado)');
  }
  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    );
  }
}


/**
 * Ejemplo de uso de ciclo de vida en hook para componente funcional.
 */


export const DidMountHook = () => {
  // Al "no poder utilizar" métodos en componentes funcionales utilizaremos el useEffect
  useEffect(() => {
    console.log('Comportamiento de que el componente sea añadido al DOM (renderizado)');  
  }, []); // al utilizar los corchetes [] indicamos que SOLO se ejecute UNA VEZ
  
  return (
    <div>
      <h1>DidMount</h1>      
    </div>
  );
}

