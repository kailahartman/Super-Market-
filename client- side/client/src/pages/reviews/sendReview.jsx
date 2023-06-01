import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


export default function FormDialog() {

  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [content, setContent] = React.useState("");


  const handleSubmit = async (event) => {
    handleClose();
    event.preventDefault();
    const newContent = `name: ${name} email: ${email} content:${content}`;
    const res = await axios.post('http://localhost:3600/reviews', { content: newContent }, {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
        'content-type': 'application/json'
      }
    })
    if (res.statusText == 'Created')
      setSuccess(true);

    else {
      setSuccess(false);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    navigate(-1);
    setOpen(false);
  };

  const handleChange = event => {
    if (event.target.id == 'name')
      setName(event.target.value);
    if (event.target.id == 'email')
      setEmail(event.target.value);
    else
      setContent(event.target.value);


  };

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>צור קשר</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="שם:"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="כתובת מייל :"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField multiline
            autoFocus
            margin="dense"
            id="content"
            label="תוכן הפנייה :"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

