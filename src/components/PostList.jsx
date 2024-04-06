import Post from "./Post";
import { PostListContext } from "../store/PostList.store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";
const PostList = () => {
  const { postList, AddAllPostFunc } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        AddAllPostFunc(obj.posts);
        setFetching(false);
      });
  }, []);

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
