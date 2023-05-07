import { Box, Container, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Switch } from "@mui/material";
import React from "react";

const Switches = () => {
  return (
    <Container sx={{m:2,display:"flex"}}>
      <Box m={2}>
        <Switch defaultChecked />
        <Switch />
        <Switch disabled defaultChecked />
        <Switch disabled />
      </Box>
      <Box m={2}>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="checkedSwitch" />
        <FormControlLabel required control={<Switch />} label="Required" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>
      </Box>
      <Box m={2}>
        <Switch size="small" defaultChecked color="error"/>
        <Switch size="medium" color="success"/>
        <Switch size="large" disabled defaultChecked />
      </Box>

      <Box m={2}>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch  name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Switch  name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Switch checked name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
        
      </Box>
  
    </Container>

  );
};

export default Switches;
