import { Skeleton } from '@mantine/core';
import classes from './FavoriteIdolSkeleton.module.css';

const ONE_HUNDRED_PERCENT = '100%';

const FavoriteIdolSkeletonItem = () => {
  return (
    <div className={classes.favoriteIdolSkeletonItem}>
      <div className={classes.profileWrapper}>
        <Skeleton
          className={classes.skeletonColor}
          h={ONE_HUNDRED_PERCENT}
          w={ONE_HUNDRED_PERCENT}
          circle
        />
      </div>
      <div className={classes.nameWrapper}>
        <Skeleton
          className={classes.skeletonColor}
          h={ONE_HUNDRED_PERCENT}
          w={ONE_HUNDRED_PERCENT}
        />
      </div>
      <div className={classes.groupNameWrapper}>
        <Skeleton
          className={classes.skeletonColor}
          h={ONE_HUNDRED_PERCENT}
          w={ONE_HUNDRED_PERCENT}
        />
      </div>
    </div>
  );
};

const FavoriteIdolSkeleton = ({ pageSize }) => {
  const count = pageSize === 16 ? 9 : pageSize === 8 ? 5 : 2;
  return (
    <div className={classes.favoriteIdolSkeletonWrapper}>
      {Array.from({ length: count }, (_, index) => (
        <FavoriteIdolSkeletonItem key={`favoriteSkeleton-${index}`} />
      ))}
    </div>
  );
};

export default FavoriteIdolSkeleton;
