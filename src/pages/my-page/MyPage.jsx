import Container from './Container.jsx';
import classes from './MyPage.module.css';

const MyPage = () => {
  return (
    <div className={classes.MyPage}>
      <Container>
        <section className={classes.favoriteIdols}>
          <h1 className={classes.sectionTitle}>내가 관심있는 아이돌</h1>
        </section>
        <hr className={classes.horizontalLine} />
        <section className={classes.addFavoriteIdols}>
          <h1 className={classes.sectionTitle}>
            관심 있는 아이돌을 추가해보세요.
          </h1>
        </section>
      </Container>
    </div>
  );
};

export default MyPage;
