import { Avatar, AvatarGroup, Container, Stack } from '@mui/material'
import React from 'react'

import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Avatars = () => {
  return (
    <Container sx={{m:2, display:"flex"}}>
        <Stack direction={"row"} spacing={1} margin={1}>
            <Avatar alt="john" src='https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
            <Avatar alt="john" src='https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
            <Avatar alt="john" src='https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
        </Stack>
        <Stack direction={"column"} spacing={1} margin={1}>
            <Avatar>H</Avatar>
            <Avatar sx={{ bgcolor: "orange" }}>N</Avatar>
        </Stack>
        <Stack direction={"row"} spacing={1} margin={1}>
            <Avatar sx={{bgcolor:"chocolate",width:35,height:35}}>H</Avatar>
            <Avatar sx={{ bgcolor: "orange",width:40,height:40 }}>N</Avatar>
        </Stack>
        <Stack direction={"row"} spacing={1} margin={1}>
            <Avatar variant='rounded'>
                <FolderIcon />
            </Avatar>
            <Avatar sx={{ bgcolor: "pink" }}>
            <   PageviewIcon />
            </Avatar>
            <Avatar variant='square' sx={{ bgcolor: "green" }}>
                <AssignmentIcon />
            </Avatar>
        </Stack>
        <Stack direction={"row"} spacing={1} margin={1}>
            <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src='https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" variant='square' />
                <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1682809462969-7442ebfc1ee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
        </Stack>
        <Stack direction={"row"} spacing={1} margin={1}>
            <AvatarGroup total={20}>
                <Avatar alt="Remy Sharp" src='https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" variant='square' />
                <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1682809462969-7442ebfc1ee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
        </Stack>
    </Container>
  )
}

export default Avatars
