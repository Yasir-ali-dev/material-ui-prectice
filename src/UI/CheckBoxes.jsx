import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material'
import React from 'react'

const CheckBoxes = () => {
  return (
    <Container sx={{display:"flex"}}>
    <Container>
      <Checkbox defaultChecked onChange={()=> console.log("changed")}/>
      <Checkbox size='small'/>
      <Checkbox disabled size='large'/>
      <Checkbox disabled checked size='medium'/>
      
      <Checkbox defaultChecked color='default'/>
      <Checkbox size='small' checked color='success'/>
      <Checkbox size='small' checked color='success'/>
      <Checkbox  checkedIcon={<Favorite color='error'/>} icon={<FavoriteBorder />} />
    </Container>
    <Container >
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked  name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox  name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox  name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </Container>
    <Container>
    <FormControl component="fieldset">
      <FormLabel component="legend">Label placement</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Top"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="start"
          control={<Checkbox />}
          label="Start"
          labelPlacement="end"
        />
        <FormControlLabel
          value="bottom"
          control={<Checkbox />}
          label="Bottom"
          labelPlacement="top"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="End"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
    </Container>
    </Container>
  )
}

export default CheckBoxes
