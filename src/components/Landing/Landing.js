import React from 'react'
import { Grid, Typography } from '@mui/material'


const Landing = () => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
            <Typography variant="h2" textAlign="center">Nathan</Typography>
            <Typography variant="h2" textAlign="center">Van Orman</Typography>
        </Grid>
        <Grid item>
            <Typography variant="h4" color="white" >Web Developer</Typography>
        </Grid>
    </Grid>
  )
}

export default Landing
