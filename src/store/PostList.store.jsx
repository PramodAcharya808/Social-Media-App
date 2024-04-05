import { createContext, useReducer } from "react";

const PostListContext = createContext({
  PostList: [],
  AddPost: () => {},
  DeletePost: () => {},
});

const Reducer = () => {};

const AddPost = () => {};

const DeletePost = () => {};

const POST_TEMPLATE = [
  {
    id: 1,
    title: "FULL STACK ROADMAP",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis Lorem ipsum dolor sit amet",
    userID: "AX1522",
    reactionCount: 10,
  },

  {
    id: 2,
    title: "GOING TO USA",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis Lorem ipsum dolor sit amet",
    userID: "AX1523",
    reactionCount: 20,
  },
];

const PostListContextProvider = (props) => {
  const [PostList, PostListDispatch] = useReducer(Reducer, POST_TEMPLATE);

  return (
    <PostListContext.Provider value={{}}>
      {props.children}
    </PostListContext.Provider>
  );
};

export { PostListContext, PostListContextProvider };
