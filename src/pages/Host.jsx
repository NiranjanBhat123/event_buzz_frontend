import React, { useState } from 'react';
import { Box, Grid, TextField, Typography, Button, Container, styled } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import dayjs from 'dayjs';
import ImageIcon from '@mui/icons-material/Image';
import { InputAdornment } from '@mui/material';
import '../css/Host.css';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const Host = () => {
    const [formData, setFormData] = useState({
        eventName: '',
        clubName: '',
        contact: '',
        clubMail: '',
        date: dayjs(),
        briefDescription: '',
        detailedDescription: '',
        eventLocation: '',

    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, date });
    };




    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append('eventName', formData.eventName);
        formDataToSend.append('clubName', formData.clubName);
        formDataToSend.append('date', formData.date.toISOString());
        formDataToSend.append('briefDescription', formData.briefDescription);
        formDataToSend.append('detailedDescription', formData.detailedDescription);
        formDataToSend.append('eventLocation', formData.eventLocation);
        formDataToSend.append('contact', formData.contact);
        formDataToSend.append('clubMail', formData.clubMail);

        axios.post('https://formsubmit.co/ajax/bhatniranjsn628@gmail.com', formDataToSend)
            .then(response => {
                console.log('Form submission successful:', response.data);
                toast.success("Event successfully submitted! We will reach out to you soon.", { duration: 5000 });
                setLoading(false);
                setFormData({
                    eventName: '',
                    clubName: '',
                    date: dayjs(),
                    briefDescription: '',
                    detailedDescription: '',
                    eventLocation: '',
                    contact: '',
                    clubMail: '',


                });
            })
            .catch(error => {
                console.error('Form submission error:', error);
                toast.error("Failed to submit event. Please try again later.", { duration: 5000 });
                setLoading(false);
            });
    };

    return (
        <Container component="main" maxWidth="md">
            <h1 style={{ color: "orange", textAlign: "center", marginTop: "8rem" }}>Thank you for choosing EventBuzz!</h1>
            <Box
                className="host-form-container"
                component="form"
                method="POST"
                encType="multipart/form-data"
                sx={{ p: 4 }}
                onSubmit={handleSubmit}
            >
                <Typography component="h6" variant="h6" style={{ color: "#C0C0C0", textAlign: "center", marginBottom: "1rem" }}>
                    Kindly fill the details of the event below
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="eventName"
                            label="Event Name"
                            name="eventName"
                            value={formData.eventName}
                            onChange={handleChange}
                            className="text-field"
                            style={{ color: "#C0C0C0" }}
                            InputLabelProps={{
                                sx: { color: '#C0C0C0' },
                            }}
                            InputProps={{
                                sx: {
                                    '& .MuiInputBase-input::placeholder': {
                                        color: '#C0C0C0',
                                    },
                                },
                            }}
                        />
                        <TextField
                            required
                            fullWidth
                            id="clubName"
                            label="Club Name"
                            name="clubName"
                            value={formData.clubName}
                            onChange={handleChange}
                            className="text-field"
                            InputLabelProps={{
                                sx: { color: '#C0C0C0' },
                            }}
                            InputProps={{
                                sx: {
                                    '& .MuiInputBase-input::placeholder': {
                                        color: '#C0C0C0',
                                    },
                                },
                            }}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            required
                            fullWidth
                            id="contact"
                            label="Contact Number"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="text-field"
                            InputLabelProps={{
                                sx: { color: '#C0C0C0' },
                            }}
                            InputProps={{
                                sx: {
                                    '& .MuiInputBase-input::placeholder': {
                                        color: '#C0C0C0',
                                    },
                                },
                            }}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            required
                            fullWidth
                            id="clubMail"
                            type="email"
                            label="Email"
                            name="clubMail"
                            value={formData.clubMail}
                            onChange={handleChange}
                            className="text-field"

                            InputLabelProps={{
                                sx: { color: '#C0C0C0' },
                            }}
                            InputProps={{
                                sx: {
                                    '& .MuiInputBase-input::placeholder': {
                                        color: '#C0C0C0',
                                    },
                                },
                            }}
                            sx={{ mt: 2, mb: 2 }}
                        />


                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="briefDescription"
                            label="Brief Description"
                            name="briefDescription"
                            value={formData.briefDescription}
                            onChange={handleChange}
                            className="text-field"
                            InputLabelProps={{
                                sx: { color: '#C0C0C0' },
                            }}
                            InputProps={{
                                sx: {
                                    '& .MuiInputBase-input::placeholder': {
                                        color: '#C0C0C0',
                                    },
                                },
                            }}
                            sx={{ mt: 0 }}
                        />
                        <TextField
                            required
                            fullWidth
                            id="detailedDescription"
                            label="Detailed Description"
                            name="detailedDescription"
                            value={formData.detailedDescription}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            className="text-field"
                            InputLabelProps={{
                                sx: { color: '#C0C0C0' },
                            }}
                            InputProps={{
                                sx: {
                                    '& .MuiInputBase-input::placeholder': {
                                        color: '#C0C0C0',
                                    },
                                },
                            }}
                            sx={{ mt: 2 }}
                        />
                        <TextField
                            required
                            fullWidth
                            id="eventLocation"
                            label="Event Location"
                            name="eventLocation"
                            value={formData.eventLocation}
                            onChange={handleChange}
                            className="text-field"
                            InputLabelProps={{
                                sx: { color: '#C0C0C0' },
                            }}
                            InputProps={{
                                sx: {
                                    '& .MuiInputBase-input::placeholder': {
                                        color: '#C0C0C0',
                                    },
                                },
                            }}
                            sx={{ mt: 2 ,mb:"1rem"}}
                        />



                        <label htmlFor="">select date and time</label><br /><br />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDateTimePicker

                                value={formData.date}

                                onChange={handleDateChange}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        fullWidth
                                        required
                                        InputLabelProps={{ sx: { color: '#C0C0C0' } }}
                                        style={{ color: "#C0C0C0", marginTop: "4rem" }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiInputBase-input::placeholder': {
                                                    color: '#C0C0C0',
                                                },
                                            },

                                            style: { color: "#C0C0C0" }

                                        }}

                                    />
                                )}
                            />
                        </LocalizationProvider>

                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    style={{ marginLeft: "22rem" }}
                    variant="contained"
                    className="submit-button"
                    sx={{ mt: 3, mb: 2 }}
                    startIcon={loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : null}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </Button>
            </Box>

            <Toaster />

        </Container>
    );
};

export default Host;





