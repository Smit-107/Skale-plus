import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import gif from "../../images/Game-animation.gif";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const HeaderSection = () => {
  const customTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1024,
        xl: 1920,
        // Adjust the values according to your needs
        myCustomBreakpoint: 1024, // Custom breakpoint for this component
      },
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container xs={12} item className="lg:h-[calc(100vh-78px)] ">
          <Grid item lg={8} xs={12} className="lg:flex lg:items-center ">
            <div className="text-start  lg:mt-0 md:mt-6 mt-4">
              <div className="w-full ">
                <p className="text-[#000] ml-[30px] sm:font-musticaPro text-[36px] sm:text-[75px] md:text-[96px] not-italic leading-tight sm:leading-none font-bold ">
                  REDEFINING
                </p>
                <p className="text-[#000] ml-[30px] sm:font-musticaPro text-[36px] sm:text-[75px] md:text-[96px] not-italic leading-tight sm:leading-none font-bold ">
                  BOUNDARIES.
                </p>

                <div className="h-[7px] sm:h-[4px] bg-[#ffa500] lg:w-[75%] mt-3" />
                <p className="text-[#000] ml-[30px] mr-[10px] sm:mr-0 font-Montserrat sm:font-Bahnschrift text-[16px] sm:text-[34px] not-italic sm:leading-none font-normal lg:w-[65%] mt-[13px] sm:mt-[27px]">
                  Uncover essential startup resources and forge global
                  connections with no limits.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} className="h-full lg:w-full !w-0 lg:flex hidden">
            <img src={gif} alt="" srcSet="" className=" h-full w-full" />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default HeaderSection;
