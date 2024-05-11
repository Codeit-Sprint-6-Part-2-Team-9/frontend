import { useState, useEffect, useCallback } from 'react';
import { Carousel } from '@mantine/carousel';
import { ActionIcon, Box, Flex } from '@mantine/core';
import CarouselCard from './CarouselCard';
import getDonations from '../../api/donations/getDonations';
import '@mantine/carousel/styles.css';
import classes from './Carousel.module.css';
import prevIcon from '../../assets/btnArrowLeft.svg';
import nextIcon from '../../assets/btnArrowRight.svg';

function CarouselSection() {
  const [cardData, setCardData] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [embla, setEmbla] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDonations({ cursor });
        setCardData(data.list);
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    }

    fetchData();
  }, [cursor]);

  const handleNextBtn = useCallback(() => {
    if (!embla) return;
    const { scrollNext, canScrollNext } = embla;
    if (!canScrollNext) return;
    scrollNext();
  }, [embla]);

  const handlePrevBtn = useCallback(() => {
    if (!embla) return;
    const { scrollPrev, canScrollPrev } = embla;
    if (!canScrollPrev) return;
    scrollPrev();
  }, [embla]);

  return (
    <Box component="section" className={classes.carouselWrapper} pos="relative">
      <div className={classes.controlsWrapper}>
        <Flex
          justify="space-between"
          pos={'relative'}
          className={`${classes.flex}`}
        >
          <ActionIcon
            w="40"
            h="78px"
            variant="transparent"
            onClick={handlePrevBtn}
          >
            <img
              src={prevIcon}
              className={`${classes.control}`}
              alt="캐러셀이전버튼"
            />
          </ActionIcon>
          <ActionIcon
            w="40"
            h="78px"
            variant="transparent"
            onClick={handleNextBtn}
          >
            <img
              src={nextIcon}
              className={`${classes.control}`}
              alt="캐러셀이후버튼"
            />
          </ActionIcon>
        </Flex>
      </div>
      <Carousel
        height={402}
        slideSize={{ lg: '282', sm: '282', xs: '158' }}
        slideGap={{ lg: '24', sm: '16', xs: '8' }}
        align="start"
        slidesToScroll={4}
        withControls={false}
        getEmblaApi={setEmbla}
        styles={{
          root: { maxWidth: 1200, margin: 'auto' },
        }}
      >
        {cardData.map((card) => (
          <Carousel.Slide key={card.id}>
            <CarouselCard card={card} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}

export default CarouselSection;
