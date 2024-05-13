import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@mantine/hooks';
import logoimg from '../../assets/logo.svg';
import introimg from '../../assets/introimg.svg';
import donatemobile from '../../assets/donatemobile.svg';
import mypagemobile from '../../assets/mypagemobile.svg';
import votemobile from '../../assets/votemobile.svg';
import Container from './Container';
import theme from '../../theme';
import useCredits from '../../api/credits/useCredits';
import Buttons from '../../components/Buttons';
import classes from './HomePage.module.css';

const HomePage = () => {
  const [title] = useState('Fandom-k');
  useDocumentTitle(title);

  const [unUseFunc1, unUseFunc2, unUseFunc3, newCredits] = useCredits();
  const handleResetClick = () => newCredits();

  return (
    <Container>
      <div className={classes.centerLine}></div>
      <section className={classes.intro}>
        <div className={classes.introTitle}>
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
            <Buttons type="landing" onClick={handleResetClick}>
              <span className={classes.landingButtonFont}>지금 시작하기</span>
            </Buttons>
          </Link>
        </div>
      </section>
      <section className={classes.description}>
        <div className={classes.descriptionSection}>
          <div className={classes.backgroundGradient1}>
            <div className={classes.mobileLeft}>
              <div className={classes.descriptionTitle1}>후원하기</div>
              <div className={classes.descriptionText}>
                좋아하는 아이돌에게
                <br />
                쉽게 조공해보세요
              </div>
            </div>
            <img
              className={classes.mobile}
              src={donatemobile}
              alt="후원 이미지"
            />
          </div>
        </div>
        <div className={classes.descriptionSection}>
          <div className={classes.backgroundGradient2}>
            <div className={classes.mobileRight}>
              <div className={classes.descriptionTitle2}>이달의 아티스트</div>
              <div className={classes.descriptionText}>
                내 아티스트에게 1등의
                <br />
                영예를 선물하세요
              </div>
            </div>
            <img
              className={classes.mobile}
              src={votemobile}
              alt="투표 이미지"
            />
          </div>
        </div>
        <div className={classes.descriptionSection}>
          <div className={classes.backgroundGradient3}>
            <div className={classes.mobileLeft}>
              <div className={classes.descriptionTitle3}>나만의 아티스트</div>
              <div className={classes.descriptionText}>
                좋아하는 아티스트들의
                <br />
                소식을 모아보세요
              </div>
            </div>
            <img
              className={classes.mobile}
              src={mypagemobile}
              alt="마이페이지 이미지"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HomePage;
