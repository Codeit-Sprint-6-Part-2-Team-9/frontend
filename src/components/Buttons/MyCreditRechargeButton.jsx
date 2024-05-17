import { Button } from '@mantine/core';
import theme from '../../theme';
import CreditIcon from '../../assets/img_credit_in_recharge_btn.svg';
import useCredits from '../../api/credits/useCredits';
import classes from './MyCreditRechargeButton.module.css';

const MyCreditRechargeButton = ({ ...buttonProps }) => (
  <Button
    {...buttonProps}
    justify="space-between"
    className={classes.MycreditButton}
    leftSection={<MyCreditSection />}
    rightSection={<TextSection />}
  />
);

const MyCreditSection = () => {
  const [credits] = useCredits();

  return (
    <div className={classes.creditContainer}>
      <div className={classes.creditTitle}>내 크레딧</div>
      <div className={classes.creditContent}>
        <img src={CreditIcon} alt="크레딧" className={classes.creditIcon} />
        <div className={classes.creditAmount}>{credits.toLocaleString()}</div>
      </div>
    </div>
  );
};

const TextSection = () => (
  <div className={classes.textSection} style={{ color: theme.colors.brand[0] }}>
    충전하기
  </div>
);

export default MyCreditRechargeButton;
