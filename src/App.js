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

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Sidebar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile'>
            <Route path=':userId' element={<ProfileContainer />} />
            <Route path='' element={<ProfileContainer />} />
          </Route>
          {/* <Route path="/profile/:userId" element={<ProfileContainer />} /> */}
          <Route path='/dialogs' element={<DialogsContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
