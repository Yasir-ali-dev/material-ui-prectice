import {  Box, Button, ButtonGroup, Container, Fab } from '@mui/material'
import { AddBox, EditNotifications, Navigation } from '@mui/icons-material';
import React from 'react'

const Buttons = () => {
  return (
    <Container sx={{marginTop:"2px",display:"flex"}}>
        <Box m={5}>
        <ButtonGroup variant="contained" size='large' color="secondary" aria-label="outlined primary button group">
            <Button onClick={()=> console.log("one")}>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
        </Box>
        <Box m={5}>
        <ButtonGroup variant="text" size='small'   orientation="vertical" aria-label="outlined primary button group">
            <Button onClick={()=> console.log("one")}>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
        </Box>
        <Box m={5}>
        <ButtonGroup variant="contained" size='medium' aria-label="outlined primary button group">
            <Button onClick={()=> console.log("one")}>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
        </Box>
      <Box m={5}>
        <ButtonGroup variant="contained" size='small' color='secondary' orientation='vertical' disabled aria-label="outlined primary button group">
            <Button onClick={()=> console.log("one")}>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
      </Box>
       <Box mt={5} >
          <Fab color="primary"size='small' aria-label="add">
               <AddBox />
            </Fab>
            <Fab color="secondary" size='medium' aria-label="edit" sx={{marginLeft:"10px"}}>
                <EditNotifications />
            </Fab>
            <Fab variant="extended" disabled sx={{marginLeft:"10px"}}>
                <Navigation sx={{ mr: 1 }} />
                Navigate
            </Fab>
       </Box>

    </Container>
  );
}
export default Buttons;
