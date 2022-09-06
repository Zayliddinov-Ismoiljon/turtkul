import * as React from "react";
import PaginationRounded from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Pagination() {
   return (
      <Stack spacing={2}>
         <PaginationRounded count={10} variant="outlined" shape="rounded" />
      </Stack>
   );
}
