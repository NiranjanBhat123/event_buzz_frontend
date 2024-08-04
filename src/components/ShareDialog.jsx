import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Instagram, WhatsApp, Facebook, Twitter } from '@mui/icons-material';

const styles = {
  iconButton: {
    margin: '0.5rem',
  },
};

const ShareDialog = ({ open, onClose, event }) => {
  const handleClose = () => {
    onClose();
  };

  const handleShare = (platform) => {
    let shareUrl = ''; 
    let defaultMessage = `Hey, I'm excited to inform you about this event ${event.name}! Check it out: ${event.image}`;
    
    switch (platform) {
      case 'instagram':
        shareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(event.image)}&title=${encodeURIComponent(defaultMessage)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(defaultMessage)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(event.image)}&quote=${encodeURIComponent(defaultMessage)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(event.image)}&text=${encodeURIComponent(defaultMessage)}`;
        break;
      default:
        break;
    }
    
    window.open(shareUrl, '_blank');
    onClose();
  };
  

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle style={{textAlign:"center"}}>Share Event</DialogTitle>
      <DialogContent>
        
        <IconButton style={styles.iconButton} onClick={() => handleShare('instagram')}>
          <Instagram />
        </IconButton>
        <IconButton style={styles.iconButton} onClick={() => handleShare('whatsapp')}>
          <WhatsApp />
        </IconButton>
        <IconButton style={styles.iconButton} onClick={() => handleShare('facebook')}>
          <Facebook />
        </IconButton>
        <IconButton style={styles.iconButton} onClick={() => handleShare('twitter')}>
          <Twitter />
        </IconButton>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
