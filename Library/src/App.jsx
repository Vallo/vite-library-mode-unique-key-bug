import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, Typography, Tooltip } from '@mui/material';

function App() {
  const fixTheBug = false
  const key = 'random-key'
  return (
    <Tooltip title={'some title'}>
      <Grid key={fixTheBug ? key : null} container direction="column" alignItems="center">
        <span >{"some text"}</span>
      </Grid>
    </Tooltip>
  )
}

export default App
