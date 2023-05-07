import { Box, Container, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
const ToggleButtons = () => {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
  
      setAlignment(newAlignment);
    };
  
  return (
    <Container sx={{m:2,display:"flex"}}>
      <Box m={1}>
        <ToggleButtonGroup
            value={alignment}
            color='primary'
            onChange={handleAlignment}
            exclusive
            aria-label="text alignment"
        >
        <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon/>
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustifyIcon />
        </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box m={1}>
        <ToggleButtonGroup
            value={alignment}
            onChange={handleAlignment}
            exclusive
            aria-label="text alignment"
            size='small'
            color='secondary'

        >
        <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon/>
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustifyIcon />
        </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box m={1}>
        <ToggleButtonGroup
          value={alignment}
          onChange={handleAlignment}
        exclusive
        color='success'
        size='large'
        aria-label="text alignment"
        >
        <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon/>
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustifyIcon />
        </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box m={1}>
        <ToggleButtonGroup
          value={alignment}
          orientation='vertical'
          onChange={handleAlignment}
        exclusive
        color='success'
        size='large'
        aria-label="text alignment"
        >
        <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon/>
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustifyIcon />
        </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      
    </Container>
  )
}

export default ToggleButtons
