import { useState, useEffect } from "react";
import Card from "./components/card";
function App() {
  const [timeframe, setTimeframe] = useState("daily");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const a = data.filter((d) => d.title === "Work")[0];
      });
  }, []);

  return (
    data.length && (
      <>
        <div className="mainCard flex">
          <div className="top flex">
            <img src="images/image-jeremy.png" alt="Jeremy" />
            <div className="reports">Report for</div>
            <div className="name">Jeremy Robson</div>
          </div>
          <div className="bottom flex">
            <button
              className={timeframe === "daily" && "selected"}
              onClick={() => setTimeframe("daily")}
            >
              Daily
            </button>
            <button
              className={timeframe === "weekly" && "selected"}
              onClick={() => setTimeframe("weekly")}
            >
              Weekly
            </button>
            <button
              className={timeframe === "monthly" && "selected"}
              onClick={() => setTimeframe("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>
        <Card
          title={"Work"}
          timeframe={timeframe}
          data={data.filter((d) => d.title === "Work")[0].timeframes}
        />
        <Card
          title={"Play"}
          timeframe={timeframe}
          data={data.filter((d) => d.title === "Play")[0].timeframes}
        />
        <Card
          title={"Study"}
          timeframe={timeframe}
          data={data.filter((d) => d.title === "Study")[0].timeframes}
        />
        <Card
          title={"Exercise"}
          timeframe={timeframe}
          data={data.filter((d) => d.title === "Exercise")[0].timeframes}
        />
        <Card
          title={"Social"}
          timeframe={timeframe}
          data={data.filter((d) => d.title === "Social")[0].timeframes}
        />
        <Card
          title={"Self Care"}
          timeframe={timeframe}
          data={data.filter((d) => d.title === "Self Care")[0].timeframes}
        />
        <div className="attribution">
          Challenge by &nbsp;
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer noopener"
          >
            Frontend Mentor
          </a>
          . &nbsp; Coded by &nbsp;
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer noopener"
          >
            Lincoln Bollschweiler
          </a>
          .
        </div>
      </>
    )
  );
}

export default App;
