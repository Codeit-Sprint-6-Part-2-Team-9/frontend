import classes from './RoundCardWithText.module.css';
import RoundCard from '../../../components/RoundCard';
import DeleteBtn from './DeleteBtn';

const RoundCardWithText = ({ name, groupName, onClick }) => {
  return (
    <div className={classes.RoundCardWithText}>
      <DeleteBtn onClick={onClick} />
      <RoundCard />
      <p className={classes.name}>{name}</p>
      <p className={classes.groupName}>{groupName}</p>
    </div>
  );
};

export default RoundCardWithText;
