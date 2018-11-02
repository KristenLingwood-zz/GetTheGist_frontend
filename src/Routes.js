import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import GistsHome from './GistsHome';
import Gist from './Gist';

class Routes extends PureComponent {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/gists" component={GistsHome} />
          <Route path="/gists/:gistID" component={Gist} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
