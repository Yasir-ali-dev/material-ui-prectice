import { BeachAccess, FormatAlignCenter, FormatAlignLeft, FormatAlignRight, FormatBold, FormatItalic, Image, Work } from '@mui/icons-material'
import { Avatar, Box, Container, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'

const DividerComponent = () => {
  return (
    <Container sx={{m:3,display:"flex"}}>
      <Stack spacing={1} margin={3}>
        <List  
            component="nav"     
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: '',
            }}
            aria-label="mailbox folders">
        <ListItem >
            <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem  divider>
            <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem >
            <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem >
            <ListItemText primary="Spam" />
        </ListItem>
        </List>
      </Stack>
      <Box >
      <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <Divider variant="inset"  />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Work />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccess />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
      <Divider variant="middle" component="li" /> 
    </List>
    </Box>
    <Stack spacing={1} margin={3}>
        <Typography variant='p'>
            Lorem ipsum dolor sit amet consect
        </Typography>
        <Divider>Center</Divider>
        <Typography variant='p'>
            Lorem ipsum dolor sit amet consectet
        </Typography>
        <Divider textAlign='left'>Left</Divider>
        <Typography variant='p'>
            Lorem ipsum dolor sit amet consectet
        </Typography>
        <Divider textAlign='right'>Right</Divider>
    </Stack>
    <Stack spacing={1} margin={3} direction={"row"}>
       <FormatAlignLeft />
        <FormatAlignCenter />
        <FormatAlignRight />
        <Divider  flexItem orientation="vertical" />
        <FormatBold />
        <FormatItalic />
    </Stack>
    <Stack spacing={1} margin={3}>
       <FormatAlignLeft />
        <FormatAlignCenter />
        <FormatAlignRight />
        <Divider  flexItem  variant='middle'/>
        <FormatBold />
        <FormatItalic />
    </Stack>

    </Container>
  )
}

export default DividerComponent
