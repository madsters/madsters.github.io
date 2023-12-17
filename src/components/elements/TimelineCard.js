import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../../styles/constants.css';

export default function TimelineCard({ title, description, imgpath }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', width: '50%', backgroundColor: 'var(--apricot)' }}>
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
