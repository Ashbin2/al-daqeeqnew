import React from 'react';

import PropTypes from 'prop-types';
import { Box,Typography,Tabs} from '@mui/material';
import Tab from '@mui/material/Tab';
import Pneumatic from './Pneumatic';
import Automation from './Automation';
import Electrical from './Electrical';
import Hydraulic from './Hydraulic ';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function Menus() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      
      <Box sx={{ width: '100%' ,paddingTop:10}}>
        <Box sx={{ borderBottom: 1, borderColor: 'dividerred',display:'flex'}}>
          
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  >
            
            <Tab label="PNEUMATIC PRODUCTS " {...a11yProps(0)} />
            
            <Tab label="AUTOMATION PRODUCTS " {...a11yProps(1)} />
            <Tab label="ELECTRICAL PRODUCTS " {...a11yProps(2)} />
            <Tab label="HYDROLIC PRODUCTS " {...a11yProps(3)} />
          </Tabs>
          
        </Box>
        <TabPanel value={value} index={0}>
        <Pneumatic/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Automation/>
        </TabPanel>
        <TabPanel value={value} index={2}>
         <Electrical/>
        </TabPanel>
        <TabPanel value={value} index={3}>
         <Hydraulic/>
        </TabPanel>
      </Box>
      
    );
  }
