import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import myProfile from "../../assets/myProfile.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logo} alt="Logo" />
        <img className={styles.profile} src={myProfile} alt="My Profile" />
      </div>
    </header>
  );
}

export default Header;
