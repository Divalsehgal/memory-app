import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import {  Grid } from "@material-ui/core";
function Posts(props) {
  const classes = useStyles();
  const post = useSelector((state) => state.posts);
  return !post.length ? (
   "No  posts"
 
  ) :  (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {post.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={props.setCurrentId}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
