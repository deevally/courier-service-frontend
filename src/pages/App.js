import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../css/App.css';
import index from './index';
import login from "../pages/login";
import AdminPage from "./AdminPage";
import PageNotFound from '../components/NotFound';
import Ship from './Ship'
import { PrivateRoute } from "./PrivateRoute";
function App(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={index} />
          <Route exact path="/login" component={login} />
          <Route exact path="/shipping/:shippingId" component={Ship} />
          <PrivateRoute path="/admin" component={AdminPage} />
          {/* <Route exact path="/admin" component={AdminPage} /> */}
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </Router>
    );
}
export default App;