import classes from "./Header.module.css";
import logo from "../../assets/images/SoNet-App-logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.panel}>
      <img src={logo} alt="main-logo" />
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
