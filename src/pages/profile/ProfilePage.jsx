import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

const ProfilePage = ({ logged }) => {  

  const navigate = useNavigate();  

  if (!logged) {    
    return <Navigate to="/login" replace />
  }

  // useEffect(() => {
  //   if (!logged) {
  //     alert('You must be logged in. Redirecting to Home...');
  //     <Navigate to="/" replace />;
  //   }
  // }, [logged, navigate]);

  return (
    <div>
      <h1>Your Profile</h1>
      <button onClick={() => navigate('/tasks')}>Tasks</button>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default ProfilePage;
