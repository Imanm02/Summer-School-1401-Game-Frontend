import { Container, Grid, Paper, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react'

import InputFields from './Fields'


const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
  },
}))



const Index = () => {
  const classes = useStyles();

  return <>
    <Container className={classes.container}>
      <Grid
        container item
        justifyContent='center'
        alignItems='center'
        xs={12} sm={8} md={4}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid item container>
              <Grid
                container
                item
                direction='column'
                justifyContent='center'
                spacing={2}>
                <Grid item>
                  <Typography gutterBottom component='h1' variant='h2' align='center'>
                    {'ورود'}
                  </Typography>
                </Grid>
                <InputFields />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </>;
}

export default (Index);