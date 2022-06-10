import React from "react"
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friend";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.panel}>
      <nav>
        <div className={classes.item}>
          <NavLink
            to="/profile"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            Profile
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            to="/dialogs"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            Messages
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            to="/news"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            News
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            to="/music"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            Music
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            to="/users"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            Find users
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink
            to="/settings"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            Settings
          </NavLink>
        </div>
      </nav>
      <Friends />
    </div>
  );
};

export default Sidebar;
