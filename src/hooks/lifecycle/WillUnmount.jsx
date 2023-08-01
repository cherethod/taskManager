import React, { Component, useEffect } from 'react'

/**
 * Ejemplo de uso de método componentWillUnmount en compontente clase
 */

export default class WillUnmount extends Component {
  componentWillUnmount(){
    console.log('Comportamiento antes de que el componente desaparezca');
  }
  render() {
    return (
      <div>
        <h1>WillUnmount</h1>
      </div>
    )
  }
}

/**
 * Ejemplo de uso de ciclo de vida en hook para componente funcional.
 */

export const WillUnmountHook = () => {
  useEffect(() => {
    /** Aquí no pondremos nada pero si tendremos que utilizar el return ya que lo que nos interesa es que se muestre SOLO UNA VEZ tras finalizar 
     *  por eso volveremos a usar las corchetes vacias para indicar que solo ocurra una vez.
     */
    return () => {
      console.log('Comportamiento antes de que el componente desaparezca');    
    }
  }, []); 
  return (
    <div>
      <h1>WillUnmount</h1>      
    </div>
  );
}

