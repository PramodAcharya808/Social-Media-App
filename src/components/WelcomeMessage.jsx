const WelcomeMessage = ({getAllPostsHandler}) => {
  return (
    <div className="text-center">
      <h2 style={{ margin: "50% 0 10% 0" }}>Be the first one to post ...</h2>
      <button className="btn btn-primary" style={{ margin: "0 0 50% 0" }} onClick={getAllPostsHandler}>Get posts from server</button>
    </div>
  );
};

export default WelcomeMessage;
