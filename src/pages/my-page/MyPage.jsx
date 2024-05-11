import { useEffect, useState } from 'react';

import useIdolsQuery from '../../api/idols/useIdolsQuery';
import useFavoriteIdols from '../../api/favoriteIdols/useFavoriteIdols';

import RoundCardWithText from './components/RoundCardWithText';
import Container from './components/Container.jsx';
import classes from './MyPage.module.css';
import Buttons from '../../components/Buttons';
import NotFound from '../NotFound';
import FavoriteRoundCard from './components/FavoriteRoundCard';

import PREV_BTN from '../../assets/btnArrowLeft.svg';
import NEXT_BTN from '../../assets/btnArrowRight.svg';

const getPageSize = () => {
  if (window.innerWidth >= 1280) {
    return 16;
  } else if (window.innerWidth >= 780) {
    return 8;
  } else {
    return 6;
  }
};

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
  const [selectableIdols, setSelectableIdols] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(getPageSize());

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

  // Pagenation
  const pageCount = Math.ceil(selectableIdols.length / pageSize);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pageCount - 1));
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setPageSize(getPageSize);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setPageSize(getPageSize);
      });
    };
  }, []);

  useEffect(() => {
    setIdolData(data?.pages[0].list);
    console.log(idolData);
  }, [data]);

  useEffect(() => {
    if (idolData?.length > 0) {
      const selectableData = idolData.filter(
        (idol) => !favoriteIdols.includes(idol.id),
      );
      setSelectableIdols(selectableData);
    }
  }, [idolData, favoriteIdols]);

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
          <h1 className={classes.sectionTitle}>내가 관심 있는 아이돌</h1>
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
          <div className={classes.sectionTitleWrapper}>
            <h1 className={classes.sectionTitle}>
              관심 있는 아이돌을 추가해보세요.
            </h1>
          </div>
          <div
            className={`${classes.addFavoriteIdolsWrapper} ${pageSize === 8 ? classes.tablet : ''} ${pageSize === 6 ? classes.mobile : ''}  `}
          >
            {selectableIdols
              ?.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
              .map((idol) => (
                <RoundCardWithText
                  key={`idol-${idol.id}`}
                  id={idol.id}
                  name={idol.name}
                  groupName={idol.group}
                  profilePicture={idol.profilePicture}
                  onClick={handleFavoriteList}
                  isChecked={checkedFavoriteId.includes(idol.id)}
                />
              ))}
          </div>
          {currentPage !== 0 && (
            <img
              src={PREV_BTN}
              className={classes.prevBtn}
              onClick={handlePrevPage}
            />
          )}
          {currentPage !== pageCount - 1 && (
            <img
              src={NEXT_BTN}
              className={classes.nextBtn}
              onClick={handleNextPage}
            />
          )}
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
