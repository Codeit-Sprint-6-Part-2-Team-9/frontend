import { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import CREDIT_IMG from "../../assets/modal_credit.svg";
import classes from "./CreditDonationModalBody.module.css";

const CreditDonationModalBody = ({ props }) => {
  const { profileImg, subtitle, title } = props;

  const [myCredit, setMyCredit] = useState(10000);
  const [credit, setCredit] = useState("");
  const [error, setError] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value.trim();
    if (inputValue === "" || !isNaN(parseInt(inputValue))) {
      setCredit(parseInt(inputValue) || "0");
      if (parseInt(inputValue) > myCredit) {
        setError("갖고 있는 크레딧보다 더 많이 후원할 수 없어요");
      } else {
        setError("");
      }
    }
  };

  useEffect(() => {
    setBtnDisabled(credit === "" || error !== "" || credit === "0");
  }, [credit, error]);

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
            error !== "" ? classes.inputError : ""
          }`}
          placeholder="크레딧 입력"
          value={credit}
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
        style={{ width: "100%", marginTop: "20px" }}
        variant="gradient"
        gradient={{ from: "#f96d69", to: "#FE5493", deg: 90 }}
      >
        후원하기
      </Button>
    </div>
  );
};

export default CreditDonationModalBody;
