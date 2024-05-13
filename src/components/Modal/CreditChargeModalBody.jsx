import { useState } from 'react';
import { Button } from '@mantine/core';
import classes from './CreditChargeModalBody.module.css';
import CREDIT_IMG from '../../assets/modal_credit.svg';
import CREDIT_BTN from '../../assets/credit.svg';

import useCredits from '../../api/credits/useCredits';

const CreditOption = ({ value, selected, onChange }) => {
  return (
    <div
      className={`${classes.radioBox} ${
        selected === value ? classes.selected : ''
      }`}
      onClick={() => onChange(value)}
    >
      <div className={classes.radioLeft}>
        <img src={CREDIT_IMG} alt="크레딧 아이콘" />
        <p
          className={`${classes.creditText} ${
            selected === value ? classes.creditSelected : ''
          }`}
        >
          {value}
        </p>
      </div>
      <input
        type="radio"
        name="creditAmount"
        value={value}
        checked={selected === value}
        onChange={() => {
          onChange(value);
        }}
      />
    </div>
  );
};

const CreditChargeModalBody = ({ close }) => {
  const [credits, chargeCredits, payCredits, newCredits] = useCredits();
  const [selected, setSelected] = useState('100');
  const handleChange = (value) => {
    setSelected(value);
  };

  return (
    <div className={classes.body}>
      <div className={classes.radioWrapper}>
        <CreditOption
          value={'100'}
          selected={selected}
          onChange={handleChange}
        />
        <CreditOption
          value={'500'}
          selected={selected}
          onChange={handleChange}
        />
        <CreditOption
          value={'1000'}
          selected={selected}
          onChange={handleChange}
        />
      </div>
      <Button
        style={{ width: '100%' }}
        variant="gradient"
        gradient={{ from: '#f96d69', to: '#FE5493', deg: 90 }}
        leftSection={<img src={CREDIT_BTN} alt="크레딧 아이콘" />}
        onClick={() => {
          chargeCredits(parseInt(selected));
          close();
        }}
      >
        충전하기
      </Button>
    </div>
  );
};

export default CreditChargeModalBody;
