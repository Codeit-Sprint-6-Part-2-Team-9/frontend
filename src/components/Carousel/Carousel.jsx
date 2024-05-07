import { Carousel } from "@mantine/carousel";
import { useState, useEffect } from "react";
import mockData from "./donationMockData.json";
import CarouselCard from "./CarouselCard";
import "@mantine/carousel/styles.css";
import classes from "./Carousel.module.css";

function CarouselSection() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    setCardData(mockData.list);
  }, []);

  return (
    <section className="carouselWrapper">
      <Carousel
        withIndicators
        height={402}
        slideSize={282}
        slideGap={24}
        align="start"
        slidesToScroll={4}
        classNames={{
          root: classes.root,
          controls: classes.controls,
        }}
      >
        {cardData.map((card) => (
          <Carousel.Slide key={card.id}>
            <CarouselCard card={card} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
}

export default CarouselSection;
