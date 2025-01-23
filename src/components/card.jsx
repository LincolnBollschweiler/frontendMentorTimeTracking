import { useEffect, useState } from "react";

const Card = ({ title, timeframe, data }) => {
  const id = title.toLowerCase().replace(" ", "-");
  const [timeLabel, setTimeLabel] = useState("Yesterday");

  useEffect(() => {
    if (timeframe === "daily") {
      setTimeLabel("Yesterday");
    } else if (timeframe === "weekly") {
      setTimeLabel("Last Week");
    } else {
      setTimeLabel("Last Month");
    }
  }, [timeframe]);

  return (
    <div className="card flex">
      <div className={`top flex ${id}`}>
        <img className="icon" src={`images/icon-${id}.svg`} alt="icon" />
      </div>
      <div className="bottom flex">
        <div className="title flex">
          <div>{title}</div>
          <img
            className="ellipse"
            src="images/icon-ellipsis.svg"
            alt="ellipsis"
          />
        </div>
        <div className="time-current">{data[timeframe].current}hrs</div>
        <div className="time-previous">
          {`${timeLabel} - ${data[timeframe].previous}`}hrs
        </div>
      </div>
    </div>
  );
};

export default Card;
