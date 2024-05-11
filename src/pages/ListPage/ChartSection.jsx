import { useState, useEffect } from 'react';
import useChartQuery from '../../api/charts/useChartQuery';
import ChartCard from '../../components/ChartCard';
import classes from './ChartSection.module.css';
import Buttons from '../../components/Buttons';

function ChartSection() {
  const menuArr = ['이달의 여자 아이돌', '이달의 남자 아이돌'];
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1280 ? 5 : 10);
      setPage(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { data, fetchNextPage, hasNextPage } = useChartQuery(
    activeTab === 0 ? 'female' : 'male',
    { initialPage: page, pageSize: itemsPerPage },
  );

  const handleTabClick = (index) => {
    setActiveTab(index);
    setPage(0);
  };

  const loadMoreIdols = () => {
    fetchNextPage(page + 1);
    setPage(page + 1);
  };

  const renderChartCards = () => {
    return data?.pages
      .flatMap((page) => page.idols)
      .sort((a, b) => b.totalVotes - a.totalVotes)
      .map((idol, index) => (
        <ChartCard key={idol.id} idol={idol} rank={index + 1} />
      ));
  };

  return (
    <div className={classes.chartSection}>
      <div className={classes.chartButtonWrapper}>
        <h2>이달의 차트</h2>
        <Buttons type="vote" icon="chart" style={{ fontSize: '13px' }}>
          차트 투표하기
        </Buttons>
      </div>
      <div className={classes.chartWrapper}>
        {menuArr.map((element, index) => (
          <li
            key={index}
            className={`${classes.tab} ${activeTab === index ? classes.focused : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {element}
          </li>
        ))}
      </div>
      <div className={classes.chart}>
        {renderChartCards()}
        {hasNextPage ? (
          <div className={classes.loadMoreButtonWrapper}>
            <Buttons type="more" onClick={loadMoreIdols}>
              더보기
            </Buttons>
          </div>
        ) : (
          <div className={classes.loadMoreButtonWrapper}>
            <Buttons
              type="more"
              disabled={true}
              style={{ pointerEvents: 'none' }}
            >
              더보기
            </Buttons>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChartSection;