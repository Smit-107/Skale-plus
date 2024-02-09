import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <div className="border-t-2 mt-4"></div>
      <div className="flex justify-center" >
        <Stack spacing={2} className=" mt-4 ">
          <Typography>Page: {page}</Typography>
          <Pagination
            count={10}
            page={page}
            onChange={handleChange}
            variant="outlined"
            color="primary"
            
            sx={{
              "& .MuiPaginationItem-page.Mui-selected": {
                backgroundColor: "#FFA500",
                color: "white",
                borderColor: "#FFA500", 

                "&:hover": {
                  backgroundColor: "#FFA500",
                  color: "white",
                  borderColor: "#FFA500",

                },
              },
              "@media (max-width: 375px)": {
                "& .MuiPaginationItem-page": {
                  fontSize: "14px",
                  minWidth:"25px",
                  height:"25px"
                },
                "& .MuiPaginationItem-root":{
                  fontSize: "14px",
                  minWidth:"25px",
                  height:"25px"
                }
              },
            }}
          />
        </Stack>
      </div>
    </div>
  );
}
