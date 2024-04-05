import { createContext, useReducer, useState } from "react";

// POST LIST CONTEXT PROVIDER
const PostListContext = createContext({
  PostList: [],
  AddPost: () => {},
  DeletePost: () => {},
});

//REDUCER PURE FUNCTION
const Reducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => {
      return post.id != action.payload;
    });
  }

  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

// POST LIST CONTEXT PROVIDER WRAPPING
const PostListContextProvider = (props) => {
  const [PostList, PostListDispatch] = useReducer(Reducer, []);

  // DELETE POST FUNCTION
  const DeletePost = (postID) => {
    const dltPost = {
      type: "DELETE_POST",
      payload: postID,
    };

    PostListDispatch(dltPost);
  };

  // ADD POST FUNCTION
  const AddPost = (title, description, tag) => {
    const addPost = {
      type: "ADD_POST",
      payload: {
        id: Date.now().toString(),
        title: title,
        description: description,
        reactionCount: 0,
        tags: tag,
      },
    };

    PostListDispatch(addPost);
  };

  return (
    <PostListContext.Provider value={{ PostList, AddPost, DeletePost }}>
      {props.children}
    </PostListContext.Provider>
  );
};

export { PostListContext, PostListContextProvider };
