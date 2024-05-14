import React from 'react'
import Navbar from '../components/Navbar'
import Bottombar from '../components/Bottombar'
import { Grid, Container, Typography, CardActionArea, CardMedia, Card, Box, TextField, Button} from '@mui/material'
import makephoto from '../public/makephoto.png'
import { Link } from 'react-router-dom'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { EmailOutlined } from '@mui/icons-material'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function Add() {
  return (
    <Box 
        sx={{
        '& .MuiTextField-root': { m: 1, width: '28ch' },
        }}
        
    >
      <Navbar/>
        <Container sx={{alignItems:'center'}}>
            <Typography mt={2} pb={2} fontWeight={550} gutterBottom variant="h7" component="div" >
                Добавить жалобу
            </Typography>
                <Grid pb={2} pl={9} item xs={12} sm={4} md={1}>
                    <Card sx={{maxWidth: 143}}>
                        <CardActionArea>
                        <CardMedia
                            component="img"
                            height="142"
                            image={makephoto}
                            alt="green iguana"
                        />
                        </CardActionArea>
                    </Card>
                </Grid>
                <TextField
                    id="outlined-multiline-static"
                    label="Опишите проблему"
                    multiline
                    rows={2}/>
                <Box mt={1} sx={{display:'flex', justifyContent:'space-between'}}>
                    <Button variant="outlined" color="success">Отмена</Button>
                    <Link to={"/login"} underline="none"><Button variant="contained" color="success">Отправить</Button></Link>
                </Box>
                <Typography mt={4} pb={1} fontWeight={550} sx={{color:"green"}} gutterBottom variant="h5" component="div" >
                    МП "Тазалык"
                </Typography>
                <Typography mt={2} pb={1} fontWeight={450} sx={{color:"black"}} gutterBottom variant="h7" component="div" >
                    <LocationOnOutlinedIcon color="success" /> ул. Ростовская №19б
                </Typography>
                <Typography mt={1} pb={1} fontWeight={450} sx={{color:"black"}} gutterBottom variant="h7" component="div" >
                    <EmailOutlined color="success"/> mptazalyk@mail.ru
                </Typography>
                <Typography mt={1} pb={1} fontWeight={450} sx={{color:"black"}} gutterBottom variant="h7" component="div" >
                    <LocalPhoneOutlinedIcon color="success"/> Тел:34-51-02
                </Typography>

        </Container>
      <Bottombar />
    </Box>
  )
}

export default Add
