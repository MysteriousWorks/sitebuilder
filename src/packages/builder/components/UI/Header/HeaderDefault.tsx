import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {ImageProps} from 'next/image';
import {MenuProps} from '@mui/joy';
import {domElement} from '../../../state';


type MenuItem = {
  text: string,
  href?: string,
  action?: (text: string) => void,
  subMenu?: MenuItem[],
} & MenuProps;
type Menu = MenuItem[];

type LogoProps = ImageProps;
type HeaderProps = React.ComponentProps<any>

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const HeaderDefault: React.FC<HeaderProps> = (props) => {
  return (
    <AppBar position="static" {...props}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          MUI
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  )
}

export const HeaderDefaultJson: domElement = {
  id: 'DH-AppBar',
  type: 'AppBar',
  props: {
    position: 'static'
  },
  children: [
    {
      id: 'DH-AppBar-Toolbar',
      type: 'Toolbar',
      props: {},
      children: [
        {
          id: 'DH-AppBar-Toolbar-IconButton',
          type: 'IconButton',
          props: {
            size: "large",
            edge: "start",
            color: "inherit",
            'aria-label': "open drawer",
            sx: { mr: 2 },
          },
          children: [
            {
              id: 'DH-AppBar-Toolbar-IconButton-MenuIcon',
              type: 'MenuIcon',
            }
          ]
        },
        {
          id: 'DH-AppBar-Toolbar-Typography',
          type: 'Typography',
          props: {
            variant: "h6",
            noWrap: true,
            component: "div",
            sx: { flexGrow: 1, display: { xs: 'none', sm: 'block' } },
          },
          children: 'MUI'
        },
        {
          id: 'DH-AppBar-Toolbar-Search',
          type: 'Search',
          props: {},
          children: [
            {
              id: 'DH-AppBar-Toolbar-SearchIconWrapper',
              type: 'SearchIconWrapper',
              props: {},
              children: [
                {
                  id: 'DH-AppBar-Toolbar-SearchIconWrapper-SearchIcon',
                  type: 'SearchIcon',
                }
              ]
            },
            {
              id: 'DH-AppBar-Toolbar-StyledInputBase',
              type: 'StyledInputBase',
              props: {
                placeholder: "Search…",
                inputProps: { 'aria-label': 'search' },
                'aria-label': 'search'
              },
            }
          ]
        }
      ]
    }
  ]
}

HeaderDefault.displayName = 'HeaderDefault';

export default HeaderDefault;