import {React,useEffect} from 'react';
import '../css/About.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PromotionImage from '../assets/images/promotion.webp';
import RegistrationImage from '../assets/images/reg.png';
import EventSupportImage from '../assets/images/Event-Support.jpeg';

const About = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <div className="about-container">
      <h1 style={{marginTop:"3rem",textAlign:"center",color:"orange"}}>What do we do ?</h1>
      <div className="description-container">
        <p>
          <strong>Event Buzz is your ultimate college event organizing platform, providing end-to-end support for successful events.</strong>
        </p>
      </div>
      <div className="services-container">
      

        {/* Service 1 */}
        <Card className="service-card" style={{background:"#343434"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="290"
              image={PromotionImage}
              alt="Event Promotion"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="service-title">
                Event Promotion
              </Typography>
              <Typography variant="body2" className="service-description">
                We promote your events to maximize attendance.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Service 2 */}
        <Card className="service-card" style={{background:"#343434"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="290"
              image={RegistrationImage}
              alt="Registration Management"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="service-title">
                Registration Management
              </Typography>
              <Typography variant="body2" className="service-description">
                Efficiently manage event registrations and attendee data.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Service 3 */}
        <Card className="service-card" style={{background:"#343434"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="290"
              image={EventSupportImage}
              alt="Event Support"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="service-title">
                Event Support
              </Typography>
              <Typography variant="body2" className="service-description">
                We provide comprehensive support for smooth event execution.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default About;
