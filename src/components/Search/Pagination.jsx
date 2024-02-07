import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} className=' mt-4'>
        <div className='border-t-2 '></div>
      <Typography>Page: {page}</Typography>
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        variant="outlined"
        color="primary"
        sx={{
            '& .MuiPaginationItem-page.Mui-selected': {
              backgroundColor: '#FFA500',
              color: 'white',
              borderColor: '#FFA500',
              '&:hover': {
                backgroundColor: '#FFA500',
                color: 'white',
                borderColor: '#FFA500',
              },
            },
          }}
      />
    </Stack>
  );
}
