import { Grid} from '@mui/material'
import { Card,Button } from 'antd';
import React from 'react'
const { Meta } = Card;

const Hydraulic  = () => {
    return (
        <Grid container spacing={2} padding={5} paddingLeft={8}
        sx={{background: 'linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%);'}}>
         <Grid item xs={12} md={6} lg={3} sm={6}>
         <Card 
         hoverable
          style={{
           width: 240,
           textAlign:'center',
         boxShadow:'5px 5px 10px #eca0ff'
           }}
         cover={<img alt="example" src="./images/pne-16.jpg" />} >
         <Meta title=" Hydraulic Seal" style={{paddingLeft:5}} />
         <Button type="primary" style={{marginTop:8}} href="/contact"  >
                 BUY NOW 
               </Button>
       </Card>
         </Grid>
         <Grid item xs={12} md={6} lg={3} sm={6}>
         <Card
         hoverable
          style={{
           width: 240,
           textAlign:'center'
           }}
         cover={<img alt="example" src="./images/pne-17.jpg" />} >
         <Meta title="Hydraulic Hose" />
         <Button type="primary" style={{marginTop:8}} href="/contact"  >
                 BUY NOW
               </Button>
       </Card>
         </Grid>
         <Grid item xs={12} md={6} lg={3} sm={6}>
         <Card
         hoverable
          style={{
           width: 240,
           textAlign:'center'
           }}
           cover={<img alt="example" src="./images/coming.png" />} >
           <Meta title="Comingsoon"/>
         <Button type="primary" style={{marginTop:8}} href="/contact"  >
                 BUY NOW
               </Button>
       </Card>
         </Grid>
         <Grid item xs={12} md={6} lg={3} sm={6}>
         <Card
         hoverable
          style={{
           width: 240,
           textAlign:'center'
           }}
           cover={<img alt="example" src="./images/coming.png" />} >
           <Meta title="Comingsoon"/>
         <Button type="primary" style={{marginTop:8}} href="/contact" >
                 BUY NOW
               </Button>
       </Card>
         </Grid>
         <Grid item xs={12} md={6} lg={3} sm={6}>
         <Card
         hoverable
          style={{
           width: 240,
           textAlign:'center'
           }}
           cover={<img alt="example" src="./images/coming.png" />} >
           <Meta title="Comingsoon"/>
         <Button type="primary" style={{marginTop:8}} href="/contact"  >
                 BUY NOW
               </Button>
       </Card>
         </Grid>
         <Grid item xs={12} md={6} lg={3} sm={6} >
         <Card
         hoverable
          style={{
           width: 240,
           textAlign:'center'
           
           }}
           cover={<img alt="example" src="./images/coming.png" />} >
           <Meta title="Comingsoon"/>
         <Button type="primary" style={{marginTop:8}} href="/contact" >
                 BUY NOW
               </Button>
               
       </Card>
       
         </Grid>
         <Grid item xs={12} md={6} lg={3} sm={6}>
         <Card
         hoverable
          style={{
           width: 240,
           textAlign:'center'
           }}
           cover={<img alt="example" src="./images/coming.png" />} >
           <Meta title="Comingsoon"/>
         <Button type="primary" style={{marginTop:8}} href="/contact"  >
                 BUY NOW
               </Button>
       </Card>
         </Grid>
         <Grid item xs={12} md={6} lg={3} sm={6}>
         <Card
         hoverable
          style={{
           width: 240,
           textAlign:'center'
           }}
           cover={<img alt="example" src="./images/coming.png" />} >
           <Meta title="Comingsoon"/>
         <Button type="primary" style={{marginTop:8}} href="/contact" >
                 BUY NOW
               </Button>
       </Card>
         </Grid>
        </Grid>
       )
        }
export default Hydraulic 
