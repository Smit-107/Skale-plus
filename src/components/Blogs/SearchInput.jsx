import React, { useState } from 'react';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ searchKeyWord, setSearchKeyWord, setPage }) => {
  const [isFocused, setIsFocused] = useState(false);

  // State to store the current value of the input
  const [currentValue, setCurrentValue] = useState(searchKeyWord);

  // State to store the timeout ID
  const [timeoutId, setTimeoutId] = useState(null);

  // Function to handle input change
  const handleChange = (value) => {
    setCurrentValue(value);

    // Clear the previous timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout to update the state after a delay (e.g., 500ms)
    const newTimeoutId = setTimeout(() => {
      setSearchKeyWord(value);
      setPage(1);
    }, 500);

    // Save the timeout ID
    setTimeoutId(newTimeoutId);
  };

  return (
    <OutlinedInput
      className={`!rounded-[19px] !h-[45px] !text-[#000] !font-Montserrat !text-[14px] !not-italic !font-medium !leading-[130%] !tracking-[-0.2px] ${
        isFocused
          ? '!w-full !transition-all !duration-300 !ease-in-out'
          : 'lg:!w-2/3 !w-full !transition-all !duration-300 !ease-in-out'
      }`}
      placeholder="search topic or key words"
      sx={{
        '& .MuiSvgIcon-root': {
          fontSize: 24
        },
        '&:hover fieldset': {
          borderColor: '#ffa500 !important'
        },
        '&.Mui-focused fieldset': {
          borderColor: '#ffa500 !important'
        }
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      value={currentValue}
      onChange={(e) => handleChange(e.target.value)}
      endAdornment={
        <InputAdornment position="end">
          {searchKeyWord ? (
            <IconButton edge="end" onClick={() => handleChange('')}>
              <CloseIcon className="!text-[#FFA500] !cursor-pointer" />
            </IconButton>
          ) : (
            <SearchIcon className="!text-[#FFA500] !cursor-pointer" />
          )}
        </InputAdornment>
      }
    />
  );
};

export default SearchInput;
