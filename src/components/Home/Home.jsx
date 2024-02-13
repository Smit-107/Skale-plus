import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeaderSection from "../LandingPage/HeaderSection";
import Services from "../LandingPage/Services";
import StartUpResourceSection from "../LandingPage/StartUpResourceSection";
import EventSection from "../LandingPage/EventSection";
import TrendingSection from "../LandingPage/TrendingSection";
import PartnersSection from "../LandingPage/PartnersSection";

export default function Home(props) {
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
      <HeaderSection />
      <Services />
      <StartUpResourceSection />
      <TrendingSection />
      <EventSection />
    </ThemeProvider>
  );
}
