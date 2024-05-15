import { useState, useEffect } from 'react';
import { Progress } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Typography from '../Typography';
import classes from './Carousel.module.css';
import calculateTimeRemaining from '../../utils/calculateTimeRemaining.jsx';
import fotmatTargetDonation from '../../utils/fotmatTargetDonation.jsx';
import coverArtistImage from '../../assets/coverDonation.svg';
import Buttons from '../../components/Buttons';
import ModalComponent from '../../components/Modal/ModalComponent';
import creditIcon from '../../assets/creditIcon.svg';

const CarouselCard = ({ card }) => {
  const {
    id,
    idol,
    receivedDonations,
    targetDonation,
    deadline,
    title,
    subtitle,
  } = card;

  const percentAchieved = (receivedDonations / targetDonation) * 100;
  const timeRemaining = calculateTimeRemaining(deadline);
  const formattedTargetDonation = fotmatTargetDonation(targetDonation);
  const formattedReceivedDonations = receivedDonations.toLocaleString();
  const [opened, { open, close }] = useDisclosure(false);
  const [modalDataState, setModalDataState] = useState('donation');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const openModal = (modalName) => {
    open();
    setModalDataState(modalName);
  };

  useEffect(() => {
    if (percentAchieved >= 100) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [percentAchieved]);

  return (
    <div>
      <ModalComponent
        opened={opened}
        close={close}
        modalDataState={modalDataState}
        donationProps={{
          donationId: id,
          profileImg: idol.profilePicture,
          subtitle,
          title,
        }}
      />
      <div className={classes.imageSection}>
        <img
          src={idol.profilePicture}
          alt={title}
          className={classes.artistImage}
        />
        <img
          src={coverArtistImage}
          alt="cover artist image"
          className={classes.overlayImage}
        />
        <div className={classes.donateBtn}>
          <Buttons
            type="donate"
            onClick={() => {
              openModal('donation');
            }}
            disabled={isButtonDisabled}
            style={{
              filter: isButtonDisabled ? 'grayscale(100%)' : 'none',
              cursor: percentAchieved >= 100 ? 'not-allowed' : 'pointer',
              color: 'var(--mantine-color-white-0',
            }}
          >
            {percentAchieved >= 100 ? '목표달성' : '후원하기'}{' '}
          </Buttons>
        </div>
      </div>

      <div className={classes.progressbarSection}>
        <p className={classes.subtitle}>{subtitle}</p>
        <p className={classes.title}>{title}</p>
        <div className={classes.progressbarTextSection}>
          <div className={classes.progressbarCreditSection}>
            <img
              src={creditIcon}
              alt="credit icon"
              className={classes.creditIcon}
            />
            <p className={classes.creditNumber}>
              {formattedReceivedDonations} / {formattedTargetDonation}
            </p>
          </div>
          <p className={classes.timeRemaining}>{timeRemaining}</p>
        </div>
        <Progress
          value={percentAchieved}
          mt={0}
          size={1}
          radius={1}
          color="#F96D69"
          style={{ backgroundColor: 'var(--mantine-color-white-0)' }}
        />
      </div>
    </div>
  );
};

export default CarouselCard;
