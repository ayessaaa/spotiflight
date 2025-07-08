import { useEffect, useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import BoardingPass from "./components/BoardingPass";
import axios from "axios";
import Options from "./components/Options";

const API_URL = "http://127.0.0.1:3000";

function App() {
  const [tracks, setTracks] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  async function getSpotifyTop() {
    try {
      const res = await axios.get(API_URL + `/spotify-search`, {
        withCredentials: true,
      });
      console.log(res.data);
      setTracks(res.data.items);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  }

  async function getLogin() {
    // try {
    //   const res = await axios.get(API_URL + `/login`, {});
    //   console.log(res.data);
    // } catch (err) {
    //   console.error(err.response?.data || err.message);
    // }
    window.location.href = "http://127.0.0.1:3000/login";
  }

  return (
    <>
      <button onClick={getLogin}>log in to spotify</button>
      <button onClick={getSpotifyTop}>get spotify</button>
      <Logo />
      <div className="flex w-fit gap-10 mx-auto">
        <BoardingPass tracks={tracks} />
        <Options />
      </div>
    </>
  );
}

export default App;
