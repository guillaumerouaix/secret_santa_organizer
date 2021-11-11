import React from 'react';
import {connect} from 'react-redux'
import {BrowserRouter as Link} from "react-router-dom";
import SantaClaus from '../assets/santa-claus.png';
import Snowflake from '../assets/snowflake.png';
import Button from '@mui/material/Button';

function Home() {
  return (
    <div className="containerCenter">
      <img src={SantaClaus} className="santaClaus"/>
      <div className="organize">
        <div className="homeTitle">Santa Claus Organizer</div>
        <Link to="/organizer" style={{ textDecoration: 'none' }}>
          <Button variant="contained">
            <img src={Snowflake} className="snowflake"/>
            organize <img src={Snowflake} className="snowflake"/>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default connect()(Home)