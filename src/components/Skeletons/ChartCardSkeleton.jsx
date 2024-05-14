import { Skeleton, Flex } from '@mantine/core';
import classes from './ChartCardSkeleton.module.css';

function ChartCardSkeleton() {
  return (
    <div className={classes.chartCardWrapper}>
      <div
        className={classes.chartCardRank}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <Skeleton height={70} circle />
        <Skeleton h="19px" w="8px" radius="sm" />
        <Skeleton h="19px" w="101px" radius="sm" />
      </div>
      <Skeleton h="19" w="30" mt={29} ml={20} mr={20} mb={34} radius="sm" />
    </div>
  );
}

const ChartSectionSkeleton = ({ count }) => {
  return (
    <div className={classes.ChartSectionSkeleton}>
      {Array.from({ length: count }).map((_, index) => (
        <ChartCardSkeleton />
      ))}
    </div>
  );
};

export default ChartSectionSkeleton;
