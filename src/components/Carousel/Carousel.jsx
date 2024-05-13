import { useState, useCallback, useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import { ActionIcon, Box, Flex } from '@mantine/core';
import CarouselCard from './CarouselCard';
import '@mantine/carousel/styles.css';
import classes from './Carousel.module.css';
import prevIcon from '../../assets/btnArrowLeft.svg';
import nextIcon from '../../assets/btnArrowRight.svg';
import useDonationQuery from '../../api/donations/useDonationQuery';
import NotFound from '../../pages/NotFound';

function CarouselSection() {
  const {
    data,
    error,
    isError,
    isFetching,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useDonationQuery();

  const [embla, setEmbla] = useState(0);
  const donationPage = data?.pages[0];

  const handleRefetch = async (index) => {
    if (index === Math.floor(data.pages[0].length * 0.33)) {
      if (hasNextPage && !isFetching) {
        await fetchNextPage();
      }
    }
  };

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

  if (isLoading) {
    return <>Loading</>;
  }

  if (isError) {
    return <NotFound errorMessage={'오류가 발생하였습니다.'} />;
  }

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
        slideSize={{ lg: '282', md: '282', xs: '158' }}
        slideGap={{ lg: '24', md: '16', xs: '0' }}
        align="start"
        slidesToScroll={'auto'}
        withControls={false}
        getEmblaApi={setEmbla}
        onSlideChange={handleRefetch}
        styles={{
          root: { maxWidth: 1200, margin: 'auto' },
        }}
      >
        {donationPage.map((donation, index) => {
          return (
            <Carousel.Slide className={classes.carouselSlide} key={index}>
              <CarouselCard card={donation} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default CarouselSection;
