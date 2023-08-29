import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate();
  // const history = useHistory();
  const navigateProps = (path) => {
    navigate(path + '?online=true', {//Query params
      state: {
        online: true
      }
    })
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/profile')}>Go to profile</button>
      <button onClick={() => navigateProps('/online-state')}>Go to State Page</button>
    </div>
  );
}

export default HomePage;
