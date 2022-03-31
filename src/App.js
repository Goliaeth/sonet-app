import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="app-wrapper-content">
        <Dialogs />
        {/* <Profile /> */}
      </div>
    </div>
  );
};

export default App;
