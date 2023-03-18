import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Grid,CardActions,Button } from '@mui/material';
const Cardimg = () => {
  return (
    <Grid container spacing={2} padding={5}>
    <Grid item xs={12} md={6} lg={3} sm={6} 
    boxShadow={'5px 5px 10px #ccc'}
    sx={{":hover":{
      boxShadow:'20px 20px 20px #12c2eb'
        }}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/pne-3.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          PNEUMATIC SYSTEMS
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Pneumatic systems used in industry are commonly powered by compressed air or compressed inert gases..
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href='/products'>
          Know More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} md={6} lg={3} sm={6} 
    boxShadow={'5px 5px 10px #ccc'}
    sx={{":hover":{
      boxShadow:'20px 20px 20px #12c2eb',
        }}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/pne-16.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          HYDRAULIC HOSE &SEAL
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Our range of Hydraulic Hose Pipes is being used for Hydraulics, Air, Gasoline, Crude, Fuel and Lubricating Oils etc.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  href='/products'>
          Know More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} md={6} lg={3} sm={6} boxShadow={'5px 5px 10px #ccc'}
    sx={{":hover":{
      boxShadow:'20px 20px 20px #12c2eb'
        }}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/pne-14.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          ELECTRICAL PRODUCTS
          </Typography>
          <Typography variant="body2" color="text.secondary">
          offers a wide range of Electric Contactors, which are highly demanded in the market due to precise and efficient functions.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  href='/products'>
          Know More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} md={6} lg={3} sm={6} 
    boxShadow={'5px 5px 10px #ccc'}
    sx={{":hover":{
      boxShadow:'20px 20px 20px #12c2eb'
        }}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/images/pne-7.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          AUTOMATION PRODUCTS
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We provides many varieties of Sensor, including diffuse-reflective, through-beam, retro-reflective, and distance-settable Sensors.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  href='/products'>
          Know More
        </Button>
      </CardActions>
    </Card>
    </Grid>
</Grid>
  );
}


  
  


export default Cardimg
