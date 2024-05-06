import { useState } from "react";
import { Button } from "@mantine/core";
import classes from "./CreditChargeModalBody.module.css";
import CREDIT_IMG from "../../assets/credit.svg";

const CreditChargeModalBody = () => {
  const [selected, setSelected] = useState("100");
  const handleChange = (value) => {
    setSelected(value);
  };

  return (
    <div className={classes.body}>
      <div className={classes.radioWrapper}>
        <div
          className={`${classes.radioBox} ${
            selected === "100" ? classes.selected : ""
          }`}
          onClick={() => handleChange("100")}
        >
          <div className={classes.radioLeft}>
            <img src={CREDIT_IMG} alt="크레딧 아이콘" />
            <p
              className={`${classes.creditText} ${
                selected === "100" ? classes.creditSelected : ""
              }`}
            >
              100
            </p>
          </div>
          <input
            type="radio"
            name="creditAmount"
            value="100"
            checked={selected === "100"}
            onChange={() => {
              handleChange("100");
            }}
          />
        </div>
        <div
          className={`${classes.radioBox} ${
            selected === "500" ? classes.selected : ""
          }`}
          onClick={() => handleChange("500")}
        >
          <div className={classes.radioLeft}>
            <img
              src={CREDIT_IMG}
              alt="크레딧 아이콘
            "
            />
            <p
              className={`${classes.creditText} ${
                selected === "500" ? classes.creditSelected : ""
              }`}
            >
              500
            </p>
          </div>
          <input
            type="radio"
            name="creditAmount"
            value="500"
            checked={selected === "500"}
            onChange={() => {
              handleChange("500");
            }}
          />
        </div>
        <div
          className={`${classes.radioBox} ${
            selected === "1000" ? classes.selected : ""
          }`}
          onClick={() => handleChange("1000")}
        >
          <div className={classes.radioLeft}>
            <img src={CREDIT_IMG} alt="크레딧 아이콘" />
            <p
              className={`${classes.creditText} ${
                selected === "1000" ? classes.creditSelected : ""
              }`}
            >
              1000
            </p>
          </div>
          <input
            type="radio"
            name="creditAmount"
            value="1000"
            checked={selected === "1000"}
            onChange={() => {
              handleChange("1000");
            }}
          />
        </div>
      </div>
      <Button style={{ width: "100%" }}>충전하기</Button>
    </div>
  );
};

export default CreditChargeModalBody;
