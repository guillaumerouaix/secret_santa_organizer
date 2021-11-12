import React from 'react';
import {connect} from 'react-redux';
import SantaClaus from '../assets/santa-claus.png';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function Organizer() {
  return (
    <div>
      <div className="header">
        <img src={SantaClaus} className="logo" alt="Logo"/>
        <div className="headerTitle">Santa Claus Organizer</div>
      </div>
      <div className="formular">
        <div>
          <TextField id="name" label="name" variant="filled"/>
          <TextField id="name" label="email" variant="filled"/>
        </div>
        <div>
          <TextField id="name" label="name" variant="filled"/>
          <TextField id="name" label="email" variant="filled"/>
        </div>
        <div>
          <TextField id="name" label="name" variant="filled"/>
          <TextField id="name" label="email" variant="filled"/>
          <IconButton aria-label="add" color="primary">
              <DeleteOutlineIcon />
          </IconButton>
        </div>
        <IconButton aria-label="add" color="primary">
            <AddCircleOutlineIcon fontSize="large"/>
        </IconButton>
      </div>
      <Button variant="contained" href="/organizer">
        organize
      </Button>
    </div>
  );
}

export default connect()(Organizer)