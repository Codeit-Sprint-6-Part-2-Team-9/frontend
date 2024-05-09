import Container from './Container';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <Container>
        <section className={classes.intro}>
          <h1> 소개 부분 </h1>
        </section>
        <section className={classes.description}>
          <h1> 설명 부분 </h1>
        </section>
      </Container>
    </div>
  );
};

export default HomePage;
