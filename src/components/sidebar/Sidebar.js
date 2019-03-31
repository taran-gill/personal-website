

import React from 'react';
import { withPrefix } from 'gatsby';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

import { WebLink } from './WebLink';

import avatar from '../../assets/images/avatar.jpg';

import './Sidebar.scss';

const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  }
});

const SidebarContent = () => (
    <header className='sidebar'>
        <div className='sidebar__summary'>
            <img className='sidebar__profile-pic hoverable' src={avatar} alt='' />
            <summary>
                Hey <span aria-label='victory-hand' role='img'>✌️</span>,
                I'm <strong>Taran</strong>.
                <br />
                I'm a web developer.
            </summary>
        </div>
        <nav className='sidebar__links'>
            <ul className='sidebar__pages'>
                <li><WebLink icon='fa-home' to='home'/></li>
                <li><WebLink icon='fa-suitcase' to='experience'/></li>
                <li><WebLink icon='fa-tasks' to='projects'/></li>
                <li><WebLink icon='fa-envelope' to='contact'/></li>
            </ul>
            <ul className='icons'>
                <li>
                    <a href='https://github.com/taran-gill' rel='noopener noreferrer' className='icon fa-github'
                    target='_blank'
                    >
                        <span className='label'>Github</span>
                    </a>
                </li>
                <li>
                    <a href='https://linkedin.com/in/tarangill' rel='noopener noreferrer' className='icon fa-linkedin'
                        target='_blank'
                    >
                        <span className='label'>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href={withPrefix('/resume.pdf')} rel='noopener noreferrer' className='icon fa-id-badge' 
                        target='_blank' title='Resume'
                    >
                        <span className='label'>Resume</span>
                    </a>
                </li>
            </ul>
        </nav>
        <footer className='sidebar__footer'>
            <span className='copyright'>
                &copy; Taran Gill
            </span>
        </footer>
    </header>
)

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color='secondary' className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
                <span className='icon fa-bars'>
                    <span className='label'>Links</span>
                </span>
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor='left'
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <SidebarContent />
            </Drawer>
          </Hidden>
          {/* For larger browsers, navbar is always visible */}
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
                <SidebarContent />
            </Drawer>
          </Hidden>
        </nav>
        
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);