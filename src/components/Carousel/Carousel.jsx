import { useState, useMemo } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const donationPage = data?.pages;

  const sortedData = useMemo(() => {
    if (!donationPage) return [];
    return donationPage.slice().sort((a, b) => {
      const percentAchievedA = a.receivedDonations / a.targetDonation;
      const percentAchievedB = b.receivedDonations / b.targetDonation;
      return percentAchievedB - percentAchievedA;
    });
  }, [donationPage]);

  const filteredData = useMemo(() => {
    if (!sortedData) return [];
    return sortedData.sort((a, b) => {
      const aReachedTarget = a.receivedDonations >= a.targetDonation;
      const bReachedTarget = b.receivedDonations >= b.targetDonation;
      if (aReachedTarget && !bReachedTarget) return 1;
      if (!aReachedTarget && bReachedTarget) return -1;
      return 0;
    });
  }, [sortedData]);

  const lastPageIndex = filteredData.length - 1;
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsPrevButtonDisabled(index === 0);
    setIsNextButtonDisabled(index === Math.floor(lastPageIndex / 4));
  };

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
            onClick={() => embla.scrollPrev()}
            disabled={isPrevButtonDisabled}
            style={{
              opacity: isPrevButtonDisabled ? 0 : 1,
              cursor: isPrevButtonDisabled ? 'default' : 'pointer',
            }}
            className={classes.carouselButton}
          >
            <img src={prevIcon} alt="캐러셀이전버튼" />
          </ActionIcon>
          <ActionIcon
            w="40"
            h="78px"
            variant="transparent"
            onClick={() => embla.scrollNext()}
            disabled={isNextButtonDisabled}
            style={{
              opacity: isNextButtonDisabled ? 0 : 1,
              cursor: isNextButtonDisabled ? 'default' : 'pointer',
            }}
            className={classes.carouselButton}
          >
            <img src={nextIcon} alt="캐러셀이후버튼" />
          </ActionIcon>
        </Flex>
      </div>
      <Carousel
        height={{ xl: '402', md: '402', xs: '303' }}
        slideSize={{ xl: '282', md: '282', xs: '158' }}
        slideGap={{ xl: '24', md: '16', xs: '0' }}
        align="start"
        slidesToScroll={'auto'}
        withControls={false}
        getEmblaApi={setEmbla}
        onSlideChange={handleSlideChange}
        styles={{
          root: { maxWidth: 1200, margin: 'auto' },
        }}
      >
        {filteredData.map((donation, index) => (
          <Carousel.Slide className={classes.carouselSlide} key={index}>
            <CarouselCard className={classes.carouselCard} card={donation} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}

export default CarouselSection;
