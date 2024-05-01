import styles from "./RoundCardComponent.module.css";
import IdolImg from "./amber.png";

const RoundCardComponent = () => {
  return (
    <div className={styles.RoundCard}>
      <img src={IdolImg} alt="amber" />
    </div>
  );
};

export default RoundCardComponent;
