import * as api from "../api/index.js";
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: "FETCH_ALL",
      payload: data,
    });
  } catch (error) {}
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPosts(post);
    dispatch({
      type: "CREATE_POST",
      payload: data,
    });
  } catch (error) {}
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePosts(id, post);
    dispatch({
      type: "UPDATE_POST",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {

    await api.deletePosts(id);
    console.log(id)
    dispatch({
      type: "DELETE_POST",
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};


export const likePost = (id) => async (dispatch) => {
  try {

   const {data}= await api.likePosts(id);
    console.log(id)
    dispatch({
      type: "LIKE_POST",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};