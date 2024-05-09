import { Link } from 'react-router-dom';
import Container from './Container';
import Buttons from '../../components/Buttons';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <Container>
      <section className={classes.intro}>
        <div style={{ color: 'white' }}> 소개 부분 </div>
        <div className={classes.landingButton}>
          <Link to="/list">
            <Buttons type="landing">지금 시작하기</Buttons>
          </Link>
        </div>
      </section>
      <section className={classes.description}>
        <div style={{ color: 'white' }}> 설명 부분 </div>
      </section>
    </Container>
  );
};

export default HomePage;
