import { useState } from 'react';

import classes from './RoundCardWithText.module.css';
import RoundCard from '../../../components/RoundCard';
import ICON_CHECKED from '../../../assets/icon_checked.svg';

const RoundCardWithText = ({ name, groupName, profilePicture }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={classes.RoundCardWithText}
      onClick={() => {
        setChecked(!checked);
      }}
    >
      <div className={classes.roundCardWrapper}>
        <RoundCard src={profilePicture} alt={name} />
      </div>
      <p className={classes.name}>{name}</p>
      <p className={classes.groupName}>{groupName}</p>
    </div>
  );
};

export default RoundCardWithText;
