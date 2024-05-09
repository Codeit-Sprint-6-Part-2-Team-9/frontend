import Container from './Container';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <Container>
      <section className={classes.intro}>
        <div style={{ color: 'white' }}> 소개 부분 </div>
      </section>
      <section className={classes.description}>
        <div style={{ color: 'white' }}> 설명 부분 </div>
      </section>
    </Container>
  );
};

export default HomePage;
