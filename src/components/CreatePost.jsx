import styles from "./CreatePost.module.css";

const CreatePost = () => {
  return (
    <form className={styles.formWrapper}>
      <div className="mb-3 ">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className={`${styles.btnform} my-3 form-check text-center`}>
        <button type="button" className={`${styles.createbtn} btn btn-primary`}>
          Create
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
