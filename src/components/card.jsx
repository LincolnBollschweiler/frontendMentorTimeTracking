const Card = ({ title, timeframe, data }) => {
  const id = title.toLowerCase().replace(" ", "-");
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
          {`Previous - ${data[timeframe].previous}`}hrs
        </div>
      </div>
    </div>
  );
};

export default Card;
