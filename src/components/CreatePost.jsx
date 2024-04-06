import { useContext, useRef } from "react";
import styles from "./CreatePost.module.css";
import { IoIosCreate } from "react-icons/io";
import { PostListContext } from "../store/PostList.store";

const CreatePost = () => {
  const { AddPost } = useContext(PostListContext);

  const postTitle = useRef("");
  const postDesc = useRef("");
  const postTags = useRef("");

  const createPostonSubmit = (event) => {
    event.preventDefault();
    const tagsArr = postTags.current.value.split(/(\s+)/);
    AddPost(postTitle.current.value, postDesc.current.value, tagsArr);
  };

  return (
    <form className={styles.formWrapper} onSubmit={createPostonSubmit}>
      <div className="mb-3 ">
        <label className="form-label">Add Title</label>
        <input
          ref={postTitle}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="On the way to Mumbai.."
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Add content</label>
        <textarea
          ref={postDesc}
          maxLength={500}
          className={`form-control ${styles.textarea}`}
          id="exampleInputPassword1"
          placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Add Tags</label>
        <input
          ref={postTags}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="#summer #weekends"
        />
      </div>

      <div className={`${styles.btnform} my-3 form-check text-center`}>
        <button type="submit" className={`${styles.createbtn} btn btn-primary`}>
          Create <IoIosCreate />
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
