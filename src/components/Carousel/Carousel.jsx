import { useState, useEffect } from "react";
import CarouselCard from "./CarouselCard";

const Carousel = () => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://fandom-k-api.vercel.app/6-9/donations"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCardData(data.list);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  if (!cardData) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      {cardData.map((card) => (
        <CarouselCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Carousel;
