import { MailOutlineOutlined, MailOutlined } from '@mui/icons-material'
import { Badge, Container, Stack } from '@mui/material'
import React from 'react'

const BadgesComponent = () => {
  return (
    <Container sx={{m:2, display:"flex"}}> 
        <Stack spacing={3} direction={"row"}>
            <Badge badgeContent={5} color="secondary">
            <MailOutlined color="action" />
            </Badge>
            <Badge badgeContent={4} color="secondary">
                <MailOutlineOutlined color="primary" />
            </Badge>
        </Stack>
        <Stack spacing={3} direction={"row"}>
        <Badge color="secondary" badgeContent={1}>
          <MailOutlined />
          </Badge>
          <Badge color="secondary" badgeContent={0} showZero>
          <MailOutlineOutlined />
          </Badge>
        </Stack>

        <Stack spacing={3} direction={"row"}  >
          <Badge color="secondary" badgeContent={199} max={99}>
            <MailOutlined />
            </Badge>
            <Badge color="secondary" badgeContent={100} variant='dot' >
            <MailOutlineOutlined />
          </Badge>
        </Stack>

    
    </Container>
  )
}

export default BadgesComponent
