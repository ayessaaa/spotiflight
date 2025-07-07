import { useEffect, useState } from 'react'
import './App.css'
import Logo from './components/Logo'
import BoardingPass from './components/BoardingPass'
import axios from "axios"

const API_URL = "https://f0fc-120-29-68-8.ngrok-free.app"

function App() {

  const [tracks, setTracks] = useState([])

  useEffect(()=>{
    async function getSpotifyTop(query) {
    try {
      const res = await axios.get(API_URL + `/spotify-search`, {
        
      });
      console.log(res.data);
      setTracks(res.data.items);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  }
  getSpotifyTop()
  }, [])

  

  return (
    <>
    <Logo/>
    <BoardingPass tracks={tracks}/>
    </>
  )
}

export default App
