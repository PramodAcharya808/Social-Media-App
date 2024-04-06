import { useContext } from "react";
import "./Post.css";
import { FaHeart } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { PostListContext } from "../store/PostList.store";

const Post = ({ post }) => {
  const { DeletePost } = useContext(PostListContext);
  return (
    <>
      <div className="card my-4 myPost" style={{ width: "18rem" }}>
        <IoIosCloseCircle
          className="closePostBtn"
          onClick={() => DeletePost(post.id)}
        />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>

          <span className="badge text-bg tags" key={post.id}>
            {post.tags}
          </span>

          <div className="reactionBtn">
            <a className="btn btn-primary">
              Like <FaHeart className="heartLike" /> {post.reactions}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
