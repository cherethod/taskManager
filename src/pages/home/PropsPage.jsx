import React from 'react';
import { useLocation } from 'react-router-dom';

const PropsPage = () => {
  const location = useLocation();
  const onlineState = location.state && location.state.online;

  console.log('Location State:',location.state.online)
  console.log('Query Params',location.search)
  return (
    <div>
      <h1>State: {onlineState ? 'Online' : 'Offline'}</h1>
    </div>
  );
}

export default PropsPage;
