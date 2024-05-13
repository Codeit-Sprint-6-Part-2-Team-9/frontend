import classes from './RoundCardWithText.module.css';
import RoundCard from '../../../components/RoundCard';
import ICON_CHECKED from '../../../assets/icon_checked.svg';

const RoundCardWithText = ({
  id,
  name,
  groupName,
  profilePicture,
  onClick,
  isChecked,
}) => {
  return (
    <div
      className={classes.RoundCardWithText}
      onClick={() => {
        onClick(id);
      }}
    >
      <div className={classes.roundCardWrapper}>
        {isChecked && (
          <div>
            <div className={classes.checkedWrapper}></div>
            <img className={classes.iconChecked} src={ICON_CHECKED} />
          </div>
        )}
        <RoundCard profileUrl={profilePicture} alt={name} />
      </div>
      <p className={classes.name}>{name}</p>
      <p className={classes.groupName}>{groupName}</p>
    </div>
  );
};

export default RoundCardWithText;
