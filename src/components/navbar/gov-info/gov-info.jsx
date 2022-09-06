import { Divider } from "@mui/material";
import React from "react";
import {
   GovLocation,
   TestVersion,
   Wrapper,
   WebsiteInfo,
   Website,
} from "./gov-info-styles";

export const GovInfo = () => {
   return (
      <Wrapper>
         <Divider>
            <WebsiteInfo>
               <TestVersion>Test version</TestVersion>
               <Website>Toshkent shahar hokimligi rasmiy web-sayti</Website>
            </WebsiteInfo>
            <GovLocation>

            </GovLocation>
         </Divider>
      </Wrapper>
   );
};
