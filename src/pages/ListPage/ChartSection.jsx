import { useState, useEffect } from 'react';
import useChartQuery from '../../api/charts/useChartQuery';
import ChartCard from '../../components/ChartCard';
import classes from './ChartSection.module.css';
import Buttons from '../../components/Buttons';

function ChartSection() {
  const menuArr = ['이달의 여자 아이돌', '이달의 남자 아이돌'];
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1280 ? 5 : 10);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const {
    data: femaleData,
    fetchNextPage: fetchNextFemalePage,
    hasNextPage: hasNextFemalePage,
  } = useChartQuery('female', { initialPage: page, pageSize: itemsPerPage });
  const {
    data: maleData,
    fetchNextPage: fetchNextMalePage,
    hasNextPage: hasNextMalePage,
  } = useChartQuery('male', { initialPage: page, pageSize: itemsPerPage });

  const handleTabClick = (index) => {
    setActiveTab(index);
    setPage(0);
  };

  const loadMoreIdols = () => {
    if (activeTab === 0) {
      fetchNextFemalePage(page + 1);
    } else {
      fetchNextMalePage(page + 1);
    }
    setPage(page + 1);
  };

  const currentData = activeTab === 0 ? femaleData : maleData;

  const renderChartCards = () => {
    return currentData?.pages
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
        {((activeTab === 0 && hasNextFemalePage) ||
          (activeTab === 1 && hasNextMalePage)) && (
          <div className={classes.loadMoreButtonWrapper}>
            <Buttons type="more" onClick={loadMoreIdols}>
              더보기
            </Buttons>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChartSection;
