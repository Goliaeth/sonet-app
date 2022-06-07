import styles from "./Header.module.css"
import logo from "../../assets/images/SoNet-App-logo.png"
import { NavLink } from "react-router-dom"

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.body}>
          <NavLink to={"/profile"} className={styles.logo}>
            <img src={logo} alt='main-logo' />
          </NavLink>
          <div className={styles.menu}>
            {props.isAuth ? (
              <div>
                {props.login} <button onClick={props.logout}>Logout</button>
              </div>
            ) : (
              <NavLink to={"/login"} className={styles.link}>
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
