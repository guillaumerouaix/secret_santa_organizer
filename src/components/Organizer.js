import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import SantaClaus from '../assets/santa-claus.png';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Organizer() {

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  let [nbParticipants, setNbParticipants] = useState(3);
  let addRemovePerson = (v) => {
    if(v === -1 && nbParticipants <= 3){
      handleClick();
      console.log("error peu pas sup");
    }else{
      setNbParticipants(nbParticipants + v)
    }
  }

  return (
    <div className="organizerContainer">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="header">
          <img src={SantaClaus} className="logo" alt="Logo"/>
          <div className="headerTitle">Secret Santa Organizer</div>
        </div>
      </Link>
      <div className="formular">
        
        <div className="secondaryTitle">
          {nbParticipants} participants 
          <IconButton aria-label="add" color="primary" onClick={() => {addRemovePerson(+1); handleClose();}}>
              <AddCircleOutlineIcon fontSize="large"/>
          </IconButton>
          <IconButton aria-label="add" color="primary" onClick={() => {addRemovePerson(-1)}}>
              <RemoveCircleOutlineIcon fontSize="large"/>
          </IconButton>
        </div>
        <div className="inputRow">
          <TextField id="name" label="name" variant="filled"/>
          <TextField id="name" label="email" variant="filled"/>
        </div>
        <div className="inputRow">
          <TextField id="name" label="name" variant="filled"/>
          <TextField id="name" label="email" variant="filled"/>
        </div>
        <div className="inputRow">
          <TextField id="name" label="name" variant="filled"/>
          <TextField id="name" label="email" variant="filled"/>
        </div>
        {Array.from({ length: nbParticipants-3 }).map(() => ( 
          <div className="inputRow">
            <TextField id="name" label="name" variant="filled"/>
            <TextField id="name" label="email" variant="filled"/>
          </div>
        ))}
      </div>
      <Button variant="contained">
        organize with {nbParticipants} participants
      </Button>
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          The minimum number of participants is 3!
        </Alert>
      </Snackbar>

    </div>
  );
}

export default connect()(Organizer)