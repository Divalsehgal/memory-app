import React, { useEffect, useState } from "react";
import { Button, Paper, Typography, TextField } from "@material-ui/core";
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/post";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
function Form({ currentId, setCurrentId }) {
  const classes = useStyles();
  const editPost = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    tags: "",
    selectedFile: "",
    message: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost(postData));

      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  useEffect(() => {
    if (editPost) setPostData(editPost);
  }, [editPost]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <>
      <Paper className={classes.paper}>
        <form
          autoComplete="off "
          noValidate
          className={`${classes.root} ${classes.form} `}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            {currentId ? "Update Memory" : "Creating a Memory"}
          </Typography>
          <TextField
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) => {
              setPostData({ ...postData, creator: e.target.value });
            }}
          />
          <TextField
            name="title"
            variant="outlined"
            value={postData.title}
            label="Title"
            fullWidth
            onChange={(e) => {
              setPostData({ ...postData, title: e.target.value });
            }}
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            value={postData.message}
            fullWidth
            onChange={(e) => {
              setPostData({ ...postData, message: e.target.value });
            }}
          />
          <TextField
            name="tags"
            variant="outlined"
            value={postData.tags}
            label="Tags"
            fullWidth
            onChange={(e) => {
              setPostData({ ...postData, tags: e.target.value.split(",") });
            }}
          />
          <div className={classes.fileInput}>
            <FileBase
              type="File"
              miltiple={false}
              value={postData.selectedFile}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            type="submit"
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
}

export default Form;
