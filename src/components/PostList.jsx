import Post from "./Post";
import { PostListContext } from "../store/PostList.store";
import { useContext } from "react";

const PostList = () => {
  const { PostList } = useContext(PostListContext);
  return (
    <>
      {PostList.map((eachPost) => {
        return <Post key={eachPost.id} post={eachPost} />;
      })}
    </>
  );
};

export default PostList;
