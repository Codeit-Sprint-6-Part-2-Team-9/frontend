import { Skeleton } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
// import classes from './CarouselSlideSkeleton.module.css';

function CardSkeleton() {
  return (
    <div>
      <Skeleton
        h={{ xl: '293', md: '293', xs: '206' }}
        w={{ xl: '282', md: '282', xs: '157' }}
        bt={10}
        mr={{ xl: '-10', md: '-20', xs: '9' }}
        solid
        radius={8}
      />
      <Skeleton
        h={{ xl: '18', md: '18', xs: '15' }}
        w={{ xl: '168', md: '160', xs: '110' }}
        mt={12}
      />
      <Skeleton
        h={{ xl: '18', md: '18', xs: '15' }}
        w={{ xl: '168', md: '140', xs: '120' }}
        mt={10}
      />
      <Skeleton
        h={{ xl: '26', md: '26', xs: '26' }}
        w={{ xl: '282', md: '282', xs: '154' }}
        mt={24}
      />
    </div>
  );
}

function CarouselSlideSkeleton() {
  return (
    <>
      <Carousel
        height={402}
        slideSize={{ xl: '282', md: '282', xs: '158' }}
        slideGap={{ xl: '24', md: '16', xs: '0' }}
        align="start"
        slidesToScroll={'auto'}
        withControls={false}
        styles={{
          root: { maxWidth: 1200, margin: 'auto' },
        }}
      >
        return (
        <Carousel.Slide>
          <CardSkeleton />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardSkeleton />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardSkeleton />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardSkeleton />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardSkeleton />
        </Carousel.Slide>
        <Carousel.Slide>
          <CardSkeleton />
        </Carousel.Slide>
        );
      </Carousel>
    </>
  );
}

export default CarouselSlideSkeleton;
