import { Carousel } from "@mantine/carousel";
import { useState, useEffect } from "react";
import mockData from "./donationMockData.json";
import CarouselCard from "./CarouselCard";
import "@mantine/carousel/styles.css";
import classes from "./Carousel.module.css";
import prevIcon from "../../assets/btnArrowLeft.svg";
import nextIcon from "../../assets/btnArrowRight.svg";

function CarouselSection() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    setCardData(mockData.list);
  }, []);
  return (
    <section className={classes.carouselWrapper}>
      <Carousel
        height={402}
        slideSize={{ lg: "282", sm: "282", xs: "158" }}
        slideGap={{ lg: "24", sm: "16", xs: "8" }}
        align="start"
        slidesToScroll={4}
        previousControlIcon={
          <img src={prevIcon} className={classes.carouselIcon} />
        }
        nextControlIcon={<img src={nextIcon} />}
        classNames={{
          root: classes.root,
          controls: classes.controls,
          control: classes.control,
          slide: classes.slide,
        }}
      >
        {cardData.map((card) => (
          <Carousel.Slide key={card.id}>
            <CarouselCard card={card} />
          </Carousel.Slide>
        ))}
      </Carousel>
      <div></div>
    </section>
  );
}

export default CarouselSection;
