import classes from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <nav className={classes.sidebar}>
      <div className={classes.link}>
        <a>Profile</a>
      </div>
      <div className={classes.link}>
        <a>Messages</a>
      </div>
      <div className={classes.link}>
        <a>News</a>
      </div>
      <div className={classes.link}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Sidebar;
