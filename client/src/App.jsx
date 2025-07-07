import { use, useEffect, useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import BoardingPass from "./components/BoardingPass";
import axios from "axios";

const API_URL = "https://spotiflight.yessa.hackclub.app";

function App() {
  const [tracks, setTracks] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!isLogin) return;
    async function getSpotifyTop() {
      try {
        const res = await axios.get(API_URL + `/spotify-search`, {});
        console.log(res.data);
        setTracks(res.data.items);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    }
    getSpotifyTop();
  }, [isLogin]);

  // window.location.href = "https://spotiflight.yessa.hackclub.app/login";

  async function getLogin() {
      try {
        const res = await axios.get(API_URL + `/login`, {});
        console.log(res.data);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    }

  return (
    <>
      <button onClick={getLogin}>log in to spotify</button>
      <Logo />
      {isLogin && (
        <>
          <BoardingPass tracks={tracks} />
        </>
      )}
    </>
  );
}

export default App;
