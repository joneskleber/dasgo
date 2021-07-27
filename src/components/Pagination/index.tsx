import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })  

  return (
    <Stack
      direction={ ["column", "row"] }
      mt ="8"
      spacing="6"
      justify="space-between"
      align="center"     
   
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row"  spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2}  />
        <PaginationItem number={3}  />
        <PaginationItem number={4}  />
        <PaginationItem number={5}  />
        <PaginationItem number={6}  />

        { isWideVersion && (
          <>  
          <PaginationItem number={7}  /> 
          <PaginationItem number={8}  />
          <PaginationItem number={9}  /> 
          <PaginationItem number={10}  /> 
          </>  
        )}

      </Stack>


    </Stack>
  );
}