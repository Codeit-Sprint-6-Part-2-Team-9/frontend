import RoundCard from "./RoundCard";
import classes from "./ChartCard.module.css";

const ChartCard = ({ idol }) => {
  return (
    <div className={classes.ChartCard}>
      <div className={classes.ChartCardWrapper}>
        <RoundCard />
        <span className={classes.rank}>{idol.rank}</span>
        <p className={classes.group}>{idol.group}</p>
        <p className={classes.name}>{idol.name}</p>
      </div>
      <p className={classes.totalVotes}>{idol.totalVotes}</p>
    </div>
  );
};

export default ChartCard;
