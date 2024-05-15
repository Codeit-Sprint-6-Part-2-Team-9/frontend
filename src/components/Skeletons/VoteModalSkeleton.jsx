import classes from './VoteModalSkeleton.module.css';
import { Skeleton } from '@mantine/core';

const ONE_HUNDRED_PERCENT = '100%';

const VoteModalSkeletonItem = ({ isMobile }) => {
  return (
    <div
      className={`${classes.VoteModalSkeletonItem} ${isMobile ? classes.mobile : ''}`}
    >
      <div className={classes.leftSection}>
        <div className={classes.profileWrapper}>
          <Skeleton
            className={`${isMobile ? classes.skeletonColor : ''}`}
            h={ONE_HUNDRED_PERCENT}
            w={ONE_HUNDRED_PERCENT}
            circle
          />
        </div>
        <div className={classes.textWrapper}>
          <Skeleton
            className={`${isMobile ? classes.skeletonColor : ''}`}
            h={ONE_HUNDRED_PERCENT}
            w={ONE_HUNDRED_PERCENT}
          />
        </div>
      </div>
      <div className={classes.inputWrapper}>
        <Skeleton
          className={`${isMobile ? classes.skeletonColor : ''}`}
          h={ONE_HUNDRED_PERCENT}
          w={ONE_HUNDRED_PERCENT}
          circle
        />
      </div>
    </div>
  );
};

const VoteModalSkeleton = ({ isMobile }) => {
  return (
    <div className={classes.VoteModalSkeletonWrapper}>
      {Array.from({ length: 10 }, (_, index) => (
        <VoteModalSkeletonItem
          key={`voteModalSkeleton-${index}`}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

export default VoteModalSkeleton;
