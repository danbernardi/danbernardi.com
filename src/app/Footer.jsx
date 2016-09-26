import React from 'react';
import moment from 'moment';

const Footer = props => {
  return (
    <div className="footer">
      <ul className="social">
        <li><span className="fa-envelope-square"></span></li>
        <li><span className="fa-facebook-square"></span></li>
        <li><span className="fa-linkedin-square"></span></li>
        <li><span className="fa-twitter-square"></span></li>
        <li><span className="fa-github-square"></span></li>
      </ul>

      <p className="copy mt1">{ `© ${moment().format('YYYY')}. All rights reserved.` }</p>
    </div>
  );
};

export default Footer;
