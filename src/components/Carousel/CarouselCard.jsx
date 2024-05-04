import { Progress } from "@mantine/core";
import classes from "./Carousel.module.css";
import creditIcon from "../../assets/creditIcon.svg";
import coverArtistImage from "../../assets/coverDonation.svg";
import Typography from "../Typography";

const CarouselCard = ({ card }) => {
  const percentAchieved = (card.receivedDonations / card.targetDonation) * 100;

  const calculateTimeRemaining = (deadline) => {
    const diffMs = deadline - new Date();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays}일 남음` : "달성";
  };

  const timeRemaining = calculateTimeRemaining(new Date(card.deadline));

  return (
    <div>
      <div className={classes.imageSection}>
        <img
          src={card.idol.profilePicture}
          alt={card.title}
          className={classes.artistImage}
        />
        <img
          src={coverArtistImage}
          alt="cover artist image"
          className={classes.overlayImage}
        />
        <button className={classes.btn}>후원하기</button>
      </div>

      <div className={classes.progressbarSection}>
        <Typography
          type="bol6lh18ls017"
          style={{ color: "var(--mantine-color-gray-0)" }}
        >
          {card.title}
        </Typography>
        <Typography
          type="medium18"
          style={{ color: "var(--mantine-color-white-0)" }}
        >
          {card.subtitle}
        </Typography>
        <div className={classes.progressbarTextSection}>
          <div className={classes.progressbarCreditSection}>
            <img
              src={creditIcon}
              alt="credit icon"
              className={classes.creditIcon}
            />
            <Typography
              type="medium12lh18ls017"
              style={{ color: "var(--mantine-color-brand-0)" }}
            >
              {card.receivedDonations}
            </Typography>
          </div>
          <Typography
            type="medium12lh18ls017"
            style={{ color: "var(--mantine-color-white-0)" }}
          >
            {timeRemaining}
          </Typography>
        </div>
        <Progress
          value={percentAchieved}
          mt={10}
          mb={100}
          size={1}
          radius={1}
          color="#F96D69"
          style={{ backgroundColor: "var(--mantine-color-white-0)" }}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
