const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1>There are no posts available</h1>

      <button className="btn btn-primary" onClick={onGetPostsClick}>
        Get Posts From Server
      </button>
    </center>
  );
};
export default WelcomeMessage;
