import { useState, useEffect } from "react";
import CarouselCard from "./CarouselCard";
import mockData from "./donationMockData.json";

const Carousel = () => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    setCardData(mockData.list);
  }, []);

  if (!cardData) {
    return <div>Loading..</div>;
  }

  return (
    <div style={{ backgroundColor: "black" }}>
      {cardData.map((card) => (
        <CarouselCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Carousel;
