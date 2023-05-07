import { Box, Container, Rating, Typography } from '@mui/material'
import React from 'react'

const Ratings = () => {
  return (
    <Container sx={{display:"flex"}} mt={7}>
        <Box m={3}>
            <Typography component="legend">Controlled</Typography>
            <Rating name="simple-controlled"  />

            <Typography component="legend">Read only</Typography>
            <Rating name="read-only"  readOnly />

            <Typography component="legend">Disabled</Typography>
            <Rating name="disabled"  disabled />

            <Typography component="legend">No rating given</Typography>
            <Rating name="no-value" value={null} />
        </Box>
        <Box ml={23} mt={3} >
            <Rating size='small' name="half-rating" defaultValue={2.5} precision={0.1} />
            <Rating size='medium' name="half-rating-read" defaultValue={5} precision={0.2}  />      
            <Rating size='large' name="half-rating-read" defaultValue={3} precision={0.5}  />      
        </Box>
    </Container>
  )
}

export default Ratings
