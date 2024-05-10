import { useEffect, useState } from 'react';

import RoundCardWithText from './components/RoundCardWithText';
import Container from './components/Container.jsx';
import classes from './MyPage.module.css';
import Buttons from '../../components/Buttons';
import FavoriteIdolsExample from '../../api/favoriteIdols/FavoriteIdolsExample';
import NotFound from '../NotFound';

import useIdolsQuery from '../../api/idols/useIdolsQuery';

const MyPage = () => {
  const { data, error, isLoading, isError } = useIdolsQuery();
  const [idolData, setIdolData] = useState(data);

  useEffect(() => {
    setIdolData(data?.pages[0].list);
  }, [data]);

  useEffect(() => {
    console.log(idolData);
  }, [idolData]);

  if (isLoading) {
    return <>Loading</>;
  }

  if (isError) {
    console.error(error);
    return <NotFound errorMessage={'오류가 발생하였습니다.'} />;
  }

  return (
    <div className={classes.MyPage}>
      <Container>
        <section className={classes.favoriteIdols}>
          <h1 className={classes.sectionTitle}>내가 관심있는 아이돌</h1>
          <div className={classes.myFavoriteIdolsWrapper}></div>
        </section>
        <hr className={classes.horizontalLine} />
        <section className={classes.addFavoriteIdols}>
          <h1 className={classes.sectionTitle}>
            관심 있는 아이돌을 추가해보세요.
          </h1>
          <div className={classes.addFavoriteIdolsWrapper}>
            {idolData?.map((idol) => (
              <RoundCardWithText
                key={`idol-${idol.id}`}
                name={idol.name}
                groupName={idol.group}
                profilePicture={idol.profilePicture}
              />
            ))}
          </div>
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
