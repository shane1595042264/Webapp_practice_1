import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memories from './images/waestem.png';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
const App = () => {
    const classes = useStyles();
    return(
<Container maxidth = "sm">
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography variant = "h2" alighn="center">
            
            Memories

            </Typography>
            <img className={classes.image} src={memories} alt="memories" heighth = "60"/>

            
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3} >
                    <Grid item xs={12} sm={7}>
                    <Posts/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <Form/>
                    </Grid>

                </Grid>
            </Container>
        </Grow>

</Container>
    );
}

export default App;