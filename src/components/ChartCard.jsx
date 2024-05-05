import RoundCard from "./RoundCard";
import classes from "./ChartCard.module.css";

const ChartCard = ({ idol }) => {
  const { rank, group, name, totalVotes } = idol;

  return (
    <div className={classes.ChartCard}>
      <div className={classes.ChartCardWrapper}>
        <RoundCard />
        <span className={classes.rank}>{rank}</span>
        <p className={classes.group}>{group}</p>
        <p className={classes.name}>{name}</p>
      </div>
      <p className={classes.totalVotes}>{totalVotes.toLocaleString()}</p>
    </div>
  );
};

export default ChartCard;
