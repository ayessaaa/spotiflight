import { useEffect, useRef, useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import BoardingPass from "./components/BoardingPass";
import axios from "axios";
import Options from "./components/Options";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

const API_URL = "http://127.0.0.1:3000";

function App() {
  const [tracks, setTracks] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const boardingPassRef = useRef(null);

  const handleCaptureClick = async () => {
  const el = document.querySelector("#boarding-pass");
  if (!el) {
    console.log("no element");
    return;
  }

  // Give the browser time to fully render
  await new Promise((r) => setTimeout(r, 300));

  const canvas = await html2canvas(el, {
    useCORS: true,
    allowTaint: false,
    scale: 2,
    backgroundColor: null, // keep transparency
  });

  const dataURL = canvas.toDataURL("image/png");
  downloadjs(dataURL, "boarding-pass.png", "image/png");
};


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
        <BoardingPass boardingPassRef={boardingPassRef} tracks={tracks} />
        <Options handleCaptureClick={handleCaptureClick} />
      </div>
    </>
  );
}

export default App;
