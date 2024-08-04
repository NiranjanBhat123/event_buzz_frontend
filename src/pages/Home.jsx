import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from '@mui/icons-material/Share';
import ShareDialog from '../components/ShareDialog';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [events, setEvents] = useState([]);
  const [expandedId, setExpandedId] = useState(-1);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [shareEvent, setShareEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://event-buzz-backend.onrender.com/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  const handleEventClick = (event) => {
    console.log(`clicked ${event.name}`);
    navigate(`/event/${event._id}`,{state:{eventId:event._id}});
  };

  const handleShareClick = (event) => {
    setShareEvent(event);
    setShareDialogOpen(true);
  };

  const handleCloseShareDialog = () => {
    setShareDialogOpen(false);
  };

  return (
    <>
      <h1 style={{ color: 'orange', textAlign: "center", marginTop: "8rem", fontSize: '2.3rem', marginBottom: "3rem" }}>Upcoming Events !</h1>
      <div style={{ display: 'grid', gap: '5rem', padding: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 2fr))' }}>
        {events.length > 0 ? (
          events.map((event, index) => (
            <Card key={event._id} sx={{ background: "#343434", color: "white", padding: ".5rem", width: "25rem", height: expandedId === index ? "auto" : "fit-content" }} >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {event.name.charAt(0)}
                  </Avatar>
                }
                
                title={<Typography variant="h6" style={{ fontWeight: 'bold' }}>{event.name}</Typography>}
                subheader={<Typography variant="subtitle2" style={{ color: '#C0C0C0', fontWeight: 'bold' }}>{event.date}</Typography>}
                style={{ color: 'orange' }}
              />
              {event.image && (
                <CardMedia
                  component="img"
                  height="200"
                  style={{ objectFit: 'cover', cursor:"pointer" }}
                  image={event.image}
                  alt={`${event.name} Image`}
                  onClick={() => { handleEventClick(event) }}
                />
              )}
              <CardContent>
                <Typography variant="body2" color="#C0C0C0">
                  {event.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="registrations"
                  onClick={() => handleExpandClick(index)}
                  style={{ color: '#C0C0C0' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'orange'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#C0C0C0'}
                >
                  <PersonIcon />
                  <Typography variant="body2" color="#C0C0C0" style={{ marginLeft: '0.5rem' }}>
                    {event.registrations} registrations
                  </Typography>
                </IconButton>
                <IconButton aria-label="share" onClick={() => handleShareClick(event)} style={{ color: 'grey' }}>
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expandedId === index}
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expandedId === index}
                  aria-label="show more"
                  style={{ color: '#C0C0C0' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'orange'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#C0C0C0'}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expandedId === index} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph style={{ color: '#C0C0C0' }}>Organizer Club: {event.organizerClub}</Typography>
                  <Typography paragraph style={{ color: '#C0C0C0' }}>Event Time: {event.hour}:{event.mins}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))
        ) : (
          <p>No events found.</p>
        )}
        {shareDialogOpen && (
          <ShareDialog
            open={shareDialogOpen}
            onClose={handleCloseShareDialog}
            event={shareEvent}
          />
        )}
      </div>
    </>
  );
}
