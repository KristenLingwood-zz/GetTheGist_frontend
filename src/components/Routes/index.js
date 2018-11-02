import React, { PureComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GistsHome from '../GistsHome';
import Gist from '../Gist';
import Custom404 from '../../services/Custom404';

class Routes extends PureComponent {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/gists" component={GistsHome} />
          <Route path="/gists/:gistID" component={Gist} />
          <Redirect exact from="/" to="/gists" />
          <Route component={Custom404} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
