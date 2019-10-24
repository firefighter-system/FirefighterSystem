import React from 'react';

import { Link } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import WaterIcon from '@material-ui/icons/Opacity';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VitalsIcon from '@material-ui/icons/BarChart';
import LocationIcon from '@material-ui/icons/MyLocation';
import ContactIcon from '@material-ui/icons/Call';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupIcon from '@material-ui/icons/GroupWork';
import { Link } from 'react-router-dom'

export const primaryNavItems = (
  <div>
<<<<<<< HEAD:client/src/App/views/NavItems/NavItems.jsx
    <nav>
      <ul>
        <li className="dashboardLink">
          <Link to="/" style={{ textDecoration: 'none' }}><DashboardIcon /> Dashboard</Link>
        </li>
        <li className="teamLink">
          <Link to="/team" style={{ textDecoration: 'none' }}><GroupIcon /> Team</Link>
        </li>
        <li className="vitalsLink">
          <Link to="/vitals" style={{ textDecoration: 'none' }}><VitalsIcon /> Vitals</Link>
        </li>
        <li className="humidityLink">
          <Link to="/humidity" style={{ textDecoration: 'none' }}><WaterIcon /> Humidity</Link>
        </li>
        <li className="mapLink">
          <Link to="/map" style={{ textDecoration: 'none' }}><LocationIcon /> Map</Link>
        </li>
        <li className="contactLink">
          <Link to="/contact" style={{ textDecoration: 'none' }}><ContactIcon /> Contact</Link>
        </li>
      </ul>
    </nav>
    {/* <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Team" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VitalsIcon />
      </ListItemIcon>
      <ListItemText primary="Vitals" />
    </ListItem>
=======
    <Link to="/">
      <ListItem button>
        <ListItemIcon><DashboardIcon /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>

    <Link to="/team">
      <ListItem button>
        <ListItemIcon><GroupIcon /></ListItemIcon>
        <ListItemText primary="Team" />
      </ListItem>
    </Link>

    <Link to="/vitals">
      <ListItem button>
        <ListItemIcon><VitalsIcon /></ListItemIcon>
        <ListItemText primary="Vitals" />
      </ListItem>
    </Link>
>>>>>>> origin/reset-stuff:client/src/App/views/NavItems.jsx

    <Link to="/humidity">
      <ListItem button>
        <ListItemIcon><WaterIcon /></ListItemIcon>
        <ListItemText primary="Humidity" />
      </ListItem>
    </Link>

    <Link to="/map">
      <ListItem button>
        <ListItemIcon><LocationIcon /></ListItemIcon>
        <ListItemText primary="Map" />
      </ListItem>
    </Link>

<<<<<<< HEAD:client/src/App/views/NavItems/NavItems.jsx
    <ListItem button>
      <ListItemIcon>
        <ContactIcon />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItem> */}
=======
    <Link to="/contact">
      <ListItem button>
        <ListItemIcon><ContactIcon /></ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItem>
    </Link>
>>>>>>> origin/reset-stuff:client/src/App/views/NavItems.jsx
  </div>

);

export const secondaryNavItems = (
  <div>
    <ListSubheader inset>Others</ListSubheader>

    <Link to="/pastmissions">
      <ListItem button>
        <ListItemIcon><AssignmentIcon /></ListItemIcon>
        <ListItemText primary="Past Missions" />
      </ListItem>
    </Link>


    <Link to="/settings">
      <ListItem button>
        <ListItemIcon><SettingsIcon /></ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </Link>
  </div>
);
