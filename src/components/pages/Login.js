import { Button, TextField, Typography,Avatar } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import GroupIcon from '@mui/icons-material/Group';

const Login = () => {
    const [user,setUser]=useState({
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
    <div >
      <Avatar alt="Remy Sharp" src="./images/logo.png" />  
      <form onSubmit={handleSubmit}>
        <Box
         display='flex'
          flexDirection={'column'}
           maxWidth={350} 
           alignItems={'center'} 
           margin={'auto'}
           marginTop={5}
           padding={5}
           borderRadius={5}
           boxShadow={'5px 5px 10px #ccc'}
           justifyContent={"center"}
           sx={{":hover":{
           boxShadow:'10px 10px 20px #ccc'
           }}}
           >
          
        <Typography variant='h2' textAlign={'center'} paddingBottom={3}>Login</Typography>
        <TextField
        required
        id="outlined-required"
        label="Email"
        name='email'
        value={user.email}
        onChange={handleChange}
        margin='normal'
        />
        <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        onChange={handleChange}
        name='password'
        value={user.password}
        autoComplete="current-password"
        margin='normal'
        />
        <Button type='submit' sx={{marginTop:3,borderRadius:3}} variant='contained' color='warning'>Login</Button>
        <Button endIcon={<GroupIcon/>} sx={{marginTop:3,borderRadius:3}} href='/signup'>Forgotten account? signup here</Button>
        </Box>
      </form>
    </div>
  )
}

export default Login
