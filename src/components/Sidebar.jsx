import classes from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <nav className={classes.sidebar}>
      <div className={classes.link}>
        <a>Profile</a>
      </div>
      <div className="sidebarLink">
        <a href="#s">Messages</a>
      </div>
      <div className="sidebarLink">
        <a href="#s">News</a>
      </div>
      <div className="sidebarLink">
        <a href="#s">Settings</a>
      </div>
    </nav>
  );
};

export default Sidebar;
