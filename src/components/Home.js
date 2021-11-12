import React from 'react';
import {connect} from 'react-redux'
import SantaClaus from '../assets/santa-claus.png';
import Snowflake from '../assets/snowflake.png';
import Button from '@mui/material/Button';

function Home() {
  return (
    <div className="containerCenter">
      <img src={SantaClaus} className="santaClaus" alt="Logo"/>
      <div className="organize">
        <div className="homeTitle">Santa Claus Organizer</div>
          <Button variant="contained" href="/organizer">
            <img src={Snowflake} className="snowflake" alt="icon"/>
            organize
            <img src={Snowflake} className="snowflake" alt="icon"/>
          </Button>
      </div>
    </div>
  );
}

export default connect()(Home)