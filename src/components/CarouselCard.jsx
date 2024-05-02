import { Text, Progress, Card } from "@mantine/core";
import classes from "./Carousel.module.css";
import creditIcon from "../assets/creditIcon.svg";

function CarouselCard({ card }) {
  const percentAchieved = (card.receivedDonations / card.targetDonation) * 100;

  const deadline = new Date(card.deadline);
  const now = new Date();
  const diffMs = deadline - now;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const timeRemaining = diffDays > 0 ? `${diffDays}일 남음` : "달성";

  return (
    <Card radius="md" p="xl" className={classes.card}>
      <div className="container">
        <img
          src={card.idol.profilePicture}
          alt={card.title}
          className={classes.image}
        />
        {/* <img
          className="overlay-image"
        /> */}
        <button>후원하기</button>
      </div>

      <Text fz="xs" tt="uppercase" fw={700} className={classes.title}>
        {card.subtitle}
      </Text>
      <Text fz="xs" tt="uppercase" fw={700} className={classes.title}>
        {card.title}
      </Text>
      <div>
        <div>
          <img src={creditIcon} alt="credit icon" />
          <Text fz="lg" fw={500} className={classes.stats}>
            {card.receivedDonations}
          </Text>
        </div>
        <Text fz="xs" fw={500}>
          {timeRemaining}
        </Text>
      </div>

      <Progress
        value={percentAchieved}
        mt="md"
        size="lg"
        radius="xl"
        color="blue"
        classNames={{
          root: classes.progressTrack,
          section: classes.progressSection,
        }}
      />
      <Text
        fz="xs"
        fw={500}
        style={{ position: "absolute", top: "-25px", right: "10px" }}
      >
        {card.deadline}
      </Text>
    </Card>
  );
}

export default CarouselCard;
