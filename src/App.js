// import logo from './logo.svg';
import './App.css';
// import Father from './components/container/father';
import TaskListComponent from './components/container/task_list';
import AsyncExample from './components/pure/AsyncExample';
import AxiosExample from './components/pure/axiosExample';
import FetchExample from './components/pure/FetchExample';
import ObservableExample from './components/pure/ObservableExample';
import RegisterFormik from './components/pure/forms/RegisterFormik';
import LoginFormik from './components/pure/forms/loginFormik';
import AxiosCRUDExample from './components/pure/AxiosCRUDExample';
// import OptionalRender from './components/pure/optionalRender';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';
// import GreetingStyled from './components/pure/greetingStyled';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* //* Todo lo que dentro de Ejemplo 4 es tratado como props.children (en este caso el h3) */}
        {/* <Ejemplo4 name='Javi'>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}

        {/* Ejemplo de renderizado condicional */}
        {/* <OptionalRender></OptionalRender> */}

        {/* <GreetingStyled name='Javi'></GreetingStyled> */}
        {/* Gestión de eventos */}
        {/* <Father></Father> */}
      {/* </header> */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}

      {/* Ejemplos de procesos asíncronos */}
      {/* <AsyncExample></AsyncExample> */}
      {/* <ObservableExample /> */}
      {/* <FetchExample /> */}
      <AxiosCRUDExample />

      {/* //! PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}

    </div>
  );
}

export default App;
