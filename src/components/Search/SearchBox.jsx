import * as React from "react";

import { Grid } from "@mui/material";
import SearchLog from "./SearchBoxCompo/SearchLog.jsx";
import SimpleBar from "simplebar-react/dist";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "simplebar-react/dist/simplebar.min.css";
import AllCard from "./SearchBoxCompo/AllCard.jsx";
import PaginationControlled from "./SearchBoxCompo/Pagination.jsx";
import NotSelectCard from "./SearchBoxCompo/NotSelectCard.jsx";
import { createContext } from "react";

export const SearchContext = createContext();


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
  const [searchFilter, setSearchFilter] = React.useState  ("");
  return (
    <ThemeProvider theme={customTheme}>
      <Grid container>
        <Grid item lg={5.5} md={6} xs={12}>
          <SearchLog setSearchFilter={setSearchFilter} />
          <SimpleBar
            style={{ maxHeight: "600px", height: "auto", width: "100%" }}
          >
            <div className="sm:pe-2 sm:py-1">
            <SearchContext.Provider value={searchFilter}>
              <AllCard />
            </SearchContext.Provider>

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
