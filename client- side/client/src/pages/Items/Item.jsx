import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LargeItem from './LargeItem';
import CardActionArea from '@mui/material/CardActionArea';


export default function Item({ info }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={()=>setOpen(true)}>
      {/* <CardActionArea onClick={()=>{alert("this is onClick")}}> */}
      <CardMedia
        sx={{ height: 140 }}
        image="/Banana.JPG"
        title="Banana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {info.name}
          <br />
          {info.company}
          <br />
          {info.price}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" >+</Button>
        <Button size="large">-</Button>
      </CardActions>
    </Card>
    {open && <LargeItem openStatus={open} ></LargeItem>}
    </>
  );
}