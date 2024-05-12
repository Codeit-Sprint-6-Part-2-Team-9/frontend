import { useState, useEffect } from 'react';
import { Button } from '@mantine/core';
import CREDIT_IMG from '../../assets/modal_credit.svg';
import classes from './CreditDonationModalBody.module.css';
import useCredits from '../../api/credits/useCredits';
import useDonationMutation from '../../api/donations/useDonationMutation';

const CreditDonationModalBody = ({ donationProps, close }) => {
  const { idolId, profileImg, subtitle, title } = donationProps;
  const { mutate: sendDonation } = useDonationMutation();
  const [credits, chargeCredits, payCredits, newCredits] = useCredits();
  const [inputCredit, setInputCredit] = useState('');
  const [error, setError] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value.trim();
    if (inputValue === '' || !isNaN(parseInt(inputValue))) {
      setInputCredit(parseInt(inputValue) || '0');
      if (parseInt(inputValue) > credits) {
        setError('갖고 있는 크레딧보다 더 많이 후원할 수 없어요');
      } else {
        setError('');
      }
    }
  };

  const payDonation = (amount, id) => {
    try {
      payCredits(amount);
      sendDonation({
        donationId: id,
        creditsToDonate: amount,
      });
    } catch (e) {
      console.error(`${id}에 대한 ${amount}의 결제 오류`);
      console.log(e.errorMessage);
    } finally {
      console.log(`${id}에 대한 ${amount}의 결제 종료됨`);
    }
  };

  useEffect(() => {
    setBtnDisabled(inputCredit === '' || error !== '' || inputCredit === '0');
  }, [inputCredit, error]);

  return (
    <div className={classes.body}>
      <div className={classes.profileWrapper}>
        <div className={classes.profileImgWrapper}>
          <img
            className={classes.profileImg}
            src={profileImg}
            alt="프로필 이미지"
          />
        </div>
        <p className={classes.subtitle}>{subtitle}</p>
        <p className={classes.title}>{title}</p>
      </div>
      <div className={classes.inputWrapper}>
        <input
          type="text"
          className={`${classes.input} ${
            error !== '' ? classes.inputError : ''
          }`}
          placeholder="크레딧 입력"
          value={inputCredit}
          onChange={handleChange}
        />
        <img
          src={CREDIT_IMG}
          alt="크레딧 아이콘"
          className={classes.creditIcon}
        />
      </div>
      {error && <p className={classes.error}>{error}</p>}
      <Button
        disabled={btnDisabled}
        style={{ width: '100%', marginTop: '20px' }}
        variant="gradient"
        gradient={{ from: '#f96d69', to: '#FE5493', deg: 90 }}
        onClick={() => {
          payDonation(inputCredit, idolId);
          close();
        }}
      >
        후원하기
      </Button>
    </div>
  );
};

export default CreditDonationModalBody;
