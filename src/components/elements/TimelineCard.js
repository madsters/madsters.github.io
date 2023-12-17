import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function TimelineCard({ title, date, description, imgpath }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', width: '50%' }}>
      <CardMedia
        sx={{ height: 140, width: 140, objectFit: 'cover' }}
        image={imgpath}
        title="Company Logo"
      />
      <CardContent>
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
