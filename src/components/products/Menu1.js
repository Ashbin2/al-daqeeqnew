import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Automation from './Automation';
import Electrical from './Electrical';
import Pneumatic from './Pneumatic';
import Hydraulic from  './Hydraulic '
import { Box } from '@mui/material';
const Menu1 = () => {
    return (
        <Box sx={{ paddingTop:10,}}>
        <Tabs
        style={{alignItems:'center'}}
          defaultActiveKey="pneumatic"
          id="fill-tab-example"
          className="mb-3"
          fill
         
        >
          <Tab eventKey="pneumatic" title="Pneumatic Products">
            <Pneumatic/>
          </Tab>
          <Tab eventKey="electrical" title="Electrical  Products">
           <Electrical/>
          </Tab>
          <Tab eventKey="automation" title="Automation  Products">
          <Automation/>
          </Tab>
          <Tab eventKey="hydraulic" title="Hydraulic  Products" >
          <Hydraulic/>
          </Tab>
        </Tabs></Box>
      );
}

export default Menu1;
