import { useState } from 'react';
import { Progress } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Typography from '../Typography';
import classes from './Carousel.module.css';
import calculateTimeRemaining from '../../utils/calculateTimeRemaining.jsx';
import creditIcon from '../../assets/creditIcon.svg';
import coverArtistImage from '../../assets/coverDonation.svg';
import Buttons from '../../components/Buttons';
import ModalComponent from '../../components/Modal/ModalComponent';
import creditIcon from "../../assets/creditIcon.svg";
import coverArtistImage from "../../assets/coverDonation.svg";

const CarouselCard = ({ card }) => {
  const { idol, receivedDonations, targetDonation, deadline, title, subtitle } =
    card;

  const percentAchieved = (receivedDonations / targetDonation) * 100;
  const timeRemaining = calculateTimeRemaining(deadline);
  const [opened, { open, close }] = useDisclosure(false);
  const [modalDataState, setModalDataState] = useState('donation');
  const openModal = (modalName) => {
    open();
    setModalDataState(modalName);
  };

  return (
    <div>
      <ModalComponent
        opened={opened}
        close={close}
        modalDataState={modalDataState}
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
          >
            후원하기
          </Buttons>
        </div>


      </div>

      <div className={classes.progressbarSection}>
        <p className={classes.title}>{title}</p>
        <p className={classes.subtitle}>{subtitle}</p>
        <div className={classes.progressbarTextSection}>
          <div className={classes.progressbarCreditSection}>
            <img
              src={creditIcon}
              alt="credit icon"
              className={classes.creditIcon}
            />
            <Typography
              type="medium12lh18ls017"
              style={{ color: 'var(--mantine-color-brand-0)' }}
            >
              {receivedDonations}
            </Typography>
          </div>
          <Typography
            type="medium12lh18ls017"
            style={{ color: 'var(--mantine-color-white-0)' }}
          >
            {timeRemaining}
          </Typography>
        </div>
        <Progress
          value={percentAchieved}
          mt={10}
          mb={100}
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
