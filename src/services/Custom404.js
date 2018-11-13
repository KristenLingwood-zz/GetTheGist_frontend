import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

class Custom404 extends PureComponent {
  render() {
    return <Redirect to="/gists" />;
    // return (
    //   <div style={{ 'margin-top': '100px' }}>
    //     <h1>404</h1>
    //     <h4>Uh oh, we didn't get the gist of it. Page not found.</h4>
    //   </div>
    // );
  }
}

export default Custom404;
