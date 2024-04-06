import { createContext, useReducer, useState } from "react";

// POST LIST CONTEXT PROVIDER
const PostListContext = createContext({
  postList: [],
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
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_ALL_POST") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};
// POST LIST CONTEXT PROVIDER WRAPPING
const PostListContextProvider = (props) => {
  const [postList, PostListDispatch] = useReducer(Reducer, []);

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
        body: description,
        reactions: 0,
        tags: tag,
      },
    };

    PostListDispatch(addPost);
  };

  // ADD POST FUNCTION
  const AddAllPostFunc = (posts) => {
    const addAllPost = {
      type: "ADD_ALL_POST",
      payload: {
        posts,
      },
    };
    PostListDispatch(addAllPost);
  };

  return (
    <PostListContext.Provider
      value={{ postList, AddPost, DeletePost, AddAllPostFunc }}
    >
      {props.children}
    </PostListContext.Provider>
  );
};

export { PostListContext, PostListContextProvider };
