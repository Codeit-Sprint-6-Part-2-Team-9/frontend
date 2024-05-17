import { Link } from 'react-router-dom';
import logoimg from '../../assets/logo.svg';
import introimg from '../../assets/img_home_intro.svg';
import donatemobile from '../../assets/img_donate_mobile.svg';
import mypagemobile from '../../assets/img_mypage_mobile.svg';
import votemobile from '../../assets/img_vote_mobile.svg';
import Container from './Container';
import theme from '../../theme';
import useCredits from '../../api/credits/useCredits';
import Buttons from '../../components/Buttons';
import classes from './HomePage.module.css';
import { motion, spring } from 'framer-motion';

const HomePage = () => {
  const [unUseFunc1, unUseFunc2, unUseFunc3, newCredits] = useCredits();
  const handleResetClick = () => newCredits();

  const variants = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: {
      type: spring,
      bounce: 0,
      duration: 0.7,
    },
  };

  return (
    <Container>
      <motion.section
        {...variants}
        transition={{
          ease: 'easeInOut',
          duration: 2,
          y: { duration: 1 },
        }}
      >
        <div className={classes.centerLine}></div>
        <section className={classes.intro}>
          <div className={classes.introTitle}>
            <div className={classes.introTitleFont}>
              내가 좋아하는 아이돌을
              <br />
              가장{' '}
              <span style={{ color: theme.colors.brand[0] }}>쉽게 덕질</span>
              하는 방법
            </div>
          </div>
          <Link to="/dashboard">
            <div className={classes.logoImgWrap}>
              <img
                className={classes.logoImg}
                src={logoimg}
                alt="로고 이미지"
              />
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
            <Link to="/dashboard">
              <Buttons type="landing" onClick={handleResetClick}>
                <span className={classes.landingButtonFont}>지금 시작하기</span>
              </Buttons>
            </Link>
          </div>
        </section>
      </motion.section>
      <section className={classes.description}>
        <div className={classes.descriptionSection}>
          <motion.div {...variants}>
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
          </motion.div>
        </div>
        <div className={classes.descriptionSection}>
          <motion.div {...variants}>
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
          </motion.div>
        </div>
        <div className={classes.descriptionSection}>
          <motion.div {...variants}>
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
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default HomePage;
