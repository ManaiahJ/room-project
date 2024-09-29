import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import {Route,Switch,} from "react-router-dom/cjs/react-router-dom.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/DashBoard/Dashboard";
import Registration from "./Components/Registration/Registration";
import ForgotPass from "./Components/ForgotPassword/ForgotPass";
import Pagenotfound from "./Components/PageNotFound/Pagenotfound";
function App() {
  const username = "admin";
  return (
    <>
      <div className="layout">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Registration />
            </Route>
            <Route path="/forgot">
              <ForgotPass />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="*">
              <Pagenotfound />
            </Route>
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
