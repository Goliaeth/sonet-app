import React from "react"
import classes from "./Header.module.css"
import logo from "../../assets/images/SoNet-App-logo.png"
import { NavLink } from "react-router-dom"

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}
const Header: React.FC<HeaderPropsType> = ({ isAuth, login, logout }) => {
  return (
    <header className={classes.panel}>
      <img src={logo} alt='main-logo' />
      <div className={classes.loginBlock}>
        {isAuth ? (
          <div>
            {login} <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
