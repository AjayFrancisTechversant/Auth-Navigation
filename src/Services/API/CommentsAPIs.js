import axios from 'axios';

//get all comments
export const getAllComments = async () => {
  try {
    let response = await axios.get(`https://dummyjson.com/comments?limit=5`);
    return response.data.comments;
  } catch (error) {
    console.log(error);
  }
};

//add a new comment
export const addNewComment = async (newCommentDetails) => {
  try {
    const {body,postId,userId}=newCommentDetails
    let response = await axios.post(
      'https://dummyjson.com/comments/add',
      {
        body,
        postId,
        userId,
      },
      {
        headers: {'Content-Type': 'application/json'},
      },
    );
    return response.data;
  } catch (error) {
    console.log(error,'jj');
  }
};
//delete a comment

//update a comment

