import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/letMeRegisterAccount/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/homepage/Homepage";
import { useContext } from "react";
import { Context } from "./context/Context";
import axios from "axios";

axios.defaults.baseURL = "https://sdc-blog.herokuapp.com/api";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/letMeRegisterAccount">
          {
            user?
            <Home/>:
            <Register />
          }
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Home />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
