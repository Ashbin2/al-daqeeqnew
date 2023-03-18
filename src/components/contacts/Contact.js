import React from 'react'
import {Box, Grid,Typography,Button, TextField} from '@mui/material'
import contactus1 from '../image/contactus1.jpg'
import Card from 'react-bootstrap/Card'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Iframe from 'react-iframe';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Contact = () => {
  return (
    < >
    <Box   sx={{backgroundImage: `url(${contactus1})`,height:'auto',backgroundSize: "cover"}}>
      <Grid container height={600} display={'flex'} color={'white'}>
       <Grid item display={'flex'} sx={{alignItems:'center',justifyContent:'center '}} xs={12}  >
        <Typography variant='h3'fontWeight={'bold'} paddingTop={15} >CONTACT US</Typography>
       
       </Grid>
       <Grid item display={'flex'} sx={{justifyContent:'center'}}xs={12}>
       <p >Want to get in touch? we'd love to hear from you. Here's how you can reach us..</p>
       
       </Grid><Grid item display={'flex'} sx={{justifyContent:'right'}}xs={12} >
       <a
        href="https://wa.me/+918891323140"
       
        target="_blank"
        rel="noopener noreferrer"
       
      > 
      <Typography >WhatsApp Us..</Typography>
      < WhatsAppIcon color="success"sx={{ fontSize: 80 }} />
      </a>
     
       </Grid>

      </Grid>
      </Box>
      <Box  >
           <Grid container paddingLeft={10}>
            <Grid item xs={12} md={6} lg={3} sm={6}>
              <Card style={{ width: '18rem',height:'15rem'}}>
               <Card.Body>
               <Card.Title><MapsHomeWorkIcon/></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Head Office</Card.Subtitle>
              <Card.Text>
                <Typography fontWeight={'bold'}> AL DAQEEQ</Typography>
                
                 Industrial Plant Equipment & Spare Parts Trading LLC <br />
                City Avenue Building , next to Deira City Center,
                 Deria, Dubai , United Arab Emirates
               </Card.Text>
            
               </Card.Body>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3} sm={6}>
              <Card style={{ width: '18rem',height:'15rem' }}>
               <Card.Body>
               <Card.Title><ContactMailIcon/></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Mail Us</Card.Subtitle>
              <Card.Text>
              aldaqeeqsales@gmail.com
               </Card.Text>
              
               </Card.Body>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3} sm={6}>
              <Card style={{ width: '18rem',height:'15rem' }}>
               <Card.Body>
               <Card.Title><WifiCalling3Icon/></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Call Us</Card.Subtitle>
              <Card.Text>
              tel: +971-547421416
               </Card.Text>
                
               </Card.Body>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3} sm={6}>
              <Card style={{ width: '18rem',height:'15rem' }}>
               <Card.Body>
               <Card.Title><ConnectWithoutContactIcon/></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Socialise with us</Card.Subtitle>
              <Card.Text>
                 <TwitterIcon/><br />
                 <FacebookIcon/><br />
                 <InstagramIcon/><br />
                 <YouTubeIcon/>
               </Card.Text>
                
               </Card.Body>
                </Card>
            </Grid>
           </Grid>
           <Grid container>
            <Grid item display={'flex'} sx={{alignItems:'center',justifyContent:'center'}} xs={12} md={6} lg={6} sm={6}>
            <form >
        <Box
         display='flex'
          flexDirection={'column'}
           
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
          
        <Typography variant='h4' textAlign={'center'} paddingBottom={3}>MAIL US </Typography>
        <TextField
        required
        id="outlined-required"
        label="name"
        name='name'
        
       
        margin='normal'
        />
        <TextField
        id="outlined-password-input"
        label="Email-id here"
        type="Email"
       
        name='email'
      
        
        margin='normal'
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Message Type Here"
          multiline
          maxRows={4}
          margin='normal'
     
        />
        <Button type='submit' sx={{marginTop:3,borderRadius:3}} variant='contained' color='warning'>Send message</Button>
       
        </Box>
      </form>
            </Grid>
            <Grid item display={'flex'} sx={{alignItems:'center',justifyContent:'center'}} xs={12} md={6} lg={6} sm={6}>
            <Box
         display='flex'
          flexDirection={'column'}
           
           alignItems={'center'} 
           margin={'auto'}
           marginTop={5}
           padding={5}
           borderRadius={5}
           boxShadow={'5px 5px 10px #ccc'}
           justifyContent={"center"}
           sx={{":hover":{
           boxShadow:'10px 10px 20px #ccc'
           }}} >
              <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5378435983007!2d55.332395614815724!3d25.25248658387057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d20460019a9%3A0x149dc9480acb03a9!2sCity%20Avenue!5e0!3m2!1sen!2sin!4v1677915469828!5m2!1sen!2sin" 
        width="300px"
        height="400px"
        id=""
        className=""
        display="block"
        position="relative"/>
            </Box>
           </Grid>
           </Grid>
      </Box>
      </>
  )
}

export default Contact
