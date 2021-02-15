import axios from "axios"

const url="http://localhost:5000/posts"

export const fetchPosts=()=>{
    return axios.get(url)
}

export const createPosts=async(newPost)=>{
  return await axios.post(url,newPost)
}

export const updatePosts=async(currentId,updatedPost)=>{
  return await axios.patch(`${url}/${currentId}`,updatedPost)

}

export const deletePosts=async(id)=>{
  return await axios.delete(`${url}/${id}`)

}


export const likePosts=async(id)=>{
  return await axios.patch(`${url}/${id}/likePost`)

}


