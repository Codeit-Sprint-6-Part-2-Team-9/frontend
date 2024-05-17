import classes from './ChartCard.module.css';
import RoundCard from './RoundCard';

const ChartCard = ({ idol, rank }) => {
  const { group, name, profilePicture, totalVotes } = idol;

  return (
    <div className={classes.ChartCard}>
      <div className={classes.ChartCardWrapper}>
        <div className={classes.RoundCardWrapper}>
          <RoundCard profileUrl={profilePicture} alt={name} />
        </div>
        <span className={classes.rank}>{rank}</span>
        <p className={classes.group}>{group}</p>
        <p className={classes.name}>{name}</p>
      </div>
      <p className={classes.totalVotes}>{totalVotes.toLocaleString()}표</p>
    </div>
  );
};

export default ChartCard;
