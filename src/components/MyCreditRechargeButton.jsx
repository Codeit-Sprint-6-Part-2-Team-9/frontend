import { useState } from 'react';
import { Button } from "@mantine/core";
import theme from "../theme";
import CreditIcon from "../assets/mycredit.svg";
import ModalComponent from "./Modal/ModalComponent"
import useCredits from '../api/credits/useCredits';
import classes from "./MyCreditRechargeButton.module.css";

const MyCreditRechargeButton = ({ ...buttonProps }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleButtonClick = () => {
    setModalOpened(true);
  };

  const handleCloseModal = () => {
    setModalOpened(false);
  };

  return (
    <>
      <Button
        {...buttonProps}
        onClick={handleButtonClick}
        justify="space-between"
        className={classes.MycreditButton}
        leftSection={<MyCreditSection />}
        rightSection={<TextSection />}
      />
      <ModalComponent 
        opened={modalOpened} 
        close={handleCloseModal} 
        modalDataState="creditCharge"
      />
    </>
  );
};

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

const TextSection = () => {
  return (
    <div
      className={classes.textSection}
      style={{ color: theme.colors.brand[0] }}
    >
      충전하기
    </div>
  );
};

export default MyCreditRechargeButton;
