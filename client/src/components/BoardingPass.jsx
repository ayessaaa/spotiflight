function BoardingPass({tracks}) {
  return (
    <div className="bg-white w-150 rounded-3xl mx-auto relative overflow-hidden shadow-xl">
      <img
        src="./imgs/paper.png"
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply pointer-events-none opacity-60"
        alt=""
      />
      <div className="relative mix-blend-multiply">
        <div className="bg-white w-150 rounded-3xl mx-auto">
          <div className="bg-[#779DEE] h-15 w-full rounded-t-3xl flex pt-3 pl-3 pr-9 gap-4 ">
            <img src="./imgs/spotify.png" className="size-13 mt-3"></img>
            <div className="flex-1">
              <p className=" text-white font-semibold text-xl">BOARDING PASS</p>
            </div>
            <div className="text-right">
              <p className=" text-white font-semibold text-xl">SPOTIFLIGHT</p>
              <p className=" text-[#3E65BA] text-xs -mt-1">
                Spotify Top 5 Songs
              </p>
            </div>
          </div>
          <div className="bg-[#779DEE] h-13 w-80 rounded-br-4xl pl-20">
            <p className="text-[#3E65BA] -mt-2 text-xs">Passenger</p>
            <p className=" text-white font-semibold text-lg -mt-1">AYE</p>
          </div>
          <div className="flex px-17 mt-7">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#5F83D2]">MNL</p>
              <p className="text-xs">FROM</p>
            </div>
            <div className="flex-1">
              <img src="./imgs/dash.png" className="h-10 mx-auto" />
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#5F83D2]">VT</p>
              <p className="text-xs">TO</p>
            </div>
          </div>
          <div className="px-13 mt-5 flex gap-11">
            <div>
              <p className="text-sm">Flight</p>
              <p className="font-semibold  text-[#779DEE] -mt-1">SP 028</p>
            </div>
            <div>
              <p className="text-sm">Seat</p>
              <p className="font-semibold text-[#779DEE] -mt-1">19A</p>
            </div>
            <div>
              <p className="text-sm">Gate</p>
              <p className="font-semibold text-[#779DEE] -mt-1">5</p>
            </div>
            <div>
              <p className="text-sm">Terminal</p>
              <p className="font-semibold text-[#779DEE] -mt-1">4A</p>
            </div>
          </div>
          <div className="grid grid-cols-[8%_77%_15%] px-13 mt-5 text-[15px] gap-y-1">
            <p></p>
            <p className="text-xs">Boarding Tracks</p>
            <p className="text-xs">Duration</p>

            {tracks.map((track, i)=>(<><p key={i+1} className="font-bold">{i+1}</p>
            <p key={track.name}>{track.name} - {track.artists.map((a) => a.name).join(", ")}</p>
            <p key={track.duration_ms} className="text-[#779DEE]">{`${String(Math.floor(track.duration_ms / 60000)).padStart(1, '0')}:${String(Math.floor((track.duration_ms % 60000) / 1000)).padStart(2, '0')}`}</p></>))}

          </div>

          <img src="./imgs/dash2.png" className="mt-5"></img>

          <div className="px-8">
            <p className="text-center text-xl font-bold mt-1">BOARDING PASS</p>
            <div className="grid  gap-y-1 grid-cols-[25%_20%_20%_35%] mt-4">
              <div>
                <p className="text-sm">Passenger</p>
                <p className="text-[#779DEE] font-bold -mt-0.5">AYE</p>
              </div>
              <div>
                <p className="text-sm">Class</p>
                <p className="text-[#779DEE] font-bold -mt-0.5">FIRST</p>
              </div>
              <div>
                <p className="text-sm">Flight</p>
                <p className="font-bold -mt-0.5">SP 028</p>
              </div>
              <div>
                <p className="text-sm">Departure</p>
                <p className="font-bold -mt-0.5">07 JUN 2025</p>
              </div>

              <div className="col-span-2">
                <p className="text-sm">From</p>
                <p className="text-[#779DEE] font-bold -mt-0.5">MANILA, PHL</p>
              </div>
              <div>
                <p className="text-sm">Gate</p>
                <p className="font-bold -mt-0.5">5</p>
              </div>
              <div>
                <p className="text-sm">Arrival</p>
                <p className="font-bold -mt-0.5">07 JUL 2025</p>
              </div>

              <div className="col-span-2">
                <p className="text-sm">To</p>
                <p className="text-[#779DEE] font-bold -mt-0.5">VERMONT, US</p>
              </div>
              <div>
                <p className="text-sm">Seat</p>
                <p className="font-bold -mt-0.5">21B</p>
              </div>
              <div>
                <img src="./imgs/barcode.png"></img>
              </div>
            </div>
          </div>
          <div className="h-11 bg-[#779DEE] rounded-b-3xl mt-3 items-center">
            <div className="flex  mx-auto w-fit h-fit py-2 gap-1">
              <img src="./imgs/spotifywhite.png" className="size-7"></img>
              <p className="text-center text-white font-bold my-auto text-sm">
                spotiflight.yessa.hackclub.app
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardingPass;
