import { Box, Container, TextField } from '@mui/material'
import React from 'react'

const TextFieldComponent = () => {
  return (
    <Container sx={{m:3,display:"flex"}}>
      <Box m={1}>
        <TextField id="outlined-basic" label="Age" variant="outlined" />
        <TextField id="filled-basic" label="Name" variant="filled" /> 
        <TextField id="standard-basic" label="StandardVariant" variant="standard" />
      </Box>
      <Box m={1}>
      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="required"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="disabled"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        
      </Box>
      <Box m={1}>
      <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />  
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </Box>
      <Box>
      <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
            sx={{margin:'10px'}}
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="error"
          helperText="Incorrect entry."
        />
      </Box>
      <Box m={1}>
      <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={5}
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="standardVariant"
          multiline
          variant='standard'
          color='warning'
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={3}
          defaultValue="filledVariant"
          variant='filled'
          color='success'
        />
      </Box>
      <Box>
      <TextField
          label="small Size"
          id="filled-size-small"
          defaultValue="filledSmall"
          variant="filled"
          size="small"
          margin='normal'
          color='secondary'
        />
        <TextField
          label="normalSize"
          id="filled-size-normal"
          defaultValue="NormalSize"
          variant="filled"
          margin='dense'
          error
        />
      </Box>
    </Container>
  )
}

export default TextFieldComponent
