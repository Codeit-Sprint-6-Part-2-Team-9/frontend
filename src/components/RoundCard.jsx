import styles from './RoundCard.module.css';

const RoundCard = ({ profileUrl, name }) => {
  return (
    <div className={styles.RoundCard}>
      <img src={profileUrl} alt={name} />
    </div>
  );
};

export default RoundCard;
