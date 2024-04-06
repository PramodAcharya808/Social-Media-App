import Post from "./Post";
import { PostListContext } from "../store/PostList.store";
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, AddAllPostFunc } = useContext(PostListContext);

  const getAllPostsHandler = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        AddAllPostFunc(obj.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage getAllPostsHandler={getAllPostsHandler} />
      )}
      {postList.map((eachPost) => {
        return <Post key={eachPost.id} post={eachPost} />;
      })}
    </>
  );
};

export default PostList;
