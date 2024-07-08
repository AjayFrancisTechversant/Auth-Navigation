import axios from "axios";


//get all comments
export const getAllComments = async () => {
    try {
      let response = await axios.get(
        `https://dummyjson.com/comments?limit=5`,
      );
      return response.data.comments;
    } catch (error) {
      console.log(error);
    }
  };

//delete a comment


//add a new comment


//update a comment