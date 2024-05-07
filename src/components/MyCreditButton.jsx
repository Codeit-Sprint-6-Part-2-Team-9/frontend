import { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import CreditIcon from "../assets/mycredit.svg";
import classes from "../components/MyCreditButton.module.css";

const MyCreditRechargeButton = ({ ...buttonProps }) => {
  return (
    <Button
      {...buttonProps}
      justify="space-between"
      className={classes.MycreditButton}
      leftSection={<MyCreditSection />}
      rightSection={<TextSection />}
    />
  );
};

const MyCreditSection = () => {
  const [myCredit, setMyCredit] = useState(0);

  useEffect(() => {
    const savedCredit = localStorage.getItem("myCredit");

    if (!savedCredit) {
      localStorage.setItem("myCredit", "36000");
      setMyCredit(36000);
    } else {
      setMyCredit(Number(savedCredit));
    }
  }, [myCredit]);

  return (
    <div className={classes.creditContainer}>
      <div className={classes.creditTitle}>내 크레딧</div>
      <div className={classes.creditContent}>
        <img src={CreditIcon} alt="Credit" className={classes.creditIcon} />
        <div className={classes.creditAmount}>{myCredit.toLocaleString()}</div>
      </div>
    </div>
  );
};

const TextSection = () => {
  return <div className={classes.textSection}>충전하기</div>;
};

export default MyCreditRechargeButton;
