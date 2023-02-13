import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://player.vimeo.com/progressive_redirect/playback/769576744/rendition/720p/file.mp4?loc=external&oauth2_token_id=57447761&signature=d6f6656f72a88450df65bbd196e74d812bb8d5b5e81f7210a1ca000f9a39c06b"
          likes={496}
          messages={71}
          shares={33}
          channel="sadmanR07"
          description="Beautiful view of hot air-balloon"
          song="Jodi tor daak shune keu na ashe"
        />
        <Video
          url="https://player.vimeo.com/external/559857411.sd.mp4?s=9872177190d3d4b127ff889adf973162a7886f9d&profile_id=165&oauth2_token_id=57447761"
          likes={589}
          messages={52}
          shares={23}
          channel="rahman99"
          description="Airplane ride on a holiday"
          song="Hall of Fame"
        />
      </div>

      {/* app container */}
      {/* videos */}
      {/* <Video/> */}
      {/* <Video/> */}
      {/* <Video/> */}
      {/* <Video/> */}
      {/* <Video/> */}
    </div>
  );
}

export default App;
