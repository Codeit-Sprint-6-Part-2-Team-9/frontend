import Typography from "../Typography";
import CREDIT_WARN_SVG from "../../assets/credit_warn.svg";

import classes from "./CreditWarnModalBody.module.css";

const CreditWarnModalBody = () => {
  return (
    <div className={classes.CreditWarnModalBody}>
      <img
        className={classes.CreditImg}
        src={CREDIT_WARN_SVG}
        alt="크레딧 부족 이미지"
      />
      <Typography>
        앗! 투표하기 위한 <span className={classes.accent}>크레딧</span>이
        부족해요
      </Typography>
    </div>
  );
};

export default CreditWarnModalBody;
