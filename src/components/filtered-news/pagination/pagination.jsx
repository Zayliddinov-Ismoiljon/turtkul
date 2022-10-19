import * as React from "react";
import PaginationRounded from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { BASE_URL } from "api/config";

export default function Pagination() { 
   const [count, setCount]= React.useState([]);
   React.useEffect(()=>{
      const options={
         method:'GET',
         headers:{}
      }

      fetch(`${BASE_URL}/authority_news/count`, options)
      .then(response=>response.json())
      .then(data=>{setCount(data);})
   },[])
   return (
      <Stack spacing={2}>
         <PaginationRounded count={count?.values} variant="outlined" shape="rounded" />
      </Stack>
   );
}
