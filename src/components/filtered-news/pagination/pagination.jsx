import * as React from "react";
import PaginationRounded from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Pagination() { 
   const [count, setCount]= React.useState([]);
   React.useEffect(()=>{
      const options={
         method:'GET',
         headers:{}
      }

      fetch(`https://turtkul41.herokuapp.com/authority_news/count`, options)
      .then(response=>response.json())
      .then(data=>{setCount(data); console.log(data);})
   },[])
   return (
      <Stack spacing={2}>
         <PaginationRounded count={count.values} variant="outlined" shape="rounded" />
      </Stack>
   );
}
