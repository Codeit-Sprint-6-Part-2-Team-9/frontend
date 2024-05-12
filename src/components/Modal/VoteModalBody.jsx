import { useState } from 'react';
import { Button } from '@mantine/core';

import classes from './VoteModalBody.module.css';

import RoundCard from '../RoundCard';
import Buttons from '../Buttons';

// APIS
import useChartQuery from '../../api/charts/useChartQuery';
import useVoteMutation from '../../api/votes/useVoteMutation';

// Credits
import useCredits from '../../api/credits/useCredits';

// Credit Warn Modal
import ModalComponent from '../Modal/ModalComponent';
import { useDisclosure } from '@mantine/hooks';

import ICON_CHECKED from '../../assets/icon_checked.svg';

const VoteOption = ({ idol, onClick, isChecked }) => {
  const { id, profilePicture, rank, group, name, totalVotes } = idol;

  return (
    <div
      className={classes.VoteOption}
      onClick={() => {
        onClick(id);
      }}
    >
      <div className={classes.leftSection}>
        <div className={classes.roundCardWrapper}>
          {isChecked && (
            <div>
              <div className={classes.checkedWrapper}></div>
              <img className={classes.iconChecked} src={ICON_CHECKED} />
            </div>
          )}
          <RoundCard profileUrl={profilePicture} alt={name} />
        </div>
        <span className={classes.rank}>{rank}</span>
        <div className={classes.textWrapper}>
          <p className={classes.idolInfo}>{group + ' ' + name}</p>
          <p className={classes.totalVotes}>{totalVotes.toLocaleString()}표</p>
        </div>
      </div>
      <input
        className={classes.radioInput}
        type="radio"
        checked={isChecked}
        onChange={() => {}}
      />
    </div>
  );
};
const VoteModalBody = ({ type }) => {
  const [checked, setChecked] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [page, setPage] = useState(0);

  const [opened, { open, close }] = useDisclosure(false);

  const [credit, chargeCredit, payCredit] = useCredits();
  const { mutate: vote } = useVoteMutation();
  const { data, fetchNextPage, hasNextPage } = useChartQuery(type);

  const handleSelected = (id) => {
    setChecked(id);
  };

  const loadMoreIdols = () => {
    fetchNextPage(page + 1);
    setPage(page + 1);
  };

  const renderVoteOption = () => {
    return data?.pages
      .flatMap((page) => page.idols)
      .sort((a, b) => b.totalVotes - a.totalVotes)
      .map((idol) => (
        <VoteOption
          key={idol.id}
          idol={idol}
          onClick={handleSelected}
          isChecked={idol.id === checked}
        />
      ));
  };

  return (
    <div className={classes.VoteModalBody}>
      <ModalComponent
        opened={opened}
        close={close}
        modalDataState={'creditWarn'}
      />
      <div className={classes.radioWrapper}>{renderVoteOption()}</div>
      <div className={classes.moreButtonWrapper}>
        <Buttons
          type="more"
          disabled={!hasNextPage}
          onClick={hasNextPage ? loadMoreIdols : undefined}
          style={{ width: '100%' }}
        >
          더보기
        </Buttons>
      </div>
      <Button
        style={{ width: '100%' }}
        variant="gradient"
        gradient={{ from: '#f96d69', to: '#FE5493', deg: 90 }}
        disabled={btnDisabled}
        onClick={() => {
          try {
            payCredit(1000);
          } catch {
            open();
            return;
          }
          vote(parseInt(checked));
          setBtnDisabled(true);
        }}
      >
        {btnDisabled ? '이미 차트에 투표했어요.' : '투표하기'}
      </Button>
      <p className={classes.text}>
        투표하는 데 <span className={classes.accent}>1000 크레딧</span>이
        소모됩니다.
      </p>
    </div>
  );
};

export default VoteModalBody;
