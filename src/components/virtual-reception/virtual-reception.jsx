import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { a11yProps, TabPanel } from "./config";
import CheckStatus from "./check-status";
import MainForm from "./main-form";
import { VirtualReceptionWrapper } from "./virtual-reception.styles";

export default function VirtualReception() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <VirtualReceptionWrapper>
         <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
               <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
               >
                  <Tab label="Item One" {...a11yProps(0)} />
                  <Tab label="Item Two" {...a11yProps(1)} />
               </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
               <MainForm />
            </TabPanel>
            <TabPanel value={value} index={1}>
               <CheckStatus />
            </TabPanel>
         </Box>
      </VirtualReceptionWrapper>
   );
}
