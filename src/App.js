import { Route, Routes } from "react-router-dom"
import "./App.css"
import ProfileContainer from "./components/Profile/ProfileContainer"
import Sidebar from "./components/Sidebar/Sidebar"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"
import React from "react"
import { connect } from "react-redux"
import { initializeApp } from "./redux/appReducer"
import Preloader from "./components/common/Preloader/Preloader"

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        {/* <Sidebar /> */}
        {/* <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile'>
              <Route path=':userId' element={<ProfileContainer />} />
              <Route path='' element={<ProfileContainer />} />
            </Route>
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<div>404 NOT FOUND</div>} />
            <Route
              path='/'
              element={
                <div>
                  START PAGE
                  <div>
                    Find users is available, other pages only after login
                  </div>
                </div>
              }
            />
          </Routes>
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

export default connect(mapStateToProps, {
  initializeApp,
})(App)
