import { styled } from '@mui/material/styles';
import { Box, Tabs } from '@mui/material';
import PropTypes from 'prop-types';

export const CustomTab = styled(Tabs)(({ theme }) => ({
  [`& .MuiTab-root`]: {
    textTransform: 'none',
    color: '#000',
    fontWeight: 400,
    fontSize: '18px',

    [theme.breakpoints.down('lg')]: {
      padding: '10px'
    },
    [theme.breakpoints.down('md')]: {
      padding: '6px',
      fontSize: '16px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px'
    }
  },
  [`& .MuiTab-root:hover`]: {
    color: '#00CDFF !important'
  },
  [`& .Mui-selected:hover`]: {
    color: '#00CDFF !important'
  },
  [`& .Mui-selected`]: {
    fontWeight: 400,
    fontSize: '18px',
    color: '#00CDFF !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px'
    }
  },
  [`& .MuiTabs-indicator`]: {
    backgroundColor: '#00CDFF !important',
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.down('sm')]: {}
  }
}));

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: props.padding }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}
