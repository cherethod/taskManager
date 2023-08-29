import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { Home, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const getIcon = (icon) => {
  switch (icon) {
    case 'HOME':
      return (<Home />)    
    case 'TASKS':
      return (<Home />)    
    case 'SETTINGS':
      return (<Settings />)  
    default:
      break;
  }
}

const MenuListItems = ({ list }) => {

  const navigate = useNavigate();

  return (
   <List>
    {list.map(({ text, path, icon }, index) => 
    (
      <div>
        <ListItemButton key={ index } onClick={() => navigate(path)}>
          { getIcon(icon) }
        </ListItemButton>
        <ListItemText primary={ text } />
      </div>
    )
    )}
   </List>
  );
}

export default MenuListItems;
