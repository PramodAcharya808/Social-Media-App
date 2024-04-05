import "./Post.css";
import { FaHeart } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="card my-4 myPost" style={{ width: "18rem" }}>
      <IoIosCloseCircle className="closePostBtn" />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
        {post.tags.map((tag) => (
          <span class="badge text-bg-info tags">{"#"+tag}</span>
        ))}
        <div className="reactionBtn">
          <a href="#" className="btn btn-primary">
            Like <FaHeart className="heartLike"/> {post.reactionCount}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
