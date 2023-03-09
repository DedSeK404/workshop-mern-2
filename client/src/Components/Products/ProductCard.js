import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ProductCard({prd}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={prd.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {prd.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {prd.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See Details</Button>
        <div style={{display:"flex", justifyContent:"end",width:"100%"}}>
        <Link to='/edit'>
        <Button size="small">edit</Button>
        </Link>
        <Button style={{color:"red"}} size="small">delete</Button>
        </div>
      </CardActions>
    </Card>
  );
}