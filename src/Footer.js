import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import coderCat from './assets/femalecodercat.jpg';

class Footer extends PureComponent {
  render() {
    return (
      <div className="footer_links">
        <div className="footer_left">
          <p>
            <i className="far fa-copyright" /> 2018 Kristen Lingwood
          </p>
          <Link to="http://kristenlingwood.com">Terms</Link>
          <Link to="http://kristenlingwood.com">Privacy</Link>
          <Link to="http://kristenlingwood.com">Security</Link>
          <Link to="http://kristenlingwood.com">Status</Link>
          <Link to="http://kristenlingwood.com">Help</Link>
        </div>
        <img src={coderCat} alt="codercat" />
        <div className="footer_right">
          <Link to="http://kristenlingwood.com">Contact Kristen</Link>
          <Link to="http://kristenlingwood.com">Pricing</Link>
          <Link to="http://kristenlingwood.com">API</Link>
          <Link to="http://kristenlingwood.com">Blog</Link>
          <Link to="http://kristenlingwood.com">About</Link>
        </div>
      </div>
    );
  }
}

export default Footer;
