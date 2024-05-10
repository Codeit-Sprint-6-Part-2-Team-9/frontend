import { Link } from 'react-router-dom';
import theme from '../../theme';
import logoimg from '../../assets/logo.svg';
import introimg from '../../assets/introimg.svg';
import Container from './Container';
import Buttons from '../../components/Buttons';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <Container>
      <section className={classes.intro}>
        <div className={classes.introTitle} style={{ color: 'white' }}>
          <div className={classes.introTitleFont}>
            내가 좋아하는 아이돌을
            <br />
            가장 <span style={{ color: theme.colors.brand[0] }}>쉽게 덕질</span>
            하는 방법
          </div>
        </div>
        <Link to="/list">
          <div className={classes.logoImgWrap}>
            <img className={classes.logoImg} src={logoimg} alt="로고 이미지" />
          </div>
        </Link>
        <div className={classes.introImgWrap}>
          <img
            className={classes.introImg}
            src={introimg}
            alt="인트로 이미지"
          />
        </div>
        <div className={classes.landingButton}>
          <Link to="/list">
            <Buttons type="landing">
              <span className={classes.landingButtonFont}>지금 시작하기</span>
            </Buttons>
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
