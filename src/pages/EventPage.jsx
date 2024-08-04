import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaUsers, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import '../css/EventPage.css';
import { Modal, Box, TextField, Button, Grid, Typography, MenuItem, IconButton, Alert } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
import CloseIcon from '@mui/icons-material/Close';


const branches = ["CSE", "ISE", "ECE", "EEE", "Civil", "Mechanical"];
const EventPage = () => {
  const location = useLocation();
  const eventId = location.state.eventId;
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
    phone: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setError('');
    setFormData({
      name: '',
      email: '',
      branch: '',
      phone: ''
    })
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, branch, phone } = formData;

    if (!name || !email || !branch || !phone) {
      setError('Please fill in all fields.');
      return;
    }

    try {

      const registrationData = {
        eventId,
        name,
        email,
        branch,
        phone
      };
      console.log(registrationData);

      await axios.post('https://event-buzz-backend.onrender.com/api/register', registrationData);
      toast.success("Registration successful!",{duration:3000});
      setFormData({
        name: '',
        email: '',
        branch: '',
        phone: ''
      })
      handleClose();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      }
      console.error('Error registering:', error);
      
    }
  };


  useEffect(() => {
    const fetchEvent = async () => {
      try {

        const response = await axios.get(`https://event-buzz-backend.onrender.com/api/events/${eventId}`);
        setEvent(response.data);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching event:', error);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="event-page">
      <div className="hero-section">
        <div className="hero-overlay">
          <h1 className="event-title">{event.name}</h1>
        </div>
      </div>
      <div className="event-details-grid">
        <div className="event-detail">
          <FaUsers className="icon" />
          <p className="detail-label">Registrations -</p>
          <p className="detail-value">{event.registrations}</p>
        </div>
        <div className="event-detail">
          <FaUsers className="icon" />
          <p className="detail-label">Organizer Club -</p>
          <p className="detail-value">{event.organizerClub}</p>
        </div>
        <div className="event-detail">
          <FaCalendarAlt className="icon" />
          <p className="detail-label">Date & Time -</p>
          <p className="detail-value">{event.date}, {event.hour}:{event.mins < 10 ? `0${event.mins}` : event.mins}</p>
        </div>
        <div className="event-detail">
          <FaMapMarkerAlt className="icon" />
          <p className="detail-label">Location -</p>
          <p className="detail-value">{event.Eventlocation}</p>
        </div>
      </div>
      <div className="event-description">
        <h2>What's this about ?</h2>
        <p>{event.detailedDiscription}</p>
      </div>
      <button className="register-button" onClick={handleOpen}>Register</button>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box" component="form" noValidate onSubmit={handleSubmit} sx={{ p: 4 }}>
          <IconButton className="close-button" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <Typography component="h1" variant="h5" style={{ color: "orange", textAlign: "center", marginBottom: "2rem" }}>Register for Event</Typography>
          {error && <Alert style={{ marginBottom: "1rem" }} severity="error">{error}</Alert>}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                select
                id="branch"
                label="Branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
              >
                {branches.map((branch) => (
                  <MenuItem key={branch} value={branch}>{branch}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
        </Box>
      </Modal>
      <Toaster />
    </div>
  );
};

export default EventPage;
