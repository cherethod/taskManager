import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
// import LoginFormik from "./components/pure/forms/loginFormik";
import RegisterFormik from "./components/pure/forms/RegisterFormik";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TasksPages from './pages/tasks/TasksPages';
// import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import TaskDetailComponent from './components/container/TaskDetailComponent';
import PropsPage from './pages/home/PropsPage';


function AppRoutingOne() {

  let logged = false;
  // const [tasksList, setTaskList] = useState([]);
  const tasksList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task'
    },
    {
      id: 3,
      name: 'Task 3',
      description: 'My thrid task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User logged?', logged)
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to={'/'}>|| HOME |</Link>
            {/* //TODO Add function or component to LOGOUT and return redirect to HOME */}
          {
            !logged ? (
              <Link to={'/login'}>| LOGIN |</Link> 
            ) : (
              null
            )
          }
          {/* <Link to={'/online-state'}>| STATE |</Link> */}
          {
            !logged ? (
              <Link to={'/register'}>| SING IN |</Link>
            ) : (
              null
            )
          }
          <Link to={'/task/1'}>| TASK 1 |</Link>
          <Link to={'/task/2'}>| TASK 2 |</Link>
          <Link to={'/task/3'}>| TASK 3 |</Link>
          
          <Link to={'/about'}>| ABOUT |</Link>
          <Link to={'/faqs'}>| FAQs ||</Link>
        </aside>
        <main>
        
          <Routes>
            <Route element={ <HomePage /> } path="/" />
            <Route element={ <PropsPage /> } path="/online-state" />
            <Route element={ <ProfilePage /> }  path="/profile" logged={logged} />
            <Route element={ <TasksPages /> } path="/tasks" />
            <Route 
                exact 
                path="/task/:id"
                element={<TaskDetailComponent tasks={tasksList} /> }
            >

            </Route>
            <Route element={ <LoginPage /> } path="/login" />
            <Route element={ <RegisterFormik /> } path="/register" />
            {/* //! DOESN'T WORKS IN 6.0+ */}
            { /*  <Route element={ <AboutPage /> } path="/(about|faqs)"/>
            // <Route element={ <AboutPage /> } path={["/about","/faqs"]}/> */}

            {/* //TODO: THIS IS A TEMPORAL FIX TRY TO FIND BETTER PRACTICES */}
            <Route element={ <AboutPage /> } path="/about"/>
            <Route element={ <AboutPage /> } path="/faqs"/>


            {/* //* Best Practice -> Let to the end the - 404 Page not found !! */}
            <Route element={ <NotFoundPage /> } path="*" />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
