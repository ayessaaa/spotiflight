import Button from "./Button";
import Card from "./Card";

function Options({
  handleCaptureClick,
  type,
  setType,
  timeRange,
  setTimeRange,
  from,
  setFrom,
  fromAbbr,
  setFromAbbr,
  to,
  setTo,
  toAbbr,
  setToAbbr,
}) {
  return (
    <div className="flex flex-col gap-5">
      <Card
        label="type"
        options={["top tracks", "top artists"]}
        answer={type}
        setAnswer={setType}
      />
      <Card
        label="time range"
        options={["1 month", "6 months", "1 year"]}
        answer={timeRange}
        setAnswer={setTimeRange}
      />
      <Card
        label="travel info"
        options={["1 month", "6 months", "1 year"]}
        type="form"
        from={from}
        setFrom={setFrom}
        fromAbbr={fromAbbr}
        setFromAbbr={setFromAbbr}
        to={to}
        setTo={setTo}
        toAbbr={toAbbr}
        setToAbbr={setToAbbr}
      />
      <div className="flex flex-col gap-2 mt-3">
        <Button
          text="download"
          className="w-full"
          onClick={handleCaptureClick}
        />
      </div>
    </div>
  );
}

export default Options;
