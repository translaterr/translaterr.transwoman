import React, { useContext } from 'react';
import {NavLink} from "react-router-dom";
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AppsIcon from '@material-ui/icons/Apps';
import TranslateIcon from '@material-ui/icons/Translate';
import { createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useTheme from '@material-ui/core/styles/useTheme';
import LayoutContext from '../../Contexts/LayoutContext';

import { drawerWidth } from './_sharedNavigation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    menuLink: {
      textDecoration: 'none',
    }
  }),
);

const LeftNavigation: React.FC = () => {
  const classes = useStyles();
  const { leftSideBarOpen, setLeftSideBarOpen } = useContext(LayoutContext);
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={leftSideBarOpen}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: leftSideBarOpen,
        [classes.drawerClose]: !leftSideBarOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: leftSideBarOpen,
          [classes.drawerClose]: !leftSideBarOpen,
        }),
      }}>
      <div className={classes.toolbar}>
        <IconButton onClick={() => setLeftSideBarOpen(false)}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>

      <Divider />
      <List>
        <NavLink to="/" className={classes.menuLink}>
          <ListItem button key="/">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </NavLink>
      </List>
      <Divider />

      <List>
        <NavLink to="/applications" className={classes.menuLink}>
          <ListItem button key="/applications">
            <ListItemIcon>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary="Applications" />
          </ListItem>
        </NavLink>
      </List>
      <Divider />

      <List>
        <NavLink to="/translations" className={classes.menuLink}>
          <ListItem button key="/translations">
            <ListItemIcon>
              <TranslateIcon />
            </ListItemIcon>
            <ListItemText primary="Translations" />
          </ListItem>
        </NavLink>
      </List>
      <Divider />

    </Drawer>
  );
};

LeftNavigation.displayName = 'LeftNavigation';
export default LeftNavigation;
