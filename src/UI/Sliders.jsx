import { VolumeDown, VolumeUp } from '@mui/icons-material'
import { Box, Container, Slider, Stack } from '@mui/material'
import React from 'react'

const Sliders = () => {
  return (
    <Container sx={{margin:"5px", display:"flex"}}>
      <Box width={300}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume"/>
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      </Box>
      <Box width={300}>
        <Slider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay='auto'
        />
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
       </Box>
       <Box width={300}>
        <Slider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay='auto'
            step={10}
            marks
            min={10}
            max={100}
            color='secondary'
        />
        <Slider defaultValue={20} step={5} min={0} max={50} marks  aria-label="Default" valueLabelDisplay="auto" />
       </Box>


    </Container>
  )
}

export default Sliders
