import styles from "./RoundCard.module.css";
import IdolImg from "./amber.png";

const RoundCard = () => {
  return (
    <div className={styles.RoundCard}>
      <img src={IdolImg} alt="amber" />
    </div>
  );
};

export default RoundCard;

// const RoundCard = ({src}) => {
//     return (
//         <div>
//             <img src={src} alt={name} />
//         </div>
//     )
// }

// export default RoundCard;
// <RoundCard src={IdolImg}/>
