import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Admin from "./layouts/Admin";
import Login from "./layouts/Login";
import AuthState from "./context/auth/AuthState";
import StudentState from "./context/student/StudentState";


ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <StudentState>
       <Router>
        <Switch>
          <Route path="/admin"  component={Admin} />
          <Route path="/login" component={Login} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>
      </StudentState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
