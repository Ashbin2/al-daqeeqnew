import { Grid ,Typography } from '@mui/material'

import React from 'react'

const Welcome = () => {
  return (
    <>
      <Grid container >
        <Grid item   xs={12} ms={12} md={12} lg={12} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Typography variant='h4' sx={{color:'black',fontWeight:'bold'}} textAlign='center'>Welcome to AL DAQEEQ</Typography>
        </Grid>
        <Grid item   xs={12} ms={12} md={12} lg={12} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Typography variant='h4' sx={{color:'red',fontWeight:'bold'}}textAlign='center'>Industrial Plant Equipment & spare Parts Trading LLC</Typography>
        </Grid>
        <Grid item   xs={12} ms={12} md={12} lg={12} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Typography  sx={{color:'black',fontSize:15}} textAlign='center'>We are proud to present ourselves as the distributors of high-quality industrial equipment parts and services.<br></br> We have all range of products in PNEUMATIC | HYDRAULIC | ELECTRICAL |AUTOMOTION PRODUCTS-FESTO,METALWORK,MINDMAN,SHAKO,PARKER OMRON,AUTONICS,SICK,BANNER,DELTA.</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Welcome
