import React from 'react'
import { Grid, Typography } from '@mui/material'


const Landing = () => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
            <Typography variant="h1" color="white" >Nathan Van Orman</Typography>
        </Grid>
        <Grid item>
            <Typography variant="h4" color="white" >Web Developer</Typography>
        </Grid>
    </Grid>
  )
}

export default Landing
