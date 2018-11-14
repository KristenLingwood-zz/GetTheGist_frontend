import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GistsHome from '../GistsHome';
import Gist from '../Gist';
import Custom404 from '../../services/Custom404';

class Routes extends Component {
  render() {
    return (
      <div className="container marginBottom-2">
        <Switch>
          <Route exact path="/gists" render={() => <GistsHome />} />
          <Route path="/gists/:gistID" render={() => <Gist />} />
          <Redirect from="/" exact to="/gists" />} />
          <Route component={Custom404} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
