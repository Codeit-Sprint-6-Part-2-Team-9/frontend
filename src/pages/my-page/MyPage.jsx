import { useState } from 'react';

import RoundCardWithText from './RoundCardWithText';
import Container from './Container.jsx';
import classes from './MyPage.module.css';
import Buttons from '../../components/Buttons';

const MyPage = () => {
  const [data, setData] = useState([]);

  return (
    <div className={classes.MyPage}>
      <Container>
        <section className={classes.favoriteIdols}>
          <h1 className={classes.sectionTitle}>내가 관심있는 아이돌</h1>
          <div className={classes.myFavoriteIdolsWrapper}>
            <RoundCardWithText name="민지" groupName="뉴진스" />
            <RoundCardWithText name="민지" groupName="뉴진스" />
            <RoundCardWithText name="민지" groupName="뉴진스" />
            <RoundCardWithText name="민지" groupName="뉴진스" />
            <RoundCardWithText name="민지" groupName="뉴진스" />
            <RoundCardWithText name="민지" groupName="뉴진스" />
            <RoundCardWithText name="민지" groupName="뉴진스" />
            <RoundCardWithText name="민지" groupName="뉴진스" />
            <RoundCardWithText name="민지" groupName="뉴진스" />
            <RoundCardWithText name="민지" groupName="뉴진스" />
          </div>
        </section>
        <hr className={classes.horizontalLine} />
        <section className={classes.addFavoriteIdols}>
          <h1 className={classes.sectionTitle}>
            관심 있는 아이돌을 추가해보세요.
          </h1>
          <div className={classes.addFavoriteIdolsWrapper}></div>
        </section>
        <div className={classes.btnWrapper}>
          <Buttons type="add" icon="plus">
            추가하기
          </Buttons>
        </div>
      </Container>
    </div>
  );
};

export default MyPage;
