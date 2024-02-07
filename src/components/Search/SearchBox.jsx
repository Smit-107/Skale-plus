import * as React from "react";

import { Grid } from "@mui/material";
import SearchLog from "./SearchBoxCompo.jsx/SearchLog";
import NotSelectCard from "./SearchBoxCompo.jsx/NotSelectCard";
import SimpleBar from "simplebar-react/dist";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "simplebar-react/dist/simplebar.min.css";
import Card from "./Card";
import AllCard from "./AllCard";
import PaginationControlled from "./Pagination";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1200,
      xl: 1920,
      // Adjust the values according to your needs
      myCustomBreakpoint: 1024, // Custom breakpoint for this component
    },
  },
});
const SearchBox = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid container>
        <Grid item lg={5.5} md={6} xs={12}>
          <SearchLog />
          <SimpleBar
            style={{ maxHeight: "600px", height: "100%", width: "100%" }}
          >
            <div className="sm:pe-2 sm:py-1">
              <AllCard />
            </div>
          </SimpleBar>
          <PaginationControlled />
        </Grid>

        <Grid item lg={6.5} md={6} xs={0}>
          <NotSelectCard />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SearchBox;
