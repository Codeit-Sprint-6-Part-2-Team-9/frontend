import RoundCard from "./RoundCard";
import classes from "./ChartCard.module.css";

const ChartCard = () => {
  return (
    <div className={classes.ChartCard}>
      <div className={classes.ChartCardWrapper}>
        <RoundCard />
        <span className={classes.rank}>1</span>
        <p className={classes.group}>F(X)</p>
        <p className={classes.name}>엠버</p>
      </div>
      <p className={classes.totalVotes}>10000표</p>
    </div>
  );
};

export default ChartCard;
