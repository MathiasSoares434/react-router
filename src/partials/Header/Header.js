import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useStyles from './Header.style.js';
import { useState } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min.js';

import HomeIcon from '@mui/icons-material/Home';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


const Header= () =>{
  const history= useHistory()  
  const classes = useStyles()
  const [menuOpen, setMenuOpen]= useState(false)
  const handleToogleMenu= () =>{
      setMenuOpen(!menuOpen)
  }
    
  const handleMenuClick= route =>{
    handleToogleMenu()
    history.push(route)
  }
    return(
        <>
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="secondary"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={()=>{handleToogleMenu()}}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                My App
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Drawer open={menuOpen} onClose={()=> handleToogleMenu()}>
          <List>
            <ListItem button onClick={()=> handleMenuClick('/')}>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem button onClick={()=> handleMenuClick('/customers')}>
              <ListItemIcon>
                <PersonAddAltIcon/>
                </ListItemIcon>
              <ListItemText>Cadastro de clientes</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </>
    )
}

export default Header