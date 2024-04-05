import { createContext, useReducer } from "react";

const PostListContext = createContext({
  PostList: [],
  AddPost: () => {},
  DeletePost: () => {},
});

const Reducer = () => {};

const AddPost = () => {};

const DeletePost = () => {};

// Post Template
const POST_TEMPLATE = [
  {
    id: 1,
    title: "FULL STACK ROADMAP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis Lorem ipsum dolor sit amet",
    userID: "AX1522",
    reactionCount: 10,
    tags: ["software", "computerscience", "fullstack"],
  },

  {
    id: 2,
    title: "GOING TO USA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis Lorem ipsum dolor sit amet",
    userID: "AX1523",
    reactionCount: 20,
    tags: ["vacation", "trip", "weekend"],
  },
  {
    id: 3,
    title: "LEARN MERN STACK",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, omnis Lorem ipsum dolor sit amet",
    userID: "AX1523",
    reactionCount: 36,
    tags: ["software", "computerscience", "fullstack"],
  },
];

const PostListContextProvider = (props) => {
  const [PostList, PostListDispatch] = useReducer(Reducer, POST_TEMPLATE);

  return (
    <PostListContext.Provider value={{ PostList, AddPost, DeletePost }}>
      {props.children}
    </PostListContext.Provider>
  );
};

export { PostListContext, PostListContextProvider };
