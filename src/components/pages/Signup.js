import React, { useState } from 'react'
import { Button, TextField, Typography,Avatar } from '@mui/material'
import { Box } from '@mui/system'
import LoginIcon from '@mui/icons-material/Login';

const Signup = () => {
  const [user,setUser]=useState({
    name:'',
    email:'',
    password:''
});
const handleChange=(e)=>{
  setUser((prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value
}));
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
        console.log(user);
    };
  return (
    <div>
           <Avatar alt="Remy Sharp" src="./images/logo.png" /> 
       <form onSubmit={handleSubmit}>
        <Box
         display='flex'
          flexDirection={'column'}
           maxWidth={350} 
           alignItems={'center'} 
           margin={'auto'}
           marginTop={8}
           padding={5}
           borderRadius={5}
           boxShadow={'5px 5px 10px #ccc'}
           justifyContent={"center"}
           sx={{":hover":{
           boxShadow:'10px 10px 20px #ccc'
           }}}
           >
          
        <Typography variant='h4' textAlign={'center'} paddingBottom={3}>Create a new account</Typography>
        <TextField
        
        id="outlined-basic"
        label="Name"
        margin='normal'
        name='name'
        value={user.name}
        onChange={handleChange}
        />
        <TextField
        
        id="outlined-required"
        label="Email"
        margin='normal'
        name='email'
        value={user.email}
        onChange={handleChange}
        />
        <TextField
        required
        id="outlined-password-input"
        label="New Password"
        type="password"
        autoComplete="current-password"
        margin='normal'
        name='password'
        value={user.password}
        onChange={handleChange}
        />
        <Button type='submit' sx={{marginTop:3,borderRadius:3}} variant='contained' color='warning'>Signup</Button>
        <Button endIcon={<LoginIcon/>}sx={{marginTop:3,borderRadius:3}} href='/login'>Already have an account?</Button>
        </Box>
      </form>
    </div>
  )
}

export default Signup
