import Button from "./Button";
import Card from "./Card";

function Options() {
  return (
    <div className="flex flex-col gap-5">
      <Card label="type" options={["top tracks", "top artists"]} />
      <Card label="time range" options={["1 month", "6 months", "1 year"]} />
      <Card label="travel info" options={["1 month", "6 months", "1 year"]} type="form"/>
      <div className="flex flex-col gap-2 mt-3">

      <Button text="generate boarding pass" className="bg-[#597BC5] text-white" />
      <Button text="download" className="bg-white text-[#597BC5]" />
      </div>
    </div>
  );
}

export default Options;
