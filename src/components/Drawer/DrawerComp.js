import { Drawer, IconButton, List,  ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LoginIcon from '@mui/icons-material/Login';

const DrawerComp = () => {
    const [open, setOpen]=useState(false)
  return (
    <>
     <Drawer PaperProps={{
     sx:{ my: 2, color: '#514A9D', display: 'block',height:300 ,marginLeft:1,borderRadius:3,marginTop:9,background:'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',fontWeight:'bold'}
     }} anchor='left' open={open} onClose={()=>setOpen(false)}>
     <List>
     <ListItemButton  href="/">
        <ListItemIcon>
          < HomeIcon />
        
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      
      <ListItemButton  href="/about">
        <ListItemIcon>
          <PeopleIcon />
         
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItemButton>
      <ListItemButton  href="/products">
        <ListItemIcon>
          <ProductionQuantityLimitsIcon />
        </ListItemIcon>
        <ListItemText primary="Product" />
      </ListItemButton>
     
      <ListItemButton  href="/contact">
        <ListItemIcon>
          < ContactPhoneIcon />
        </ListItemIcon>
        <ListItemText primary="Contact Us" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LoginIcon />
        </ListItemIcon>
        <ListItemText primary="Login" />
      </ListItemButton>
     </List></Drawer> 
     <IconButton sx={{marginLeft:'auto',color:'white'}} onClick={()=>setOpen(!open)}>
     <MenuRoundedIcon/> 
     </IconButton>
    </>
  )
}

export default DrawerComp
