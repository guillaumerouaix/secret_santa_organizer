import React from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import Gift from '../assets/gift.png';

function Success() {
  return (
    <div className="containerCenter">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img src={Gift} className="gift" alt="gift"/>
      </Link>
      <div className="organize sucess">
        <div className="homeTitle">Merry Christmas!</div>
        <div className="successText">The participation emails have been sent.</div>
      </div>
    </div>
  );
}

export default connect()(Success)