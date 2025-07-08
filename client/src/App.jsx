import { useEffect, useRef, useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import BoardingPass from "./components/BoardingPass";
import axios from "axios";
import Options from "./components/Options";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import Button from "./components/Button";

const API_URL = "http://127.0.0.1:3000";

function App() {
  const [tracks, setTracks] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const [type, setType] = useState("top tracks");
  const [timeRange, setTimeRange] = useState("1 month");
  const [from, setFrom] = useState("MANILA, PHL");
  const [fromAbbr, setFromAbbr] = useState("MNL");
  const [to, setTo] = useState("VERMONT, US");
  const [toAbbr, setToAbbr] = useState("VT");

  const boardingPassRef = useRef(null);

  const handleCaptureClick = async () => {
    const el = document.querySelector("#boarding-pass");
    if (!el) {
      console.log("no element");
      return;
    }
    await new Promise((r) => setTimeout(r, 300));

    const canvas = await html2canvas(el, {
      useCORS: true,
      allowTaint: false,
      scale: 2,
      backgroundColor: null,
    });

    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "boarding-pass.png", "image/png");
  };

  async function getLogin() {
    // try {
    //   const res = await axios.get(API_URL + `/login`, {});
    //   console.log(res.data);
    // } catch (err) {
    //   console.error(err.response?.data || err.message);
    // }
    setIsLogin(true);
    window.location.href = "http://127.0.0.1:3000/login";
  }

  useEffect(() => {
    async function getSpotifyTop() {
      try {
        const res = await axios.get(API_URL + `/spotify-search`, {
          withCredentials: true,
          params: {
            type: type,
            time_range: timeRange,
          },
        });

        console.log(res.data);
        setTracks(res.data.items);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    }
    getSpotifyTop();
  }, [type, timeRange]);

  return (
    <>
      <Logo />
      <div className="w-fit mx-auto">
        <Button
          onClick={getLogin}
          text={"log in to spotify"}
          className={"w-fit"}
          fit={true}
        />
      </div>
      <div className="flex w-fit gap-10 mx-auto mt-5">
        <BoardingPass
          boardingPassRef={boardingPassRef}
          tracks={tracks}
          from={from}
          fromAbbr={fromAbbr}
          to={to}
          toAbbr={toAbbr}
          type={type}
        />
        <Options
          handleCaptureClick={handleCaptureClick}
          type={type}
          setType={setType}
          timeRange={timeRange}
          setTimeRange={setTimeRange}
          from={from}
          setFrom={setFrom}
          fromAbbr={fromAbbr}
          setFromAbbr={setFromAbbr}
          to={to}
          setTo={setTo}
          toAbbr={toAbbr}
          setToAbbr={setToAbbr}
        />
      </div>
    </>
  );
}

export default App;
