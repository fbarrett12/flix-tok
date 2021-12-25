import FollowersColumn from "../containers/FollowersColumn";

const Home = () => {
  return (
    <div className="container">
        <FollowersColumn />
        <div className="feed">
            <h1>Home</h1>
        </div>
        <div className="suggested-box">
            <h1>Suggested</h1>
        </div>
    </div>
  );
}

export default Home;