import classes from './AddFavoriteIdolsSkeleton.module.css';
import { Skeleton } from '@mantine/core';

const ONE_HUNDRED_PERCENT = '100%';

const AddFavoriteIdolsSkeletonItem = () => {
  return (
    <div className={classes.AddFavoriteIdolsSkeletonItem}>
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

const AddFavoriteIdolsSkeleton = () => {
  return (
    <div className={classes.AddFavoriteIdolSkeletonWrapper}>
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
      <AddFavoriteIdolsSkeletonItem />
    </div>
  );
};

export default AddFavoriteIdolsSkeleton;
