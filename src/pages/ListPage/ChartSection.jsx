import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import ModalComponent from '../../components/Modal/ModalComponent';
import useChartQuery from '../../api/charts/useChartQuery';
import ChartCard from '../../components/ChartCard';
import Typography from '../../components/Typography';
import classes from './ChartSection.module.css';
import Buttons from '../../components/Buttons';

const setPageSizeBasedOnWidth = () => {
  const isWidthLargerThan1280px = window.matchMedia(
    '(min-width: 1280px)',
  ).matches;
  return isWidthLargerThan1280px ? 10 : 5;
};

function ChartSection() {
  const [opened, { open, close }] = useDisclosure(false);
  const menuArr = ['이달의 여자 아이돌', '이달의 남자 아이돌'];
  const [activeTab, setActiveTab] = useState(0);

  const { data, fetchNextPage, hasNextPage } = useChartQuery(
    activeTab === 0 ? 'female' : 'male',
    setPageSizeBasedOnWidth,
  );

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const loadMoreIdols = () => {
    fetchNextPage();
  };

  const renderChartCards = () =>
    data?.pages

      .sort((a, b) => b.totalVotes - a.totalVotes)
      .map((idol, index) => (
        <ChartCard key={idol.id} idol={idol} rank={index + 1} />
      ));

  return (
    <div className={classes.chartSection}>
      <ModalComponent
        opened={opened}
        close={close}
        modalDataState={`${activeTab === 0 ? 'female' : 'male'}Vote`}
      />
      <div className={classes.chartButtonWrapper}>
        <div className={classes.typography}>
          <Typography type="bold20lh26">이달의 차트</Typography>
        </div>
        <Buttons
          type="vote"
          icon="chart"
          style={{ fontSize: '13px' }}
          onClick={open}
        >
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
        <div className={classes.moreButtonWrapper}>
          <Buttons
            type="more"
            disabled={!hasNextPage}
            onClick={hasNextPage ? loadMoreIdols : undefined}
          >
            더보기
          </Buttons>
        </div>
      </div>
    </div>
  );
}

export default ChartSection;
