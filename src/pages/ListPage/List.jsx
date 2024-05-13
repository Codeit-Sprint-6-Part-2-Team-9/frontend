import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import ModalComponent from '../../components/Modal/ModalComponent';
import CarouselSection from '../../components/Carousel/Carousel';
import ChartSection from './ChartSection';
import MyCreditRechargeButton from '../../components/MyCreditRechargeButton';
import Typography from '../../components/Typography';
import classes from './ListPage.module.css';

function List() {
  const [opened, { open, close }] = useDisclosure(false);
  const [modalDataState, setModalDataState] = useState('donation');

  const openModal = (modalName) => {
    open();
    setModalDataState(modalName);
  };

  return (
    <div className={classes.listWrapper}>
      <ModalComponent
        opened={opened}
        close={close}
        modalDataState={modalDataState}
      />
      <div className={classes.rechargeButtonwrapper}>
        <div className={classes.creditRechargeButton}>
          <MyCreditRechargeButton
            onClick={() => {
              openModal('creditCharge');
            }}
          />
        </div>
      </div>
      <div className={classes.typography}>
        <Typography type="bold20lh26">후원을 기다리는 조공</Typography>
      </div>
      <div className={classes.carouselSectionWrapper}>
        <CarouselSection />
      </div>
      <div className={classes.chartSectionWrapper}>
        <p className={classes.chartSection}></p>
        <ChartSection />
      </div>
    </div>
  );
}

export default List;
