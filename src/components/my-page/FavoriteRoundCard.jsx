import classes from './FavoriteRoundCard.module.css';
import RoundCard from '../Cards/RoundCard';
import DeleteBtn from './DeleteBtn';

const FavoriteRoundCard = ({
  id,
  name,
  groupName,
  profilePicture,
  onClick,
}) => {
  return (
    <div className={classes.FavoriteRoundCard}>
      <div className={classes.roundCardWrapper}>
        <DeleteBtn
          onClick={() => {
            onClick(id);
          }}
        />
        <RoundCard profileUrl={profilePicture} alt={name} />
      </div>
      <p className={classes.name}>{name}</p>
      <p className={classes.groupName}>{groupName}</p>
    </div>
  );
};

export default FavoriteRoundCard;
