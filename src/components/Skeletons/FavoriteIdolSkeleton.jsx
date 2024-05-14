import { Skeleton } from '@mantine/core';
import classes from './FavoriteIdolSkeleton.module.css';

const ONE_HUNDRED_PERCENT = '100%';

const FavoriteIdolSkeletonItem = () => {
  return (
    <div className={classes.favoriteIdolSkeletonItem}>
      <div className={classes.profileWrapper}>
        <Skeleton h={ONE_HUNDRED_PERCENT} w={ONE_HUNDRED_PERCENT} circle />
      </div>
      <div className={classes.nameWrapper}>
        <Skeleton h={ONE_HUNDRED_PERCENT} w={ONE_HUNDRED_PERCENT} />
      </div>
      <div className={classes.groupNameWrapper}>
        <Skeleton h={ONE_HUNDRED_PERCENT} w={ONE_HUNDRED_PERCENT} />
      </div>
    </div>
  );
};

const FavoriteIdolSkeleton = () => {
  return (
    <div className={classes.favoriteIdolSkeletonWrapper}>
      <FavoriteIdolSkeletonItem />
      <FavoriteIdolSkeletonItem />
      <FavoriteIdolSkeletonItem />
      <FavoriteIdolSkeletonItem />
      <FavoriteIdolSkeletonItem />
      <FavoriteIdolSkeletonItem />
    </div>
  );
};

export default FavoriteIdolSkeleton;
