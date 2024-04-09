import { createContext, useEffect, useReducer, useState } from "react";

// POST LIST CONTEXT PROVIDER
const PostListContext = createContext({
  postList: [],
  AddPost: () => {},
  DeletePost: () => {},
  fetching: false,
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
  const AddPost = (post) => {
    const addPost = {
      type: "ADD_POST",
      payload: post,
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

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        AddAllPostFunc(obj.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
      console.log("Cleaning up...");
    };
  }, []);

  return (
    <PostListContext.Provider
      value={{ postList, AddPost, DeletePost, fetching }}
    >
      {props.children}
    </PostListContext.Provider>
  );
};

export { PostListContext, PostListContextProvider };
