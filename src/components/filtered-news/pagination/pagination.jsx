import * as React from "react";
import PaginationRounded from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { BASE_URL } from "api/config";
import { useNavigate} from "react-router-dom"

export default function Pagination() { 
   const navigate=useNavigate()
const [page, setPage] = React.useState('')

const paginate = (n) => {
    setPage(n)
    navigate({
        pathname: '/',
        search: '?page=' + n
      })
}
   const [count, setCount]= React.useState([]);
   React.useEffect(()=>{
      const options={
         method:'GET',
         headers:{}
      }

      fetch(`${BASE_URL}/authority_news/count`, options)
      .then(response=>response.json())
      .then(data=>{setCount(data); console.log('countData', data);})
   },[])

   return (
      <Stack spacing={2}>
         <PaginationRounded count={count['all']} variant="outlined" shape="rounded" />
      </Stack>
   );
}
