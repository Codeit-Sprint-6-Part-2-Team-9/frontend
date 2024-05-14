import { useState, useCallback, useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import { ActionIcon, Box, Flex } from '@mantine/core';
import CarouselSlideSkeleton from '../Skeletons/CarouselSlideSkeleton';
import CarouselCard from './CarouselCard';
import '@mantine/carousel/styles.css';
import classes from './Carousel.module.css';
import prevIcon from '../../assets/btnArrowLeft.svg';
import nextIcon from '../../assets/btnArrowRight.svg';
import useDonationQuery from '../../api/donations/useDonationQuery';
import NotFound from '../../pages/NotFound';

function CarouselSection() {
  const { data, isError, isLoading } = useDonationQuery();

  const [embla, setEmbla] = useState(0);
  const donationPage = data?.pages;
  const lastPageIndex = data?.pages.length - 1;
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

  const handleNextBtn = useCallback(() => {
    if (!embla) return;
    const { scrollNext, canScrollNext, selectedScrollSnap } = embla;
    if (!canScrollNext) return;
    setIsPrevButtonDisabled(false);
    scrollNext();
    const currentIndex = selectedScrollSnap();
    const isCurrentSlideLastQuarter =
      currentIndex === Math.floor(lastPageIndex / 4);
    setIsNextButtonDisabled(isCurrentSlideLastQuarter);
  }, [embla]);

  const handlePrevBtn = useCallback(() => {
    if (!embla) return;
    const { scrollPrev, canScrollPrev, selectedScrollSnap } = embla;
    if (!canScrollPrev) return;
    scrollPrev();
    setIsNextButtonDisabled(false);
    const currentIndex = selectedScrollSnap();
    if (currentIndex === 0) {
      setIsPrevButtonDisabled(true);
    }
  }, [embla]);

  if (isLoading) {
    return (
      <Box className={classes.carouselWrapper}>
        <CarouselSlideSkeleton />
      </Box>
    );
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
            disabled={isPrevButtonDisabled}
            style={{
              opacity: isPrevButtonDisabled ? 0 : 1,
              cursor: isPrevButtonDisabled ? 'default' : 'pointer',
            }}
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
            disabled={isNextButtonDisabled}
            style={{
              opacity: isNextButtonDisabled ? 0 : 1,
              cursor: isNextButtonDisabled ? 'default' : 'pointer',
            }}
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
        slideSize={{ xl: '282', md: '282', xs: '158' }}
        slideGap={{ xl: '24', md: '16', xs: '0' }}
        align="start"
        slidesToScroll={'auto'}
        withControls={false}
        getEmblaApi={setEmbla}
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
