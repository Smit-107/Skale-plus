import React, { useState } from "react";
import { Box, Button, Drawer, List, ListItem } from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Search",
    link: "/search",
  },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <React.Fragment>
      <header className=" sm:h-[78px] flex items-center sticky bg-white z-50 top-0 shadow-[0px_25px_20px_-20px_rgba(0,0,0,0.45)]  xl:px-16 lg:px-12 md:px-8 sm:px-5 px-2">
        <div className="h-[50px] flex items-center w-full justify-between capitalize">
          <div className="flex items-center">
            {/* Button to open the drawer on small screens */}
            <span
              onClick={handleDrawerOpen}
              className="lg:hidden cursor-pointer"
            >
              <ReorderIcon className="" />
            </span>

            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerClose}
              PaperProps={{ style: { width: 220 } }}
            >
              <List sx={{ mx: 1 }}>
                {navLinks.map((text, index) => (
                  <Link to={text.link} key={index}>
                    <ListItem
                      button
                      key={text}
                      sx={{ mb: 0.5, borderRadius: "10px", color: "black" }}
                      className="capitalize ,font-medium"
                      onClick={() => {
                        setDrawerOpen(false);
                      }}
                    >
                      {text.name}
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Drawer>
            <img
              src={require("../../images/logo.png")}
              alt=""
              srcSet=""
              className="sm:w-[157px] w-[120px] sm:h-[50px] h-[40px]"
            />
            {/* Navigation for medium and larger screens */}
            <nav className="ms-6 hidden lg:flex">
              <ul className="flex">
                {navLinks.map((item, index) => (
                  <Link to={item.link} key={index}>
                    <li className="mx-4 py-6 cursor-pointer font-medium">
                      {item.name}
                    </li>
                  </Link>
                ))}
                {/* <li className="mx-4 font-medium">home</li>
                <li className="mx-4 font-medium">about</li>
                <li className="mx-4 font-medium">pricing</li>
                <li className="mx-4 font-medium">blogs</li>
                <li className="mx-4 font-medium">events</li>
                <li className="mx-4 font-medium">alBot</li> */}
              </ul>
            </nav>
          </div>

          <Box>
            <Button
              variant="outlined"
              sx={{
                color: "black",
                outlineColor: "black",
                borderColor: "black",
                alignItems: "center",
                px: 2,
                pt: 1,
                fontSize: { sm: "15px", xs: "10px" },
                // width: { sm: "130px", xs: "69px" },
                // height: { sm: "40px", xs: "24px" },
                "&:hover": { borderColor: "gray" },
              }}
              className="font-medium"
            >
              log in
            </Button>
            <Button
              sx={{
                ml: { sm: 2.5, xs: 1 },
                backgroundColor: "black",
                color: "white",
                alignItems: "center",
                px: 2,
                pt: 1,
                fontSize: { sm: "15px", xs: "10px" },
                // width: { sm: "130px", xs: "69px" },
                // height: { sm: "40px", xs: "24px" },
                "&:hover": {
                  color: "black",
                  backgroundColor: "white",
                  borderColor: "black",
                },
              }}
              className="font-medium"
              variant="contained"
            >
              sign up
            </Button>
          </Box>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
