import CREDIT_WARN_SVG from "../../assets/credit_warn.svg";
import Buttons from "../Buttons";
import classes from "./CreditWarnModalBody.module.css";
import Typography from "../Typography";
import { Button } from "@mantine/core";

const CreditWarnModalBody = ({ close }) => {
  return (
    <div className={classes.creditWarnModalBody}>
      <img
        className={classes.creditImg}
        src={CREDIT_WARN_SVG}
        alt="크레딧 부족 이미지"
      />
      <p className={classes.text}>
        앗! 투표하기 위한 <span className={classes.accent}>크레딧</span>이
        부족해요
      </p>
      {/* <Buttons type={"confirm"} onClick={close}>
        <Typography>확인</Typography>
      </Buttons> */}
      <Button
        variant="gradient"
        gradient={{ from: "#f96d69", to: "#FE5493", deg: 90 }}
        style={{ width: "100%" }}
        onClick={close}
      >
        확인
      </Button>
    </div>
  );
};

export default CreditWarnModalBody;
