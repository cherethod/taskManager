/*
* Ejemplo de uso de:
* - useState()
* - useRef()
* - useEffect()
*/
import React, { useEffect, useRef, useState } from 'react'

function Ejemplo2() {

  // * Vamos a crear dos contadores distintos, cada uno en un estado diferente

  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);


  // * Vamos a crear una referencia con useRef() para asociar una variable con un elemento del DOM del componente (vista HTML)
  const myRef = useRef();

  function incrementar1() {
    setContador(contador + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1)
  }

  /*
  ? Caso 1: Ejecutar SIEMPRE un snippet de código
  * Cada vez que haya un cambio en el estado del componente se ejecuta aquello que esté dentro del useEffect()
  */

  // useEffect(() => {
  //   console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
  //   console.log('Mostrando Referencia a elemento del DOM:');
  //   console.log(myRef);
  // });
  
  /**
   * ? Caso 2: Ejecutar SOLO cuando cambie CONTADOR 1
   * * Cada vez que haya un cambio en contador 1 se ejecuta lo que diga el useEffect()
   * * En caso que cambie el contador 2, no habrá ejecución
   */

  // useEffect(()=> {
  //   console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
  //   console.log('Mostrando Referencia a elemento del DOM:');
  //   console.log(myRef);
  // }, [contador])

    /**
   * ? Caso 3: Ejecutar SOLO cuando cambie CONTADOR 1 o CONTADOR 2
   * * Cada vez que haya un cambio en contador 1 se ejecuta lo que diga el useEffect()
   * * Cada vez que haya un cambio en contador 1 se ejecuta lo que diga el useEffect()
   */

    useEffect(()=> {
      console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
      console.log('Mostrando Referencia a elemento del DOM:');
      console.log(myRef);
    }, [contador, contador2])

  return (
    <div>
      <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
      <h2>Contador 1: { contador }</h2>
      
      <h2>Contador 2: { contador2 }</h2>

      {/* Elemento referenciado */}
      <h4 ref={ myRef }>
        Ejemplo de elemento referenciado.
      </h4>

      {/* Botones para cambiar los contadores */}

      <button onClick={incrementar1}>Incrementar contador 1</button>
      <button onClick={incrementar2}>Incrementar contador 2</button>
    </div>
  )
}

export default Ejemplo2