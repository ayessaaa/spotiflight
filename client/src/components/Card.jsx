function Card({
  label,
  options,
  type = "options",
  answer,
  setAnswer,
  from,
  setFrom,
  to,
  setTo,
  fromAbbr,
  setFromAbbr,
  toAbbr,
  setToAbbr,
}) {
  return (
    <div className="bg-white w-80 rounded-3xl">
      <div className="bg-[#7195E1] h-10 w-full rounded-t-3xl"></div>
      <div className="bg-[#7195E1] h-10 w-fit pr-10 pl-5 -mt-6  text-white font-bold text-lg rounded-br-3xl rounded-tl-3xl">
        {label}
      </div>

      {type === "options" ? (
        <div className="flex text-center w-full px-3 py-4 gap-2">
          {options.map((option) => (
            <button
              key={option}
              className={`${
                answer == option ? "bg-blue-100" : "hover:bg-blue-50"
              } w-full py-3 px-3 rounded-3xl cursor-pointer transition-all `}
              onClick={()=>setAnswer(option)}
            >
              <p className="text-sm text-[#7195E1] font-bold">{option}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className=" w-full px-5 py-4 gap-2 flex flex-col">
          <div className="flex gap-2">
            <div>
              <p className="text-xs">From</p>
              <input
                className="bg-[#7195E1]/20 uppercase w-40 px-2 rounded placeholder:text-[#7195E1]/60 text-[#7195E1]"
                placeholder="MANILA, PHL"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              ></input>
            </div>
            <div>
              <p className="text-xs">(Abbr.)</p>
              <input
                className="bg-[#7195E1]/20 uppercase w-15 px-2 rounded placeholder:text-[#7195E1]/60 text-[#7195E1]"
                placeholder="MNL"
                value={fromAbbr}
                onChange={(e) => setFromAbbr(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <p className="text-xs">To</p>
              <input
                className="bg-[#7195E1]/20 uppercase w-40 px-2 rounded placeholder:text-[#7195E1]/60 text-[#7195E1]"
                placeholder="VERMONT, US"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              ></input>
            </div>
            <div>
              <p className="text-xs">(Abbr.)</p>
              <input
                className="bg-[#7195E1]/20 uppercase w-15 px-2 rounded placeholder:text-[#7195E1]/60 text-[#7195E1]"
                placeholder="VT"
                value={toAbbr}
                onChange={(e) => setToAbbr(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
      )}

      <div className="bg-[#7195E1] h-4 w-full rounded-b-3xl"></div>
    </div>
  );
}

export default Card;
