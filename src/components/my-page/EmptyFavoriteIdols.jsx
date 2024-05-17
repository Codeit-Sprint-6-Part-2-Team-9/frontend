import classes from './EmptyFavoriteIdols.module.css';

const EmptyFavoriteIdols = () => {
  return (
    <div className={classes.EmptyFavoriteIdols}>
      <p className={classes.text}>관심 있는 아이돌이 없습니다.</p>
    </div>
  );
};

export default EmptyFavoriteIdols;
