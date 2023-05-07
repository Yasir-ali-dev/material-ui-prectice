import {  Box, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const RadioGroups = () => {
  return (
    <Container sx={{display:"flex"}}>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="other"
                name="radio-buttons-group"
              
            >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Others" />
            </RadioGroup>
        </FormControl>
        <Box ml={20}>
          <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Fruits</FormLabel>
              <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="mango"
                  name="radio-buttons-group"
                  row
              >
              <FormControlLabel value="mango" control={<Radio />} label="Mango" />
              <FormControlLabel value="apple" control={<Radio />} label="Apple" />
              <FormControlLabel value="bannana" control={<Radio />} label="Bannana" />
              <FormControlLabel value="other" control={<Radio />} label="Others" disabled />
              </RadioGroup>
          </FormControl>
        </Box>
        <Box ml={10}>
          <Radio
            value="a"
            name="radio-buttons"
            size='small'
            color='error'
          />
          <Radio
            value="b"
            name="radio-buttons"
            size='small'
            color='success'
          />
        </Box>
    </Container>
  )
}

export default RadioGroups;
