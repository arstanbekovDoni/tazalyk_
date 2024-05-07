import React from 'react'
import Navbar from '../components/Navbar'
import Bottombar from '../components/Bottombar'
import { Grid, Container, Typography, CardActionArea, CardMedia, Card, Box, TextField, Button, Icon, Avatar } from '@mui/material'
import makephoto from '../public/makephoto.png'

function Add() {
  return (
    <Box 
        sx={{
        '& .MuiTextField-root': { m: 1, width: '28ch' },
        width: '100%'
        }}
        
    >
      <Navbar/>
        <Container>
            <Typography mt={6} pb={2} fontWeight={550} gutterBottom variant="h7" component="div" >
                Добавить жалобу
            </Typography>
                <Grid pb={2} item xs={12} sm={4} md={1}>
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
                <Button mr={2} variant="outlined" color="success">Отмена</Button>
                <Button variant="contained" color="success">+  Отправить</Button>
                <Typography mt={2} pb={1} fontWeight={550} sx={{color:"green"}} gutterBottom variant="h5" component="div" >
                    МП "Тазалык"
                </Typography>
                <Typography mt={2} pb={1} fontWeight={450} sx={{color:"green"}} gutterBottom variant="h7" component="div" >
                    ул. Ростовская №19б
                </Typography>
                <Typography mt={2} pb={1} fontWeight={450} sx={{color:"green"}} gutterBottom variant="h7" component="div" >
                    mptazalyk@mail.ru
                </Typography>
                <Typography mt={2} pb={1} fontWeight={450} sx={{color:"green"}} gutterBottom variant="h7" component="div" >
                    Тел:34-51-02
                </Typography>

        </Container>
      <Bottombar />
    </Box>
  )
}

export default Add
