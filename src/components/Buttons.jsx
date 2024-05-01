import styles from "./Buttons.module.css";

function Buttons({ size, color, text }) {
  let sizeClass = "";
  if (size === "landingPCTablet") {
    sizeClass = styles.landingPCTablet;
  } else if (size === "landingPhone") {
    sizeClass = styles.landingPhone;
  } else if (size === "donatePCTablet") {
    sizeClass = styles.donatePCTablet;
  } else if (size === "donatePhone") {
    sizeClass = styles.donatePhone;
  } else if (size === "vote") {
    sizeClass = styles.vote;
  } else if (size === "more") {
    sizeClass = styles.more;
  } else if (size === "recharge") {
    sizeClass = styles.recharge;
  } else if (size === "modalDonate") {
    sizeClass = styles.modalDonate;
  } else if (size === "modalVotePCTablet") {
    sizeClass = styles.modalVotePCTablet;
  } else if (size === "modalVotePhone") {
    sizeClass = styles.modalVotePhone;
  } else if (size === "donation") {
    sizeClass = styles.donation;
  } else if (size === "add") {
    sizeClass = styles.add;
  }

  let colorClass = "";
  if (color === "red") {
    colorClass = styles.red;
  } else if (color === "grey") {
    colorClass = styles.grey;
  } else if (color === "black") {
    colorClass = styles.black;
  }

  return <button className={`${sizeClass} ${colorClass}`}>{text}</button>;
}

export default Buttons;
