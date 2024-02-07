import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import styled from "styled-components";
import ListAll from "../../images/newww/Vectorsort.png";
import Account from "../../images/newww/fi-rr-filter1.png";
import Law from "../../images/newww/fi-sr-globe3.png";
import Vectorgame from "../../images/tab-icon/Vectorgame.png";
import Office from "../../images/tab-icon/fi-rr-buildingoffice.png";
import { SwitchProps } from "@mui/material/Switch";
import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const Filter = () => {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const tab = [
    {
      tabName: "View All Filters",
      icon: Account,
    },
    {
      tabName: "Sort By",
      icon: ListAll,
    },
    {
      tabName: "Languages",
      icon: Law,
    },
    {
      tabName: "Country: South Africa",
      icon: Vectorgame,
    },
  ];
  const [menuAnchorEl, setMenuAnchorEl] = useState({});

  // Function to handle opening the menu for a specific tab
  const handleMenuOpen = (event, ind) => {
    setMenuAnchorEl((prev) => ({ ...prev, [ind]: event.currentTarget }));
  };

  // Function to handle closing the menu for a specific tab
  const handleMenuClose = (ind) => {
    setMenuAnchorEl((prev) => ({ ...prev, [ind]: null }));
  };
  return (
    <div>
      <div className="font-bold sm:text-2xl text-lg mb-3">
        Filter options for <span className="text-[#FFA500]">“All”</span>{" "}
        services
      </div>

      <div className="flex flex-wrap justify-between ">
        <div className="overflow-x-auto scrollbar space-x-2.5 text-nowrap">
          {tab.map((val, ind) => (
            <div
              key={ind}
              className="py-1.5 px-3 leading-6 items-center bg-[#F3F2F2] inline-flex gap-2 rounded-lg border border-[#3A3A3A]"
              onClick={(event) => handleMenuOpen(event, ind)}
            >
              <img
                src={val.icon}
                className="h-[16px] font-normal"
                alt=""
                srcSet=""
              />
              <span className="font-medium ">{val.tabName}</span>

              <div className="flex items-center justify-center">
                {menuAnchorEl ? (
                  <FaCaretDown className="text-xs text-gray-800" />
                ) : (
                  <FaCaretUp />
                )}
              </div>

              <Menu
                anchorEl={menuAnchorEl[ind]}
                open={Boolean(menuAnchorEl[ind])}
                onClose={() => handleMenuClose(ind)}
              >
                {/* Add your menu items here */}
                <MenuItem>
                  <ListItemIcon>
                    {/* Add icon for menu item */}
                    {/* For example, you can use MoreVert icon */}
                    <MoreVert />
                  </ListItemIcon>
                  <ListItemText primary="Menu Item 1" />
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    {/* Another menu item */}
                    <MoreVert />
                  </ListItemIcon>
                  <ListItemText primary="Menu Item 2" />
                </MenuItem>
              </Menu>
            </div>
          ))}
        </div>

        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={state.gilad}
                onChange={handleChange}
                name="gilad"
              />
            }
            label="Show listings with discounts"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Filter;
