import "./Single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Grids from "../../components/grid/Grids";
// import List from "../../components/table/Table";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";




const Single = () => {

    const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Parallel Trend" value="1" />
                <Tab label="Population Balance" value="2" />
                <Tab label="Program Impact" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1"> 
            <div className="tops">
                <div className="left">
                    <Chart aspect={3 / 1} title="Parallel Trend 1" />
                </div>
                <div className="right">
                    <Chart aspect={3 / 1} title="Parallel Trend 2" />
                </div>
                </div>
            </TabPanel>
            <TabPanel value="2"><Grids/></TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
         
        </div>
        <div className="bottom">
            <Button variant="outlined" className="gotoOption">Go To Model Diagnostics</Button>
            <Button variant="outlined" className="downloadOption">Download Stage 1 Results</Button>
            <Button variant="contained" className="stage2Option">Run Stage 2 Model</Button>
        </div>
      </div>
    </div> 
  );
};

export default Single;