import React, { PureComponent } from 'react';
import './footer.css';
import coderCat from '../../assets/femalecodercat.jpg';

class Footer extends PureComponent {
  render() {
    return (
      <div className="footer_links">
        <div className="footer_left">
          <p>
            <i className="far fa-copyright" /> 2018 Kristen Lingwood
          </p>
          <a href="http://kristenlingwood.com">Terms</a>
          <a href="http://kristenlingwood.com">Privacy</a>
          <a href="http://kristenlingwood.com">Security</a>
          <a href="http://kristenlingwood.com">Status</a>
          <a href="http://kristenlingwood.com">Help</a>
        </div>
        <img src={coderCat} alt="codercat" />
        <div className="footer_right">
          <a href="http://kristenlingwood.com">Contact Kristen</a>
          <a href="http://kristenlingwood.com">Pricing</a>
          <a href="http://kristenlingwood.com">API</a>
          <a href="http://kristenlingwood.com">Blog</a>
          <a href="http://kristenlingwood.com">About</a>
        </div>
      </div>
    );
  }
}

export default Footer;
