import { Box, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const Selects = () => {

    return (
    <Container sx={{display:"flex",margin:"5px"}} >
        <Box m={3}>
            <FormControl size='large'>
                <InputLabel id="demo-simple-select-label">Age </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    defaultValue={"20"}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box> 
        <Box m={3}>
            <FormControl  variant='standard' size='medium'>
                <InputLabel id="demo-simple-select-label">Age </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    defaultValue={"10"}
                >
                    <MenuItem value={""}>None</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box> 
        <Box m={3}>
            <FormControl variant='filled' size="small">
                <InputLabel id="demo-simple-select-label">Age </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    defaultValue={"20"}
                    autoWidth
                    
                >
                    <MenuItem value={10}>Ten </MenuItem>
                    <MenuItem value={20}>Twenty Thousand</MenuItem>
                    <MenuItem value={30}>Thirty Thousand</MenuItem>
                </Select>
            </FormControl>
        </Box> 
        <Box m={3}>
            <FormControl sx={{ m: 1, minWidth: 120 }} variant='filled'>
            <InputLabel id="demo-simple-select-helper-label">Age readOnly</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            inputProps={{readOnly:true}}
            label="Age"
            defaultValue={"10"}    
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>enter your age</FormHelperText>
        </FormControl>
        </Box>
        <Box m={3}>
            <FormControl  size="small" disabled>
                <InputLabel id="demo-simple-select-label">Age </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    defaultValue={"20"}
                    autoWidth
                    size="small"
                >
                    <MenuItem value={10}>Ten </MenuItem>
                    <MenuItem value={20}>Twenty Thousand</MenuItem>
                    <MenuItem value={30}>Thirty Thousand</MenuItem>
                </Select>
            </FormControl>
        </Box> 
        <Box m={3}>
            <FormControl variant='filled' size="small" error>
                <InputLabel id="demo-simple-select-label">Age </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    defaultValue={"20"}
                    autoWidth
                    size='large'
                    color='error'
                >
                    <MenuItem value={10}>Ten </MenuItem>
                    <MenuItem value={20}>Twenty Thousand</MenuItem>
                    <MenuItem value={30}>Thirty Thousand</MenuItem>
                </Select>
            </FormControl>
        </Box> 
        <Box m={3}>
            <FormControl required size="small" >
                <InputLabel id="demo-simple-select-label">Age </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    defaultValue={"20"}
                    autoWidth
                    size='large'
                    
                >
                    <MenuItem value={10}>Ten </MenuItem>
                    <MenuItem value={20}>Twenty Thousand</MenuItem>
                    <MenuItem value={30}>Thirty Thousand</MenuItem>
                </Select>
            </FormControl>
        </Box> 
    </Container>
  )
}

export default Selects
