import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="video.com"
          channel="jhagg_"
          description="this is the TIKTOK MERN build"
          song="Honesty - Hallman"
          likes={100}
          shares={10}
          messages={50}
        />
        <Video
          url="video.com"
          channel="jhagg_"
          description="this is the TIKTOK MERN build"
          song="Honesty - Hallman"
          likes={100}
          shares={10}
          messages={50}
        />
      </div>

      {/* App container */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
    </div>
  );
}

export default App;
