import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../../styles/constants.css';

export default function TimelineCard({ title, description, img }) {

  console.log('img is ' + img);

  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', width: '50%', backgroundColor: 'var(--apricot)', boxSizing: 'border-box' }}>
      <CardMedia
        sx={{
          height: 'calc(140px - 32px)', // 140px - 16px (padding on top) - 16px (padding on bottom)
          width: 'calc(140px - 32px)', // 140px - 16px (padding on left) - 16px (padding on right)
          objectFit: 'cover',
          padding: '16px',
          borderRadius: '8px',
          boxSizing: 'border-box',
          margin: '8px', // Adjust as needed for spacing around the image
        }}
        image={img || 'https://via.placeholder.com/140x140'}
        title="Company Logo"
      />
      <CardContent sx={{
        padding: '0px'
      }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
