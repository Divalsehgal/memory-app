import { AppBar, Container, Grow, Grid, Typography } from "@material-ui/core";
import React,{useEffect,useState} from "react";
import Form from "../components/Form/Form.js";
import icon from "../assets/icon.png";
import useStyles from "../styles"
import {useDispatch} from "react-redux"

import Posts from "../components/Posts"
import { getPosts } from "../actions/post.js";

function Home(props) {
    const classes=useStyles();
    const [currentId,setCurrentId]=useState(0);
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getPosts())
         }, [currentId, dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={icon} alt="memories" height={50} width={50} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
          className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default Home;
