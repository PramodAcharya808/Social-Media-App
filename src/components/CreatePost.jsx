import { Form, redirect } from "react-router-dom";
import styles from "./CreatePost.module.css";
import { IoIosCreate } from "react-icons/io";
import { useContext } from "react";
import { PostListContext } from "../store/PostList.store";

const CreatePost = () => {
  const { AddPost } = useContext(PostListContext);
  return (
    <Form method="POST" className={styles.formWrapper}>
      <div className="mb-3 ">
        <label className="form-label">UserID</label>
        <input
          name="userId"
          className="form-control mb-2"
          aria-describedby="emailHelp"
          placeholder="Enter your user ID"
        />

        <label className="form-label">Add Title</label>
        <input
          name="title"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="On the way to Mumbai.."
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Add content</label>
        <textarea
          name="body"
          maxLength={500}
          className={`form-control ${styles.textarea}`}
          id="exampleInputPassword1"
          placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Add Tags</label>
        <input
          name="tags"
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
    </Form>
  );
};

export const getPostsAction = async (formDataObj, AddPost) => {
  const formData = await formDataObj.request.formData();
  const post = Object.fromEntries(formData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then(console.log(post));
  // AddPost(post);
  return redirect("/");
};

export default CreatePost;
