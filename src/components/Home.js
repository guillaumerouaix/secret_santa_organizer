import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import SantaClaus from '../assets/santa-claus.png';
import Snowflake from '../assets/snowflake.png';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Home() {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="containerCenter">
      <img src={SantaClaus} className="santaClaus" alt="Logo"/>
      <div className="organize">
        <div className="homeTitle">Secret Santa Organizer</div>
        <div className="secondaryTitle">
          Secret Santa Organizer is a free online gift exchange organizer! You can get more information here
          <InfoIcon fontSize="small" onClick={handleClickOpen}/>
        </div>
        <Link to="/organizer" style={{ textDecoration: 'none' }}>
          <Button variant="contained">
              <img src={Snowflake} className="snowflake" alt="icon"/>
              organize
              <img src={Snowflake} className="snowflake" alt="icon"/>
          </Button>
        </Link>
      </div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"How it works?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Secret Santa Organizer is a free online gift exchange organizer!
          Organize a Secret Santa party with friends, family, or even colleagues.
          You need at least 3 participants, fill in the requested information on each participant.
          Once finished, e-mails will be sent to the participants with the name of the person to whom they will have to give a gift.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ok</Button>
        </DialogActions>
      </Dialog>


    </div>
  );
}

export default connect()(Home)