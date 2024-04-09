import Post from "./Post";
import { PostListContext } from "../store/PostList.store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";
const PostList = () => {
  const { postList, fetching } = useContext(PostListContext);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.map((eachPost) => {
          return <Post key={eachPost.id} post={eachPost} />;
        })}
    </>
  );
};

export default PostList;
