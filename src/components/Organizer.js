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
      console.log("error: the minimum number of participants is 3!");
    }else{
      setNbParticipants(nbParticipants + v)
    }
  }

  const picker = (participants) => {
    let receivers = [...participants]
    let result = []
    participants.forEach((sender) => {
      let indexReceiver = Math.floor(Math.random() * (receivers.length))
      if(sender === receivers[indexReceiver] && receivers.length <= 1){
        picker(participants);
      }else{
        while(sender === receivers[indexReceiver]) {
          indexReceiver = Math.floor(Math.random() * (receivers.length));
        }
      }
      result.push({
        sender: sender,
        receiver: receivers[indexReceiver]
      })
      receivers.splice(indexReceiver, 1)
    });
    return result;
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    let participantsData = [];
    let pn = 0;
    let pm = 1;
    for (var i = 0; i < nbParticipants; i++) {
      pn += 2;
      pm += 2;
      participantsData.push({
        name: event.target[pn].value,
        email: event.target[pm].value
      })
    }
    //participantsData = ["A","B","C"];
    
    console.log(picker(participantsData));
  };

  return (
    <div className="organizerContainer">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="header">
          <img src={SantaClaus} className="logo" alt="Logo"/>
          <div className="headerTitle">Secret Santa Organizer</div>
        </div>
      </Link>

      <form onSubmit={handleSubmit}>

      <div className="formular">
        <div className="secondaryTitle">
          <IconButton aria-label="add" color="primary" onClick={() => {addRemovePerson(+1); handleClose();}}>
              <AddCircleOutlineIcon fontSize="large"/>
          </IconButton>
          {nbParticipants} participants 
          <IconButton aria-label="add" color="primary" onClick={() => {addRemovePerson(-1)}}>
              <RemoveCircleOutlineIcon fontSize="large"/>
          </IconButton>
        </div>
        <div className="inputRow">
          <TextField id="name" label="name" variant="filled"/>
          <TextField id="email" label="email" variant="filled"/>
        </div>
        <div className="inputRow">
          <TextField id="name" label="name" variant="filled"/>
          <TextField id="email" label="email" variant="filled"/>
        </div>
        <div className="inputRow">
          <TextField id="name" label="name" variant="filled"/>
          <TextField id="email" label="email" variant="filled"/>
        </div>
        {Array.from({ length: nbParticipants-3 }).map(() => ( 
          <div className="inputRow">
            <TextField id="name" label="name" variant="filled"/>
            <TextField id="email" label="email" variant="filled"/>
          </div>
        ))}
      </div>
      <Link to="/success" style={{ textDecoration: 'none' }}>
        <Button variant="contained">
          send email
        </Button>
      </Link>

      <input type="submit" />
      </form>
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          The minimum number of participants is 3!
        </Alert>
      </Snackbar>

    </div>
  );
}

export default connect()(Organizer)