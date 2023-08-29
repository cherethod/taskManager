import React, { useRef } from 'react';

const Child = ({name, send, update}) => {

  const messageRef = useRef('')
  const nameRef = useRef('')

  function pressButton() {
    // Send alert with text received from input executed from itself (child)
    const text = messageRef.current.value;
    alert(`Text recived from input: ${text}`)
  }

  function pressButtonParams(text) {
    alert(`Text: ${text}`)
  }

  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <div style={{backgroundColor:'dodgerblue', padding:'30px'}}>
      <p onMouseOver={() => console.log('On Mouse Over')}>Current name: { name }</p>
      <button onClick={() => console.log('Button 1 pressed')}>
        Botón 1
      </button>
      <button onClick={pressButton}>
        Botón 2
      </button>
      <button onClick={() => pressButtonParams('Hello')}> {/* //! Si NO usamos una función anónima esta se lanzará automáticamente al renderizar, por lo que puede ocasionarnos problemas en un futuro  */}
        Botón 3
      </button>
      <input type="text"
        placeholder='Insert a text'    
        onFocus={() => console.log('Input focused')}
        onChange={(e) => console.log('Input changed:', e.target.value)}
        onCopy={() => console.log('Copied text from Input')}
        ref = { messageRef }
      />
      <button onClick={() => {
      // Send alert with text received from input managed by itself (child) to a function executed in it father
        send(messageRef.current.value)
      }}>
        Send Message
      </button>
      <div style={{marginTop: '20px'}}>
      <form onSubmit={ submitName }>        
        <input type="text" placeholder='New name' ref={ nameRef } />
        <button type="submit">Update name</button>
      </form>
      </div>
    </div>
  );
}

export default Child;
