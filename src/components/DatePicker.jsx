import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';

const DatePickerField = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/pikaday/pikaday.js';
    script.async = true;
    script.onload = () => {
      new Pikaday({
        field: document.getElementById('date'),
        format: 'YYYY-MM-DD',
        yearRange: [1900, moment().year()],
        showYearDropdown: true,
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <TextField
      required
      fullWidth
      id="date"
      label="Event Date"
      name="date"
      InputLabelProps={{
        style: { color: '#C0C0C0' },
      }}
    />
  );
};

export default DatePickerField;
