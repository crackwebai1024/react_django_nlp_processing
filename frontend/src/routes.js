import React from "react";
import { Route, Redirect } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";
import NlpDashboard from "./containers/NLPDashboard";
import NlpProcessing from "./containers/NLPProcessing";
import PrivateRoute from "./PrivateRouter";


const BaseRouter = () => (
  <Hoc>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route exact path="/" component={HomepageLayout} />
    <PrivateRoute component={NlpDashboard} path="/nlpdashboard" />
    <PrivateRoute component={NlpProcessing} path="/nlpprocessing" />
  </Hoc>
);

export default BaseRouter;
