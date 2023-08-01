/**
 * Ejemplo de uso de método componentDidUpdate en compontente clase
 */

import React, { Component, useEffect } from 'react'

export default class DidUpdate extends Component {
  componentDidUpdate(){
    console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado');
  }
  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}


/**
 * Ejemplo de uso de ciclo de vida en hook para componente funcional.
 */
export const DidUpdateHook = () => {
  useEffect(() => {
    console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado');    
  }); // No introduciremos ningún elemento o lista ni pondremos los corchetes vacios ya que nos interesa que se muestre SIEMPRE que se actualice el estado o reciba nuevas props
  return (
    <div>
      <h1>DidUpdate</h1>      
    </div>
  );
}

