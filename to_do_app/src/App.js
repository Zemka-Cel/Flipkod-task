import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";

import Homescreen from "./views/HomeScreen";
import AddForm from "./views/AddForm";
import EditForm from "./views/EditForm";
import DetailScreen from "./views/DetailScreen";



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/HomeScreen"} className="nav-link text-white">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={"/form"} className="nav-link text-white ">
                Add Task
              </Link>
            </li> */}
          </div>
         
          
         
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/HomeScreen"]} component={Homescreen} />
            <Route path="/form" component={AddForm} />
            <Route path="/edit/:id" component={EditForm} />
            <Route path="/details/:id" component={DetailScreen} />

                   </Switch>
        </div>
      </div>
      <nav className="navbar navbar-expand text-white text-center bg-dark mt-5 " >
      &copy; Copyright - Azemina Celebic 2020
      </nav>
    </BrowserRouter>
  );
}

export default App;
