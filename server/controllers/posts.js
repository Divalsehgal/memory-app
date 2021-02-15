import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPost = async (req, res) => {
  //actual operation
  try {
    //as it is a async process that's why added await
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
  res.send("This works");
};
export const createPost = async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;
  const newPostMessage = new PostMessage({
    title,
    message,
    selectedFile,
    creator,
    tags,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {}
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No Post with that id${id}`);
    const updatedPost = {
      creator,
      title,
      message,
      tags,
      selectedFile,
      _id: id,
    };
    await PostMessage.findOneAndUpdate(id, updatedPost, {
      new: true,
    });

    res.json(updatedPost);
  } catch (error) {}
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No Post with that id${id}`);
    await PostMessage.findByIdAndRemove(id);
    console.log("delete");
    res.json({ message: "Post Deleted successfully" });
  } catch (error) {}
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No Post with that id${id}`);
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      { likeCount: post.likeCount + 1 },
      {
        new: true,
      }
    );

    res.json(updatedPost);
  } catch (error) {}
};
