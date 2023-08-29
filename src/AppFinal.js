import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Navigate } from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import DashBoard from "./pages/dashboard/DashBoard";
import LoginPage from "./pages/auth/LoginPage";


function AppFinal() {
// TODO -> Add function to send a databse request if logged-in with correct credentials and set in sessionStorage
  let loggedIn = true;

  return (
    <div>
        <Router>
        {/* Route 'Switch' */}
         <Routes>
         {/* Redirections to 'protect' our routes */}
          <Route path="/"
            element={
                <MainRedirect loggedIn={loggedIn} />
            } />          
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/dashboard" element={
             loggedIn ? (
              <DashBoard /> 
             ) : (
              <MainRedirect /> //? Here, I need to find a better way to perform this redirection, with only one conditional check being enough
             )
             } />
          <Route path="*" element={ <NotFoundPage /> } />
         </Routes>
      </Router>
    </div>
  );
}
function MainRedirect({ loggedIn }) {
  if (loggedIn) {
    return <Navigate to="/dashboard" replace />;
  } else {
    return <Navigate to="/login" replace />;
  }
}
export default AppFinal;
