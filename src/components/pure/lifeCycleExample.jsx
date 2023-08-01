/**
 * * Ejemplo de componenete de tipo clase que dispone de los métodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {
  constructor(props) {
    super(props)
    console.log('CONSTRUCTOR: Cuando se instancia el componente');
  }

  componentWillMount() {
    console.log('WILLMOUNT: Antes del montaje del componente');
  }

  componentDidMount() {
    console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de pintarlo');
  }

  componentWillReceiveProps(nextProps) {
    console.log('WILLRECIVEPROPS: Si va a recibir nuevas props');
  }

  shouldComponentUpdate(nextProps, nextState) {
    /**
     * * Controlar si el componente debe o no actualizarse
     */ 
    // * return true / false
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('WILLUPDATE: Justo antes de renderizarse');
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('DIDUPDATE: Justo después de renderizarse');
  }

  componentWillUnmount() {
    console.log('WILLUNMOUNT: Justo antes de desaparecer el componente');
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
