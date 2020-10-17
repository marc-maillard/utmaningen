import React, { Component } from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import NotFound from "./NotFound";
import Challenges from "./challenges/";
import LogEntries from "./logEntries";
import LoginHooks from "./loginHooks";
import LogoutHooks from "./logoutHooks";

import history from "./History";

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <Redirect push to="/challenges" />
          </Route>
          <Route path="/challenges" exact component={Challenges} />
          <Route path="/log" component={LogEntries} />
          <Route path="/login" component={LoginHooks} />
          <Route path="/logout" component={LogoutHooks} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
