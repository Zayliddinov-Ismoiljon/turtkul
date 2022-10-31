import * as React from "react";
import PaginationRounded from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { BASE_URL } from "api/config";
import { getActiveFilter } from "store/reducer-and-action/news/newsSlice";
import { useSelector } from "react-redux";

export default function Pagination({onPaginate}) {
	const activefilter = useSelector(getActiveFilter);


   const [count, setCount]= React.useState([]);
   React.useEffect(()=>{
      const options={
         method:'GET',
         headers:{}
      }

      fetch(`${BASE_URL}authority_news/count`, options)
      .then(response=>response.json())
      .then(data=>{setCount(data);})
   },[])

   

   return (
      <Stack spacing={2}>
         <PaginationRounded onChange={(e,pageindex)=>onPaginate(pageindex)} count={count[activefilter]} variant="outlined" shape="rounded" />
      </Stack>
   );
}
