import { useEffect, useState } from 'react';

import RoundCardWithText from './components/RoundCardWithText';
import Container from './components/Container.jsx';
import classes from './MyPage.module.css';
import Buttons from '../../components/Buttons';
import NotFound from '../NotFound';

import useIdolsQuery from '../../api/idols/useIdolsQuery';
import useFavoriteIdols from '../../api/favoriteIdols/useFavoriteIdols';
import FavoriteRoundCard from './components/FavoriteRoundCard';

const MyPage = () => {
  const [
    favoriteIdols,
    resetFavoriteIdols,
    addFavoriteIdol,
    removeFavoriteIdol,
  ] = useFavoriteIdols();

  const { data, error, isLoading, isError } = useIdolsQuery();
  const [idolData, setIdolData] = useState([]);
  const [checkedFavoriteId, setCheckedFavoriteId] = useState([]);

  const handleFavoriteList = (idolId) => {
    if (checkedFavoriteId.includes(idolId)) {
      setCheckedFavoriteId(checkedFavoriteId.filter((item) => item !== idolId));
      return;
    }
    setCheckedFavoriteId((prevState) => [...prevState, idolId]);
  };

  const handleDeleteBtn = (idolId) => {
    setCheckedFavoriteId(checkedFavoriteId.filter((item) => item !== idolId));
    removeFavoriteIdol(idolId);
  };

  useEffect(() => {
    setIdolData(data?.pages[0].list);
    console.log(idolData);
  }, [data]);

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
          <div className={classes.myFavoriteIdolsWrapper}>
            {idolData
              ?.filter((idol) => favoriteIdols.includes(idol.id))
              .map((idol) => (
                <FavoriteRoundCard
                  key={`idol-${idol.id}`}
                  id={idol.id}
                  name={idol.name}
                  groupName={idol.group}
                  profilePicture={idol.profilePicture}
                  onClick={handleDeleteBtn}
                />
              ))}
          </div>
        </section>
        <hr className={classes.horizontalLine} />
        <section className={classes.addFavoriteIdols}>
          <h1 className={classes.sectionTitle}>
            관심 있는 아이돌을 추가해보세요.
          </h1>
          <div className={classes.addFavoriteIdolsWrapper}>
            {idolData
              ?.filter((idol) => !favoriteIdols.includes(idol.id))
              .map((idol) => (
                <RoundCardWithText
                  key={`idol-${idol.id}`}
                  id={idol.id}
                  name={idol.name}
                  groupName={idol.group}
                  profilePicture={idol.profilePicture}
                  onClick={handleFavoriteList}
                />
              ))}
          </div>
        </section>
        <div className={classes.btnWrapper}>
          <Buttons
            type="add"
            icon="plus"
            onClick={() => {
              addFavoriteIdol(checkedFavoriteId);
            }}
          >
            추가하기
          </Buttons>
        </div>
      </Container>
    </div>
  );
};

export default MyPage;
