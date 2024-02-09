import {
  Checkbox,
  Divider,
  FormControlLabel,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import SimpleBar from "simplebar-react/dist";

import "simplebar-react/dist/simplebar.min.css";

const CustomDropDown = ({ title, imagePath, options }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuRef = useRef(null);

  const [checkedItems, setCheckedItems] = useState(
    new Array(options.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !checkedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <div>
      <div
        key={title}
        className="py-1.5 cursor-pointer px-3 leading-6 items-center bg-[#F3F2F2] w-max flex  gap-2 rounded-lg border border-[#3A3A3A]"
        onClick={handleClick}
      >
        <img
          src={imagePath}
          className="h-[16px] font-normal"
          alt=""
          srcSet=""
        />
        <span className="font-medium ">{title}</span>

        <div className="flex items-center justify-center">
          {menuAnchorEl ? (
            <FaCaretDown className="text-xs text-gray-800" />
          ) : (
            <FaCaretUp />
          )}
        </div>
      </div>
      {/* <div  className="w-[150px]">


         
      </div> */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }} // Open below the div
        transformOrigin={{ vertical: "top", horizontal: "left" }} // Align with the top of the div
        className="mt-0.5 custom w-full "
        sx={{
          padding: "20px !important",
          overflow: "hidden !important",
          borderRadius: "20px !important",
        }}
      >
        <div className="text-lg font-bold mx-1.5">{title}</div>
        <Divider className="!my-2  !mx-1" />
        {options.map((val, ind) => (
          <MenuItem
            key={ind}
            className="!text-sm !font-medium !px-3 !py-0.5 !my-1 !w-full"
            onClick={() => handleCheckboxChange(ind)}
            // onClick={handleClose}

            
          > <div onClick={(e) => e.stopPropagation()}>{/* Stop propagation to avoid MenuItem closing */}
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedItems[ind]}
                color="primary"
                className="!p-1.5 !w-auto"
                onClick={() =>  handleCheckboxChange(ind)} // Stop propagation to avoid MenuItem closing
              />
            }
            label={val}
            sx={{ "& .MuiTypography-root": { fontSize: "0.875rem" } }}
          />
        </div>
            {/* <FormControlLabel
            //  onClick={() => handleCheckboxChange(ind)}

              control={
                <Checkbox
                  checked={checkedItems[ind]}
                  color="primary"
                  className="!p-1.5 !w-auto"
                  onClick={() => handleCheckboxChange(ind)} // Attach onClick to Checkbox
                />
              }
              label={val}
              sx={{ "& .MuiTypography-root": { fontSize: "0.875rem" } }}
            /> */}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CustomDropDown;
